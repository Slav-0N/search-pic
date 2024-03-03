import React from "react";
import { useUser } from "../../api/helpers/UserContecst/UserContecst";

export const Context = () => {
  const { name, isLoading, logIn, logOut } = useUser();
  return (
    <div>
      {isLoading && <p>{name}</p>}
      {isLoading ? (
        <button type="button" onClick={logOut}>
          LogOUT
        </button>
      ) : (
        <button type="button" onClick={logIn}>
          Login
        </button>
      )}
    </div>
  );
};
