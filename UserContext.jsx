import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user] = useState({
    name: "Paulina",
    email: "paulina@example.com",
    themePreference: "dark",
  });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
