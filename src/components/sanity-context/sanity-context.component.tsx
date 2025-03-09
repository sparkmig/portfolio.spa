import React, {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  PropsWithChildren,
} from "react";
import { SanityClient } from "@sanity/client";
import sanityClient from "../../../sanity-client";
// Define the shape of our context (SanityClient or undefined initially)
interface SanityContextValue {
  sanityClient: SanityClient;
}

// Create the context with an initial value of undefined
const SanityContext = createContext<SanityContextValue | undefined>(undefined);

type SanityProviderProps = PropsWithChildren;

// Define the provider component
export const SanityProvider = ({ children }: SanityProviderProps) => {
  // Memoize the Sanity client instance to avoid unnecessary re-renders
  const client = useMemo(() => ({ sanityClient }), []);

  return (
    <SanityContext.Provider value={client}>{children}</SanityContext.Provider>
  );
};

// Custom hook to use the Sanity client with type checking
export const useSanityClient = (): SanityClient => {
  const context = useContext(SanityContext);
  if (!context) {
    throw new Error("useSanityClient must be used within a SanityProvider");
  }
  return context.sanityClient;
};
