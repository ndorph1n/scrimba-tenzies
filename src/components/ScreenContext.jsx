import { createContext, useContext } from "react";

export const ScreenContext = createContext();

export function useScreen() {
  return useContext(ScreenContext);
}
