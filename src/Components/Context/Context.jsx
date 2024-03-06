import { useUser } from "../../api/helpers/UserContecst/UserContecst";

export const Context = () => {
  const { name, isLoggedIn, logIn, logOut } = useUser();
  console.log(name, isLoggedIn, logIn, logOut);

  return (
    <div>
      {isLoggedIn && <p>{name}</p>}
      {isLoggedIn ? (
        <button onClick={() => logOut()}>LogOUT</button>
      ) : (
        <button onClick={() => logIn()}>Login</button>
      )}
    </div>
  );
};
