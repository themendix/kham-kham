import React, { Children, Fragment, createContext, forwardRef, isValidElement, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { AccessibilityInfo, Image as RNImage, Linking, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View, useWindowDimensions } from "react-native";
import type { GestureResponderEvent, PanResponderInstance, StyleProp, TextStyle, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Image as ExpoImage } from "expo-image";
import { cssInterop } from "nativewind";
const StyledImage = cssInterop(ExpoImage, { className: "style" });
import Svg, { G, Path, Polygon, Line, Text as SvgText } from "react-native-svg";
import { twMerge } from "tailwind-merge";
import { imageAssets } from "./imageAssets";
import { registerAnchor, scrollToAnchor, scrollToTop } from "./scroll";

type PanResponderHandlers = Partial<PanResponderInstance["panHandlers"]>;
export interface NativeElementHandle {
  focus: (options?: { preventScroll?: boolean }) => void;
  scrollIntoView: (options?: { block?: string; behavior?: string }) => void;
  setNativeProps: (props: { style: ViewStyle }) => void;
}
export type NativeProps = Omit<HTMLAttributes<HTMLElement>, "style" | "children"> & PanResponderHandlers & {
  children?: ReactNode;
  style?: CSSProperties;
  disabled?: boolean;
  type?: string;
};
const Typography = createContext("");
const TextNesting = createContext(false);
const DetailsState = createContext({ open: false, toggle: () => {} });
const palette: Record<string, string> = {
  cream: "#f6eedd", ink: "#1e1b18", card: "#ffffff", primary: "#e24c2b", gold: "#f2b705", flame: "#f27405", success: "#2e8b57", danger: "#e4572e", indigo: "#2d3a8c", "ink-muted": "#5c554b", "ink-faint": "#726a5d", "primary-text": "#b53d22", histoire: "#f3d9a4", geo: "#bfe3b0", perso: "#c9c3f0", decouverte: "#a9e0de", white: "#ffffff", black: "#000000", "accent-rose": "#f6c2d0",
};
export function nativeColor(value?: string) {
  if (!value) return value;
  return value.replace(/var\(--color-([\w-]+)\)/g, (_match, name: string) => palette[name] ?? "#1e1b18");
}
function textClasses(value = "") { return value.split(/\s+/).filter((token) => /^(?:text-|font-|leading-|tracking-|underline$|line-through$|uppercase$|lowercase$|capitalize$|italic$)/.test(token)).join(" "); }
function classes(value = "") { return value.replace(/\bfixed\b/g, "absolute").replace(/\binline-flex\b/g, "flex flex-row").replace(/\bplace-items-center\b/g, "items-center justify-center"); }
const forbiddenStyles = new Set(["transition", "background", "animation", "transformOrigin", "overflowX", "overflowY", "objectFit", "objectPosition", "cursor", "userSelect", "touchAction", "lineHeight", "fillOpacity", "strokeDasharray", "strokeDashoffset"]);
function nativeStyle(style?: CSSProperties): ViewStyle & TextStyle {
  if (!style) return {};
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(style)) {
    if (key.startsWith("--") || forbiddenStyles.has(key) || value === undefined) continue;
    if (key === "transform" && typeof value === "string") continue;
    if (key === "opacity" && typeof value === "string") { const match = /,\s*([\d.]+)\)/.exec(value); result.opacity = match ? Number(match[1]) : Number(value) || 0; continue; }
    if (typeof value === "string" && (value === "auto" && key === "height" || value.includes("calc("))) continue;
    result[key] = typeof value === "string" ? nativeColor(value) : value;
  }
  return result as ViewStyle & TextStyle;
}
function nativePress(handler: NativeProps["onClick"], event: GestureResponderEvent) {
  handler?.(event as unknown as React.MouseEvent<HTMLElement>);
}
function accessibility(props: NativeProps) {
  const role = props.role;
  return {
    accessibilityLabel: props["aria-label"],
    accessibilityHint: props.title,
    accessibilityElementsHidden: props["aria-hidden"] === true || props["aria-hidden"] === "true",
    accessibilityLiveRegion: props["aria-live"] === "assertive" ? "assertive" as const : props["aria-live"] === "polite" ? "polite" as const : "none" as const,
    accessibilityRole: role === "alert" ? "alert" as const : role === "button" ? "button" as const : role === "link" ? "link" as const : undefined,
    accessibilityState: { disabled: props.disabled, selected: props["aria-pressed"] === true || props["aria-selected"] === true, expanded: typeof props["aria-expanded"] === "boolean" ? props["aria-expanded"] : undefined },
  };
}
function wrappedChildren(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (typeof child === "string" || typeof child === "number") return <NativeSpan>{child}</NativeSpan>;
    if (isValidElement<{ children?: ReactNode }>(child) && child.type === Fragment) return <Fragment>{wrappedChildren(child.props.children)}</Fragment>;
    return child;
  });
}
function gradientColors(className: string): [string, string] | null {
  const colors = [/(?:^|\s)from-([^\s]+)/.exec(className)?.[1], /(?:^|\s)to-([^\s]+)/.exec(className)?.[1]];
  if (!colors.every(Boolean)) return null;
  return colors.map((color) => color?.startsWith("[") ? color.slice(1, -1) : palette[color ?? ""] ?? "#f6eedd") as [string, string];
}
function gestureProps(props: NativeProps): PanResponderHandlers {
  return { onStartShouldSetResponder: props.onStartShouldSetResponder, onMoveShouldSetResponder: props.onMoveShouldSetResponder, onResponderGrant: props.onResponderGrant, onResponderMove: props.onResponderMove, onResponderRelease: props.onResponderRelease, onResponderTerminate: props.onResponderTerminate, onResponderTerminationRequest: props.onResponderTerminationRequest };
}

