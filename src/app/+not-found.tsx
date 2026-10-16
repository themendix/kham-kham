import { NotFoundScreen } from "@/screens/NotFoundScreen";
import { ScreenFrame } from "@/native/ScreenFrame";
import { RouteErrorBoundary } from "@/components/layout/RouteErrorBoundary";
export default function Screen() { return <ScreenFrame><RouteErrorBoundary><NotFoundScreen /></RouteErrorBoundary></ScreenFrame>; }
