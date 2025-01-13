import React, { createContext, useContext } from "react";

const globalContext = createContext({});

export function useGlobalInfo() {
  return useContext(globalContext);
}
type GlobalInfoPProps = {
  children: React.ReactNode;
};
const GlobalInfo = ({ children }: GlobalInfoPProps) => {
  return (
    <globalContext.Provider value={{ user: "amol" }}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalInfo;