/** Shared native layout used by the ported screens; it never renders HTML. */
export const NativeBox = forwardRef<NativeElementHandle, NativeProps>(function NativeBox(props, forwardedRef) {
  const inherited = useContext(Typography);
  const ref = useRef<React.ComponentRef<typeof View>>(null);
  const dimensions = useWindowDimensions();
  const [width, setWidth] = useState(dimensions.width - 32);
  const className = props.className ?? "";
  const typeClasses = twMerge(inherited, textClasses(className));
  const anchor = props.id;
  useImperativeHandle(forwardedRef, () => ({
    focus: () => { AccessibilityInfo.announceForAccessibility(props["aria-label"] ?? ""); },
    scrollIntoView: () => { if (anchor) scrollToAnchor(anchor); },
    setNativeProps: (value) => ref.current?.setNativeProps(value),
  }), [anchor, props]);
  useEffect(() => { if (anchor && ref.current) registerAnchor(anchor, ref.current); return () => { if (anchor) registerAnchor(anchor, null); }; }, [anchor]);
  const row = /(?:^|\s)(?:flex|inline-flex)(?:\s|$)/.test(className) && !className.includes("flex-col");
  const columnMatch = /(?:^|\s)grid-cols-(\d)/.exec(className);
  const columns = columnMatch ? Number(columnMatch[1]) : 0;
  const gapMatch = /(?:^|\s)gap-([\d.]+)/.exec(className);
  const gap = gapMatch ? Number(gapMatch[1]) * 4 : 0;
  const children = columns > 1 ? Children.map(props.children, (child) => child == null || typeof child === "boolean" ? null : <View style={{ width: Math.max(0, (width - gap * (columns - 1)) / columns) }}>{wrappedChildren(child)}</View>) : wrappedChildren(props.children);
  const style: StyleProp<ViewStyle> = [row && { flexDirection: "row" }, columns > 1 && { flexDirection: "row", flexWrap: "wrap" }, nativeStyle(props.style)];
  const gradient = gradientColors(className);
  const content = <Typography.Provider value={typeClasses}>{gradient && <LinearGradient colors={gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} pointerEvents="none" />}{children}</Typography.Provider>;
  if (/fixed.*inset-0/.test(className)) return <Modal visible presentationStyle="fullScreen" animationType="slide"><SafeAreaView className="flex-1 bg-cream"><ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }} keyboardShouldPersistTaps="handled">{content}</ScrollView></SafeAreaView></Modal>;
  if (className.includes("overflow-x-auto")) return <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: gap || 12, paddingBottom: 8 }} keyboardShouldPersistTaps="handled"><Typography.Provider value={typeClasses}>{children}</Typography.Provider></ScrollView>;
  if (props.onClick) return <Pressable nativeID={props.id} className={classes(className)} style={style} onPress={(event) => nativePress(props.onClick, event)} disabled={props.disabled} {...accessibility(props)}>{content}</Pressable>;
  return <View ref={ref} nativeID={props.id} className={classes(className)} style={style} {...gestureProps(props)} onLayout={(event) => { const measured = event.nativeEvent.layout.width; if (columns > 1 && Math.abs(measured - width) > 1) setWidth(measured); }} {...accessibility(props)}>{content}</View>;
});

