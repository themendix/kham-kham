import React, { Children, isValidElement } from "react";
import { Redirect, router, useLocalSearchParams, usePathname } from "expo-router";
import type { Href } from "expo-router";
import type { ReactNode } from "react";
import { NativeBox, type NativeProps } from "./elements";
let navigationType: "PUSH" | "POP" | "REPLACE" = "PUSH";
export function useNavigate() {
  return (destination: string | number, options?: { replace?: boolean }) => {
    if (typeof destination === "number") { navigationType = "POP"; if (router.canGoBack()) router.back(); else router.replace("/"); }
    else if (options?.replace) { navigationType = "REPLACE"; router.replace(destination as Href); }
    else { navigationType = "PUSH"; router.push(destination as Href); }
  };
}
export function useParams<T extends Record<string, string | undefined> = Record<string, string | undefined>>(): T {
  const params = useLocalSearchParams();
  return Object.fromEntries(Object.entries(params).map(([key, value]) => [key, Array.isArray(value) ? value[0] : value])) as T;
}
export function useSearchParams(): [URLSearchParams, (value: URLSearchParams | Record<string, string>) => void] {
  const params = useParams();
  const pathname = usePathname();
  const search = new URLSearchParams(Object.entries(params).filter((entry): entry is [string, string] => typeof entry[1] === "string"));
  return [search, (value) => router.replace((pathname + "?" + new URLSearchParams(value).toString()) as Href)];
}
export function useLocation() { const pathname = usePathname(); const [params] = useSearchParams(); return { pathname, search: params.size ? "?" + params.toString() : "", hash: "", key: pathname }; }
export function useNavigationType() { return navigationType; }
interface LinkProps extends Omit<NativeProps, "children"> { to: string; children?: ReactNode; replace?: boolean }
export function Link({ to, children, replace, onClick, ...props }: LinkProps) {
  const navigate = useNavigate();
  const press: NativeProps["onClick"] = (event) => { onClick?.(event); if (!event.defaultPrevented) navigate(to, { replace }); };
  const single = Children.count(children) === 1 ? Children.toArray(children)[0] : null;
  if (isValidElement<{ onClick?: NativeProps["onClick"]; className?: string }>(single) && (single.type === NativeBox || typeof single.type === "function" && single.type.name === "Button")) {
    return React.cloneElement(single, { onClick: (event) => { single.props.onClick?.(event); if (!event.defaultPrevented) press(event); }, className: [props.className, single.props.className].filter(Boolean).join(" ") });
  }
  return <NativeBox {...props} onClick={press} role="link">{children}</NativeBox>;
}
interface NavLinkProps extends Omit<LinkProps, "className"> { end?: boolean; className?: string | ((state: { isActive: boolean }) => string) }
export function NavLink({ end, className, ...props }: NavLinkProps) { const pathname = usePathname(); const isActive = end ? pathname === props.to : pathname.startsWith(props.to); return <Link {...props} aria-current={isActive ? "page" : undefined} className={typeof className === "function" ? className({ isActive }) : className} />; }
export function Navigate({ to }: { to: string; replace?: boolean }) { return <Redirect href={to as Href} />; }
