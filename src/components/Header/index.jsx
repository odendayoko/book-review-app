import { useContext, useState } from "react";
import { HeaderPresenter } from "./presenter";
import { AuthContext } from "../../router/AuthContext";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);

  const [user, setUser] = useState(null);

  const fetchUser = async (token) => {
    try {
      const response = await axios.get(
        "https://railway.bookreview.techtrain.dev/users",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response.data.ErrorMessageJP);
      }
      throw error;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token == null) {
      return;
    }

    fetchUser(token).then((responseData) => {
      setUser(responseData);
    });
  }, []);

  return (
    <HeaderPresenter
      isLoggedIn={isLoggedIn}
      user={user}
      handleLoginClick={() => navigate("/login")}
      handleLogoutClick={logout}
    />
  );
};