function NativeTextBase(props: NativeProps & { heading?: boolean; strong?: boolean }, ref?: React.ForwardedRef<NativeElementHandle>) {
  useImperativeHandle(ref, () => ({ focus: () => {}, scrollIntoView: () => scrollToTop(), setNativeProps: () => {} }), []);
  const inherited = useContext(Typography);
  const className = twMerge("font-body text-ink", inherited, props.heading ? "font-heading font-extrabold" : "", props.strong ? "font-bold" : "", classes(props.className));
  const parentText = useContext(TextNesting);
  const hasFlex = /(?:^|\s)(?:flex|inline-flex|grid)(?:\s|$)/.test(props.className ?? "");
  if (hasFlex && !parentText) return <NativeBox {...props} ref={ref} className={className} />;
  return <TextNesting.Provider value={true}><Text className={className} {...accessibility(props)} accessibilityRole={props.heading ? "header" : undefined} style={[nativeStyle(props.style), { fontFamily: className.includes("font-heading") ? className.includes("font-extrabold") ? "PoppinsExtraBold" : "Poppins" : "Inter" }]} numberOfLines={props.className?.includes("truncate") ? 1 : props.className?.includes("line-clamp-2") ? 2 : props.className?.includes("line-clamp-3") ? 3 : undefined} onPress={props.onClick ? (event) => nativePress(props.onClick, event) : undefined}>{props.children}</Text></TextNesting.Provider>;
}
export const NativeSpan = forwardRef<NativeElementHandle, NativeProps>((props, ref) => NativeTextBase(props, ref));
NativeSpan.displayName = "NativeSpan";
export const NativeParagraph = forwardRef<NativeElementHandle, NativeProps>((props, ref) => NativeTextBase(props, ref));
NativeParagraph.displayName = "NativeParagraph";
export const NativeH1 = forwardRef<NativeElementHandle, NativeProps>((props, ref) => NativeTextBase({ ...props, heading: true }, ref));
NativeH1.displayName = "NativeH1";
export const NativeH2 = NativeH1;
export const NativeH3 = NativeH1;
export const NativeH4 = NativeH1;
export const NativeStrong = forwardRef<NativeElementHandle, NativeProps>((props, ref) => NativeTextBase({ ...props, strong: true }, ref));
NativeStrong.displayName = "NativeStrong";
export function NativeListItem(props: NativeProps) { return <NativeBox className="flex flex-row gap-2"><NativeSpan>•</NativeSpan><NativeBox {...props} className={twMerge("flex-1", props.className)} /></NativeBox>; }
export function NativeButton(props: NativeProps) {
  const inherited = useContext(Typography);
  return <Typography.Provider value={twMerge(inherited, textClasses(props.className))}><Pressable className={twMerge("items-center justify-center", classes(props.className))} style={[{ flexDirection: props.className?.includes("flex-col") ? "column" : "row", flexWrap: "wrap" }, nativeStyle(props.style), props.disabled && { opacity: 0.5 }]} onPress={(event) => nativePress(props.onClick, event)} disabled={props.disabled} {...accessibility(props)} accessibilityRole="button">{wrappedChildren(props.children)}</Pressable></Typography.Provider>;
}
export function NativeAnchor(props: NativeProps & { href?: string; target?: string; rel?: string }) {
  return <NativeSpan {...props} role="link" onClick={(event) => { props.onClick?.(event); if (props.href && !event.defaultPrevented) void Linking.openURL(props.href); }} />;
}
export function NativeInput(props: Omit<React.InputHTMLAttributes<HTMLInputElement>, "style"> & { style?: CSSProperties }) {
  return <TextInput className={props.className} style={[{ flex: 1, minWidth: 0 }, nativeStyle(props.style)]} value={typeof props.value === "string" ? props.value : undefined} placeholder={props.placeholder} placeholderTextColor={palette["ink-faint"]} onChangeText={(value) => props.onChange?.({ target: { value }, currentTarget: { value } } as React.ChangeEvent<HTMLInputElement>)} accessibilityLabel={props["aria-label"] ?? props.placeholder} autoCorrect={false} returnKeyType="search" />;
}
export function NativeDetails(props: NativeProps) {
  const [open, setOpen] = useState(false);
  const children = Children.toArray(props.children);
  return <DetailsState.Provider value={{ open, toggle: () => setOpen((value) => !value) }}><NativeBox {...props}>{children[0]}{open && children.slice(1)}</NativeBox></DetailsState.Provider>;
}
export function NativeSummary(props: NativeProps) { const state = useContext(DetailsState); return <NativeButton {...props} onClick={state.toggle} aria-expanded={state.open} />; }
export function NativeImage(props: Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "style"> & { src?: string | number; style?: CSSProperties }) {
  const source = typeof props.src === "number" ? props.src : imageAssets[props.src ?? ""] ?? (props.src?.startsWith("https://") ? { uri: props.src } : undefined);
  const intrinsic = source ? RNImage.resolveAssetSource(source) : undefined;
  const aspectRatio = intrinsic?.width && intrinsic.height ? intrinsic.width / intrinsic.height : undefined;
  const position = props.className?.includes("object-left") ? "left" : props.className?.includes("object-right") ? "right" : "center";
  // Bundled images resolve immediately and remain available in airplane mode.
  return <StyledImage source={source} className={props.className} accessibilityLabel={props.alt || undefined} accessible={Boolean(props.alt)} contentFit={props.className?.includes("object-contain") ? "contain" : "cover"} contentPosition={position} style={[{ width: props.width ? Number(props.width) : "100%", height: props.height ? Number(props.height) : undefined, aspectRatio: !props.className?.includes("h-full") && !props.height ? aspectRatio : undefined }]} />;
}

