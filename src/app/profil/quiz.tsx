import { QuizHistoryScreen } from "@/screens/QuizHistoryScreen";
import { ScreenFrame } from "@/native/ScreenFrame";
import { RouteErrorBoundary } from "@/components/layout/RouteErrorBoundary";
export default function Screen() { return <ScreenFrame><RouteErrorBoundary><QuizHistoryScreen /></RouteErrorBoundary></ScreenFrame>; }
