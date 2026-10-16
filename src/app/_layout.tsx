import "../global.css";
import { useEffect, useState } from "react";
import { ActivityIndicator, AppState, Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack, router, useGlobalSearchParams, usePathname } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useAppStore } from "@/store/useAppStore";
import { useCivilDay } from "@/hooks/useCivilDay";
import { preloadAllSubjectContent } from "@/data/courseContent";
import { shouldShowOnboarding } from "@/lib/onboarding";
import { Onboarding } from "@/components/features/Onboarding";
import { TopBar } from "@/components/layout/TopBar";
import { BottomNav } from "@/components/layout/BottomNav";

function OnboardingHost() {
  const replay = useGlobalSearchParams().onboarding === "1";
  const [active, setActive] = useState(() => shouldShowOnboarding(useAppStore.getState().progress));
  return active || replay ? <Onboarding onClose={() => { setActive(false); if (replay) router.setParams({ onboarding: undefined }); }} /> : null;
}
export default function RootLayout() {
  const pathname = usePathname();
  const day = useCivilDay();
  const hydrated = useAppStore((state) => state.hydrated);
  const readonly = useAppStore((state) => state.persistenceReadonly);
  const error = useAppStore((state) => state.persistenceError);
  const [fontsLoaded, fontError] = useFonts({ Inter: require("../assets/fonts/Inter.ttf"), Poppins: require("../assets/fonts/Poppins-Bold.ttf"), PoppinsExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf") });
  useEffect(() => {
    void useAppStore.getState().retryPersistence().catch(() => {});
    void preloadAllSubjectContent().catch(() => {});
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") void useAppStore.getState().refreshPersistence().then(() => useAppStore.getState().checkDailyReset()).catch(() => {});
    });
    return () => subscription.remove();
  }, []);
  useEffect(() => { if (hydrated) void useAppStore.getState().checkDailyReset().catch(() => {}); }, [day, hydrated]);
  const topLevel = ["/", "/biblio", "/quiz", "/profil", "/profil/quiz", "/favoris"].includes(pathname);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f6eedd" }} edges={["top", "left", "right"]}>
        <StatusBar style="dark" />
        {topLevel && <TopBar />}
        <View style={{ flex: 1 }}>
          <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#f6eedd" }, animation: "slide_from_right", gestureEnabled: true, fullScreenGestureEnabled: false }}>
            <Stack.Screen name="(tabs)" options={{ animation: "none", gestureEnabled: false }} />
          </Stack>
          <BottomNav fontsLoaded={fontsLoaded} />
        </View>
        {!hydrated || !fontsLoaded && !fontError ? (
          <View className="absolute inset-0 items-center justify-center gap-4 bg-cream">
            <ActivityIndicator color="#e24c2b" />
            <Text>{error ?? "Chargement…"}</Text>
            {error && <Pressable onPress={() => { void useAppStore.getState().retryPersistence().catch(() => {}); }}><Text>Réessayer</Text></Pressable>}
          </View>
        ) : <>{!readonly && <OnboardingHost />}</>}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
