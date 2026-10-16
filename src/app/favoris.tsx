import { FavorisScreen } from "@/screens/FavorisScreen";
import { ScreenFrame } from "@/native/ScreenFrame";
import { RouteErrorBoundary } from "@/components/layout/RouteErrorBoundary";
export default function Screen() { return <ScreenFrame><RouteErrorBoundary><FavorisScreen /></RouteErrorBoundary></ScreenFrame>; }
