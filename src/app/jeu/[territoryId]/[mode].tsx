import { Redirect, useLocalSearchParams } from "expo-router";
import type { Href } from "expo-router";
export default function Screen() { const { territoryId, mode } = useLocalSearchParams(); return <Redirect href={(`/quiz/${territoryId}/${mode}`) as Href} />; }
