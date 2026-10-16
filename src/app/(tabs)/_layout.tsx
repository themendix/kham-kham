import { Tabs } from "expo-router";

/** Main sections switch in place; detail screens remain on the parent stack. */
export default function TabsLayout() {
  return (
    <Tabs initialRouteName="index" backBehavior="none" tabBar={() => null} screenOptions={{ headerShown: false, animation: "none" }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="biblio" />
      <Tabs.Screen name="quiz" />
      <Tabs.Screen name="profil" />
    </Tabs>
  );
}
