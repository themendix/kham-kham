import { useCallback, useRef } from "react";
import type { ReactNode } from "react";
import type { NativeScrollView } from "./scroll";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { useFocusEffect, usePathname } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getBottomNavClearance } from "@/components/layout/BottomNav";
import { attachScroll, setScrollOffset } from "./scroll";
import { useAppStore } from "@/store/useAppStore";
import { NativeButton, NativeParagraph } from "./elements";
export function ScreenFrame({ children }: { children: ReactNode }) {
  const { bottom } = useSafeAreaInsets();
  const pathname = usePathname();
  const bottomClearance = getBottomNavClearance(bottom, pathname);
  const scroll = useRef<NativeScrollView>(null);
  const saving = useAppStore((state) => state.saving);
  const error = useAppStore((state) => state.persistenceError);
  const readonly = useAppStore((state) => state.persistenceReadonly);
  useFocusEffect(useCallback(() => { attachScroll(scroll.current); return () => attachScroll(null); }, []));
  return <View className="flex-1 bg-cream"><ScrollView ref={scroll} contentContainerStyle={{ padding: 16, paddingBottom: bottomClearance, flexGrow: 1 }} keyboardShouldPersistTaps="handled" onScroll={(event) => setScrollOffset(event.nativeEvent.contentOffset.y)} scrollEventThrottle={16}>{error && <View className="mb-4 rounded-card border-[3px] border-ink bg-card p-4"><NativeParagraph role="alert">{error}</NativeParagraph><NativeButton className="mt-2 font-bold underline" disabled={saving > 0} onClick={() => { void useAppStore.getState().retryPersistence().catch(() => {}); }}>Réessayer la sauvegarde</NativeButton></View>}<View pointerEvents={readonly ? "none" : "auto"}>{children}</View></ScrollView>{saving > 0 && <View style={{ bottom: bottomClearance - 12 }} className="absolute right-3 flex-row items-center gap-2 rounded-full border-2 border-ink bg-card p-3" pointerEvents="none"><ActivityIndicator size="small" color="#e24c2b" /><NativeParagraph>Sauvegarde…</NativeParagraph></View>}</View>;
}
