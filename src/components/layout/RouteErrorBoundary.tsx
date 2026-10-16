import { Component } from "react";
import type { ReactNode } from "react";
import { NativeBox, NativeH2, NativeButton, NativeParagraph } from "@/native/elements";
export class RouteErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { if (this.state.failed) return <NativeBox className="rounded-card border-[3px] border-ink bg-card p-6"><NativeH2 className="text-xl">Cet écran n’a pas pu être affiché.</NativeH2><NativeParagraph className="mt-2">Ta progression enregistrée est conservée.</NativeParagraph><NativeButton className="mt-4 rounded-full border-2 border-ink bg-primary p-3 font-bold text-white" onClick={() => this.setState({ failed: false })}>Réessayer</NativeButton></NativeBox>; return this.props.children; }
}
