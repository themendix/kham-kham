import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent, MouseEvent as ReactMouseEvent, RefObject } from "react";

type SwipeDirection = "left" | "right";

interface UseSwipeGestureOptions {
  /** Appelé après l'animation d'envol quand la carte part vers la gauche (= "passer") */
  onCommitLeft: () => void;
  /** Appelé après l'animation d'envol quand la carte part vers la droite (= "apprendre") */
  onCommitRight: () => void;
  reducedMotion: boolean;
  /** Fraction de la largeur de la carte à dépasser pour valider (défaut 0.3) */
  thresholdRatio?: number;
  /** Seuil de secours en px si la largeur de la carte est indisponible (défaut 100) */
  minThresholdPx?: number;
  /** Vitesse (px/ms) au-delà de laquelle un flick valide même sous le seuil (défaut 0.45) */
  flickVelocity?: number;
}

interface SwipeHandlers {
  onPointerDown: (e: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerMove: (e: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerUp: (e: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerCancel: (e: ReactPointerEvent<HTMLDivElement>) => void;
  onClickCapture: (e: ReactMouseEvent<HTMLDivElement>) => void;
}

interface UseSwipeGestureResult {
  ref: RefObject<HTMLDivElement>;
  isDragging: boolean;
  handlers: SwipeHandlers;
  /** Déclenche la même animation d'envol que le geste, pour les boutons ✗ / ✓ */
  triggerCommit: (direction: SwipeDirection) => void;
}

const TAP_THRESHOLD_PX = 8;
const FLY_ROTATION_DEG = 18;
const FLY_DURATION_MS = 320;
const SETTLE_DURATION_MS = 260;
const REDUCED_FLY_DISTANCE_PX = 40;
const REDUCED_DURATION_MS = 160;
const FALLBACK_CARD_WIDTH_PX = 320;
const EASE_OUT = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Geste de glissement horizontal (souris + tactile, via Pointer Events) sur un élément.
 * Ne fait aucun `setState` pendant le drag : la position/rotation et l'opacité des
 * estampilles sont écrites directement en style/CSS custom properties sur `ref.current`.
 */
export function useSwipeGesture({
  onCommitLeft,
  onCommitRight,
  reducedMotion,
  thresholdRatio = 0.3,
  minThresholdPx = 100,
  flickVelocity = 0.45,
}: UseSwipeGestureOptions): UseSwipeGestureResult {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const pointerIdRef = useRef<number | null>(null);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const cardWidthRef = useRef(0);
  const movedPastTapThresholdRef = useRef(false);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const commitTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(
    () => () => {
      if (commitTimeoutRef.current !== undefined) window.clearTimeout(commitTimeoutRef.current);
    },
    [],
  );

  function currentThreshold() {
    return cardWidthRef.current > 0 ? cardWidthRef.current * thresholdRatio : minThresholdPx;
  }

  function applyTransform(dx: number, rotationDeg: number) {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `translateX(${dx}px) rotate(${rotationDeg}deg)`;
    const threshold = currentThreshold();
    const learnOpacity = dx > 0 ? Math.min(dx / threshold, 1) : 0;
    const passOpacity = dx < 0 ? Math.min(-dx / threshold, 1) : 0;
    el.style.setProperty("--sankofa-learn-opacity", String(learnOpacity));
    el.style.setProperty("--sankofa-pass-opacity", String(passOpacity));
  }

  function settleBack() {
    const el = ref.current;
    if (!el) return;
    const duration = reducedMotion ? REDUCED_DURATION_MS : SETTLE_DURATION_MS;
    isAnimatingRef.current = true;
    el.style.transition = `transform ${duration}ms ${EASE_OUT}`;
    el.style.transform = "translateX(0px) rotate(0deg)";
    el.style.setProperty("--sankofa-learn-opacity", "0");
    el.style.setProperty("--sankofa-pass-opacity", "0");
    window.setTimeout(() => {
      isAnimatingRef.current = false;
      if (ref.current) ref.current.style.transition = "none";
    }, duration);
  }

  function flyOut(direction: SwipeDirection, commit: () => void) {
    const el = ref.current;
    const duration = reducedMotion ? REDUCED_DURATION_MS : FLY_DURATION_MS;
    isAnimatingRef.current = true;

    if (el) {
      const width = cardWidthRef.current || el.getBoundingClientRect().width || FALLBACK_CARD_WIDTH_PX;
      const sign = direction === "right" ? 1 : -1;
      const distance = reducedMotion ? REDUCED_FLY_DISTANCE_PX : width * 1.5;
      const rotation = reducedMotion ? 0 : FLY_ROTATION_DEG * sign;
      el.style.transition = `transform ${duration}ms ${EASE_OUT}, opacity ${duration}ms ${EASE_OUT}`;
      el.style.transform = `translateX(${sign * distance}px) rotate(${rotation}deg)`;
      el.style.opacity = "0";
      el.style.setProperty("--sankofa-learn-opacity", direction === "right" ? "1" : "0");
      el.style.setProperty("--sankofa-pass-opacity", direction === "left" ? "1" : "0");
    }

    commitTimeoutRef.current = window.setTimeout(() => {
      isAnimatingRef.current = false;
      commit();
    }, duration);
  }

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.button !== 0 || isAnimatingRef.current) return;
    const el = ref.current;
    if (!el) return;
    // Pas de setPointerCapture ici : ça retargete aussi le futur `click` vers ce
    // wrapper, ce qui empêcherait un simple tap d'atteindre les boutons enfants
    // ("En savoir plus", favori). La capture n'est prise qu'une fois le geste
    // confirmé comme un drag (voir onPointerMove).
    pointerIdRef.current = e.pointerId;
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    lastXRef.current = e.clientX;
    lastTimeRef.current = e.timeStamp;
    velocityRef.current = 0;
    movedPastTapThresholdRef.current = false;
    cardWidthRef.current = el.getBoundingClientRect().width;
    el.style.transition = "none";
    setIsDragging(true);
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (pointerIdRef.current !== e.pointerId) return;
    const dx = e.clientX - startXRef.current;
    const dy = e.clientY - startYRef.current;
    if (!movedPastTapThresholdRef.current && Math.hypot(dx, dy) > TAP_THRESHOLD_PX) {
      movedPastTapThresholdRef.current = true;
      ref.current?.setPointerCapture(e.pointerId);
    }
    const dt = e.timeStamp - lastTimeRef.current;
    if (dt > 0) velocityRef.current = (e.clientX - lastXRef.current) / dt;
    lastXRef.current = e.clientX;
    lastTimeRef.current = e.timeStamp;

    const rotation = reducedMotion ? 0 : Math.max(-FLY_ROTATION_DEG, Math.min(FLY_ROTATION_DEG, dx / 12));
    applyTransform(dx, rotation);
  }

  function endDrag(dx: number) {
    const passedThreshold = Math.abs(dx) >= currentThreshold();
    const isFlick = dx !== 0 && Math.abs(velocityRef.current) >= flickVelocity && Math.sign(velocityRef.current) === Math.sign(dx);

    if (passedThreshold || isFlick) {
      const direction: SwipeDirection = dx > 0 ? "right" : "left";
      flyOut(direction, direction === "right" ? onCommitRight : onCommitLeft);
    } else {
      settleBack();
    }
  }

  function onPointerUp(e: ReactPointerEvent<HTMLDivElement>) {
    if (pointerIdRef.current !== e.pointerId) return;
    pointerIdRef.current = null;
    setIsDragging(false);
    endDrag(e.clientX - startXRef.current);
  }

  function onPointerCancel(e: ReactPointerEvent<HTMLDivElement>) {
    if (pointerIdRef.current !== e.pointerId) return;
    pointerIdRef.current = null;
    setIsDragging(false);
    settleBack();
  }

  function onClickCapture(e: ReactMouseEvent<HTMLDivElement>) {
    if (movedPastTapThresholdRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  function triggerCommit(direction: SwipeDirection) {
    if (isAnimatingRef.current) return;
    flyOut(direction, direction === "right" ? onCommitRight : onCommitLeft);
  }

  return {
    ref,
    isDragging,
    handlers: { onPointerDown, onPointerMove, onPointerUp, onPointerCancel, onClickCapture },
    triggerCommit,
  };
}