type SvgCommon = { className?: string; style?: CSSProperties; children?: ReactNode; role?: string; "aria-label"?: string; "aria-pressed"?: boolean; "aria-hidden"?: boolean | "true" | "false"; tabIndex?: number; onClick?: () => void; onKeyDown?: React.KeyboardEventHandler<SVGGElement> };
export function NativeSvg(props: React.ComponentProps<typeof Svg> & SvgCommon) {
  const { className, children, style, ...rest } = props;
  const { width } = useWindowDimensions();
  const viewBox = String(props.viewBox ?? "0 0 300 300").split(/\s+/).map(Number);
  const ratio = (viewBox[3] || 300) / (viewBox[2] || 300);
  const height = typeof props.height === "number" ? props.height : Math.min(width - 64, 360) * ratio;
  return <View className={className} style={nativeStyle(style)}><Svg {...rest} width={props.width ?? "100%"} height={height} accessibilityLabel={props["aria-label"]}>{children}</Svg></View>;
}
export function NativeSvgGroup({ onClick, onKeyDown: _onKeyDown, className: _className, role: _role, style: _style, ...props }: React.ComponentProps<typeof G> & SvgCommon) { return <G {...props} onPress={onClick} accessible={Boolean(onClick)} accessibilityRole={onClick ? "button" : undefined} accessibilityLabel={props["aria-label"]} />; }
export function NativeSvgPath({ style: _style, className: _className, children: _children, ...props }: React.ComponentProps<typeof Path> & SvgCommon) { return <Path {...props} fill={nativeColor(typeof props.fill === "string" ? props.fill : undefined)} stroke={nativeColor(typeof props.stroke === "string" ? props.stroke : undefined)} />; }
export function NativeSvgPolygon({ className: _className, style: _style, ...props }: React.ComponentProps<typeof Polygon> & SvgCommon) { return <Polygon {...props} fill={nativeColor(typeof props.fill === "string" ? props.fill : undefined)} stroke={nativeColor(typeof props.stroke === "string" ? props.stroke : undefined)} />; }
export function NativeSvgLine({ className: _className, style: _style, ...props }: React.ComponentProps<typeof Line> & SvgCommon) { return <Line {...props} stroke={nativeColor(typeof props.stroke === "string" ? props.stroke : undefined)} />; }
export function NativeSvgText({ className: _className, style: _style, dominantBaseline, ...props }: React.ComponentProps<typeof SvgText> & SvgCommon & { dominantBaseline?: string }) { return <SvgText {...props} alignmentBaseline={dominantBaseline === "middle" ? "central" : undefined} fill={nativeColor(typeof props.fill === "string" ? props.fill : undefined)} />; }
export function NativeSvgTitle(_props: { children?: ReactNode }) { return null; }