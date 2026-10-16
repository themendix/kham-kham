import { CourseDetailScreen } from "@/screens/CourseDetailScreen";
import { ScreenFrame } from "@/native/ScreenFrame";
import { RouteErrorBoundary } from "@/components/layout/RouteErrorBoundary";
export default function Screen() { return <ScreenFrame><RouteErrorBoundary><CourseDetailScreen /></RouteErrorBoundary></ScreenFrame>; }
