import { BiblioScreen } from "@/screens/BiblioScreen";
import { ScreenFrame } from "@/native/ScreenFrame";
import { RouteErrorBoundary } from "@/components/layout/RouteErrorBoundary";
export default function Screen() { return <ScreenFrame><RouteErrorBoundary><BiblioScreen /></RouteErrorBoundary></ScreenFrame>; }
