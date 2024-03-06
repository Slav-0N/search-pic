import { createContext, useContext, useState } from "react";

const CreateUser = createContext();
export const useUser = () => useContext(CreateUser);

export const UserProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => {
    console.log(name, isLoggedIn);
    setIsLoggedIn(true);
    setName("Buba");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setName(null);
  };

  return (
    <CreateUser.Provider value={{ name, isLoggedIn, logIn, logOut }}>
      {children}
    </CreateUser.Provider>
  );
};
