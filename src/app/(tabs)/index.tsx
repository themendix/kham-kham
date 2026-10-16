import { HomeScreen } from "@/screens/HomeScreen";
import { ScreenFrame } from "@/native/ScreenFrame";
import { RouteErrorBoundary } from "@/components/layout/RouteErrorBoundary";
export default function Screen() { return <ScreenFrame><RouteErrorBoundary><HomeScreen /></RouteErrorBoundary></ScreenFrame>; }
