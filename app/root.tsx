import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp, ClerkErrorBoundary } from "@clerk/remix";
import { Toaster } from "./components/ui/toaster";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader: LoaderFunction = (args) => rootAuthLoader(args);

export const ErrorBoundary = ClerkErrorBoundary();

function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Toaster />
      </body>
    </html>
  );
}

export default ClerkApp(App);
