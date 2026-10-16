import { useEffect, useRef, useState } from "react";
import { PanResponder, useWindowDimensions } from "react-native";
import type { NativeElementHandle } from "@/native/elements";
type SwipeDirection = "left" | "right";
interface Options { onCommitLeft: () => void; onCommitRight: () => void; reducedMotion: boolean; thresholdRatio?: number; minThresholdPx?: number; flickVelocity?: number }
export function useSwipeGesture(options: Options) {
  const { width } = useWindowDimensions();
  const ref = useRef<NativeElementHandle>(null);
  const latest = useRef(options);
  latest.current = options;
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const busy = useRef(false);
  const frame = useRef<number | null>(null);
  const offset = useRef(0);
  const paint = (value: number) => { offset.current = value; setDragOffset(value); ref.current?.setNativeProps({ style: { transform: [{ translateX: value }, { rotate: `${value / Math.max(width, 1) * 18}deg` }] } }); };
  const animate = (target: number, done?: () => void) => {
    const from = offset.current; const started = Date.now(); const duration = latest.current.reducedMotion ? 120 : 260;
    const step = () => { const t = Math.min(1, (Date.now() - started) / duration); paint(from + (target - from) * (1 - Math.pow(1 - t, 3))); if (t < 1) frame.current = requestAnimationFrame(step); else { frame.current = null; done?.(); } };
    frame.current = requestAnimationFrame(step);
  };
  const triggerCommit = (direction: SwipeDirection) => {
    if (busy.current) return; busy.current = true; setIsDragging(false);
    animate((direction === "left" ? -1 : 1) * (latest.current.reducedMotion ? 40 : width + 80), () => { if (direction === "left") latest.current.onCommitLeft(); else latest.current.onCommitRight(); });
  };
  const currentActions = useRef({ paint, animate, triggerCommit, width });
  currentActions.current = { paint, animate, triggerCommit, width };
  const responder = useRef(PanResponder.create({
    onMoveShouldSetPanResponder: (_event, gesture) => !busy.current && Math.abs(gesture.dx) > 8 && Math.abs(gesture.dx) > Math.abs(gesture.dy) * 1.25,
    onPanResponderGrant: () => setIsDragging(true),
    onPanResponderMove: (_event, gesture) => currentActions.current.paint(gesture.dx),
    onPanResponderRelease: (_event, gesture) => {
      setIsDragging(false);
      const threshold = Math.min(latest.current.minThresholdPx ?? 100, (currentActions.current.width - 32) * (latest.current.thresholdRatio ?? 0.3));
      if (Math.abs(gesture.dx) >= threshold || Math.abs(gesture.vx) > (latest.current.flickVelocity ?? 0.45)) currentActions.current.triggerCommit(gesture.dx < 0 ? "left" : "right");
      else currentActions.current.animate(0);
    },
    onPanResponderTerminate: () => { setIsDragging(false); currentActions.current.animate(0); },
  })).current;
  useEffect(() => () => { if (frame.current !== null) cancelAnimationFrame(frame.current); }, []);
  return { ref, isDragging, dragOffset, handlers: responder.panHandlers, triggerCommit };
}
