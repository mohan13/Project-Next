import { createContext } from "react";
export const AppContext = createContext();
export const AppWrapper=({ children })=> {
  return <AppContext.Provider>{children}</AppContext.Provider>;
}
