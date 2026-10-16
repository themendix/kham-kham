import { CategoryScreen } from "@/screens/CategoryScreen";
import { ScreenFrame } from "@/native/ScreenFrame";
import { RouteErrorBoundary } from "@/components/layout/RouteErrorBoundary";
export default function Screen() { return <ScreenFrame><RouteErrorBoundary><CategoryScreen /></RouteErrorBoundary></ScreenFrame>; }
