import { Image, StyleSheet, Text, View } from "react-native";
import { Flame } from "lucide-react-native";
import { useAppStore } from "@/store/useAppStore";

/** Minimal header: application logo and the existing streak count. */
export function TopBar() {
  const streakCount = useAppStore((s) => s.progress.streak.count);
  return (
    <View style={styles.header}>
      <Image source={require("../../../assets/brand/icon-192.png")} accessibilityLabel="Sankofa" style={styles.logo} />
      <View accessible accessibilityLabel={`${streakCount} ${streakCount > 1 ? "jours" : "jour"} de série`} style={styles.streak}>
        <Flame size={21} strokeWidth={2} color="#726a5d" />
        <Text style={styles.counter}>{streakCount}</Text>
        <Text style={styles.unit}>{streakCount > 1 ? "JOURS" : "JOUR"}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: { width: "100%", maxWidth: 704, alignSelf: "center", paddingHorizontal: 16, paddingTop: 8, paddingBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 16, backgroundColor: "#f6eedd" },
  logo: { width: 46, height: 46, borderRadius: 13 },
  streak: { minHeight: 44, flexDirection: "row", alignItems: "center", gap: 7, borderRadius: 999, borderWidth: 1.5, borderColor: "#e7dfd1", paddingHorizontal: 15, paddingVertical: 8, backgroundColor: "#ffffffcc" },
  counter: { fontFamily: "Poppins", fontSize: 18, lineHeight: 25, includeFontPadding: false, color: "#1e1b18" },
  unit: { fontFamily: "Inter", fontSize: 11, lineHeight: 17, includeFontPadding: false, color: "#5c554b", letterSpacing: 0.3 },
});
