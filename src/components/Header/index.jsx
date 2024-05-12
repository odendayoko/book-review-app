import { useContext } from "react";
import { HeaderPresenter } from "./presenter";
import { AuthContext } from "../../router/AuthContext";

export const Header = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return <HeaderPresenter isLoggedIn={isLoggedIn} />;
};
