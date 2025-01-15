import React, { createContext, useCallback, useContext, useState } from "react";
import { GlobalContextType, UserType } from "../types/Types.types";

const globalContext = createContext<GlobalContextType | null>(null);

export function useGlobalInfo() {
  const context = useContext(globalContext);
  if (!context) {
    throw new Error("useGlobalInfo must be used within a GlobalInfo provider");
  }
  return context;
}

type GlobalInfoProps = {
  children: React.ReactNode;
};

const GlobalInfo = ({ children }: GlobalInfoProps) => {
  const [user, setUser] = useState<UserType>({
    uid: "",
    email: "",
    name: "",
    description: "",
    profile_img: "",
    cover_img: "",
    createdAt: "",
  });

  const updateUser = useCallback((newValue: Partial<UserType>) => {
    setUser((prevUser) => ({ ...prevUser, ...newValue }));
  }, []);

  return (
    <globalContext.Provider value={{ user, updateUser }}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalInfo;
