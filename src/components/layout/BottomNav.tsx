import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router, usePathname } from "expo-router";
import type { Href } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Home, BookOpen, Target, User } from "lucide-react-native";

const NAV_HEIGHT = 76;
const EDGE_SPACE = 12;
const TABS = [
  { path: "/", label: "Accueil", icon: Home },
  { path: "/biblio", label: "Biblio", icon: BookOpen },
  { path: "/quiz", label: "Quiz", icon: Target },
  { path: "/profil", label: "Profil", icon: User },
];
export function shouldShowBottomNav(pathname: string) {
  return !pathname.startsWith("/cours/") && pathname !== "/biblio/geo";
}

export function getBottomNavClearance(safeAreaBottom: number, pathname = "/") {
  if (!shouldShowBottomNav(pathname)) return Math.max(safeAreaBottom, EDGE_SPACE) + 16;
  return NAV_HEIGHT + Math.max(safeAreaBottom, EDGE_SPACE) + 24;
}

/** Floating navigation follows the device's bottom safe area. */
export function BottomNav({ fontsLoaded }: { fontsLoaded: boolean }) {
  const pathname = usePathname();
  const { bottom } = useSafeAreaInsets();
  if (!shouldShowBottomNav(pathname)) return null;
  return (
    <View pointerEvents="box-none" style={[styles.position, { bottom: Math.max(bottom, EDGE_SPACE) }]}>
      <View accessibilityRole="tablist" style={styles.bar}>
        <LinearGradient pointerEvents="none" colors={["#fff2b7f5", "#fff9e9f5"]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={[StyleSheet.absoluteFill, styles.background]} />
        {TABS.map(({ path, label, icon: Icon }) => {
          const selected = path === "/" ? pathname === path : pathname.startsWith(path);
          const color = selected ? "#173447" : "#292315";
          return (
            <View key={path} style={styles.slot}>
              <Pressable accessibilityRole="tab" accessibilityLabel={label} accessibilityState={{ selected }} onPress={() => router.navigate(path as Href)} style={[styles.tab, selected && styles.selected]}>
                {({ pressed }) => (
                  <View pointerEvents="none" style={[styles.content, pressed && styles.pressed]}>
                    <Icon size={23} strokeWidth={selected ? 2.5 : 2} color={color} />
                    <Text numberOfLines={1} style={[styles.label, { color, fontFamily: fontsLoaded ? "Poppins" : undefined }]}>{label}</Text>
                  </View>
                )}
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  position: { position: "absolute", left: 0, right: 0, alignItems: "center", paddingHorizontal: EDGE_SPACE },
  bar: { width: "100%", maxWidth: 520, height: NAV_HEIGHT, flexDirection: "row", alignItems: "stretch", padding: 8, gap: 8, borderRadius: 999, borderWidth: 2, borderColor: "#fffbed", boxShadow: "0px 5px 18px 0px rgba(58,43,16,0.14)" },
  background: { borderRadius: 999 },
  slot: { flex: 1, flexBasis: 0, minWidth: 0 },
  tab: { flex: 1, width: "100%", minHeight: 48, borderRadius: 26 },
  content: { flex: 1, alignItems: "center", justifyContent: "center", gap: 6, paddingHorizontal: 3 },
  selected: { backgroundColor: "#dcca8973" },
  pressed: { opacity: 0.65 },
  label: { fontSize: 10.5, lineHeight: 16, includeFontPadding: false, fontWeight: "700", textAlign: "center" },
});

