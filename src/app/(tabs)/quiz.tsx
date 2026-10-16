import { QuizScreen } from "@/screens/QuizScreen";
import { ScreenFrame } from "@/native/ScreenFrame";
import { RouteErrorBoundary } from "@/components/layout/RouteErrorBoundary";
export default function Screen() { return <ScreenFrame><RouteErrorBoundary><QuizScreen /></RouteErrorBoundary></ScreenFrame>; }
