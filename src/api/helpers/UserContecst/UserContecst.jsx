import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const logIn = () => {
    console.log("buba");
    setName("Mango");
    setIsLoading(true);
  };
  const logOut = () => {
    setName(null);
    setIsLoading(false);
  };

  return (
    <UserContext.Provider value={{ name, isLoading, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
