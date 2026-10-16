import { ProfilScreen } from "@/screens/ProfilScreen";
import { ScreenFrame } from "@/native/ScreenFrame";
import { RouteErrorBoundary } from "@/components/layout/RouteErrorBoundary";
export default function Screen() { return <ScreenFrame><RouteErrorBoundary><ProfilScreen /></RouteErrorBoundary></ScreenFrame>; }
