import { QuizDefiScreen } from "@/screens/QuizDefiScreen";
import { ScreenFrame } from "@/native/ScreenFrame";
import { RouteErrorBoundary } from "@/components/layout/RouteErrorBoundary";
export default function Screen() { return <ScreenFrame><RouteErrorBoundary><QuizDefiScreen /></RouteErrorBoundary></ScreenFrame>; }
