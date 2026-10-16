import type { ComponentRef } from "react";
import type { ScrollView } from "react-native";
export type NativeScrollView = ComponentRef<typeof ScrollView>;
export interface ScrollAnchor { measureInWindow: (callback: (x: number, y: number, width: number, height: number) => void) => void }
let scroll: NativeScrollView | null = null;
let offset = 0;
const anchors = new Map<string, ScrollAnchor>();
export function attachScroll(view: NativeScrollView | null) { scroll = view; }
export function setScrollOffset(value: number) { offset = value; }
export function registerAnchor(id: string, anchor: ScrollAnchor | null) { if (anchor) anchors.set(id, anchor); else anchors.delete(id); }
export function scrollToTop() { scroll?.scrollTo({ y: 0, animated: false }); }
export function scrollToAnchor(id: string) { const anchor = anchors.get(id); anchor?.measureInWindow((_x, y) => scroll?.scrollTo({ y: Math.max(0, offset + y - 90), animated: true })); }
