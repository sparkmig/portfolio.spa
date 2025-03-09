"use client";
import { PropsWithChildren } from "react";
import { SanityProvider } from "../sanity-context/";

export default function Providers({ children }: PropsWithChildren) {
  return <SanityProvider>{children}</SanityProvider>;
}
