import { QuizPartieScreen } from "@/screens/QuizPartieScreen";
import { ScreenFrame } from "@/native/ScreenFrame";
import { RouteErrorBoundary } from "@/components/layout/RouteErrorBoundary";
export default function Screen() { return <ScreenFrame><RouteErrorBoundary><QuizPartieScreen /></RouteErrorBoundary></ScreenFrame>; }
