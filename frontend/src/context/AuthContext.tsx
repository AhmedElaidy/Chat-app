import { createContext, useContext, useState } from "react";
import React from "react";

interface authUser {
  _id: string;
  fullname: string;
  username: string;
  gender: "male" | "female";
  profilePic: string;
  __v: number;
}

interface AuthContextType {
  authUser: authUser | null;
  setAuthUser: React.Dispatch<any>;
}

// Define the default context value
const defaultAuthContext: AuthContextType = {
  authUser: null,
  setAuthUser: () => {},
};

export const AuthContext = createContext(defaultAuthContext);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authUser, setAuthUser] = useState(
    localStorage.getItem("chat-user")
      ? JSON.parse(localStorage.getItem("chat-user") || "")
      : ""
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
