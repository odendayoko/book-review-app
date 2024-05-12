import { useContext, useState } from "react";
import { HeaderPresenter } from "./presenter";
import { AuthContext } from "../../router/AuthContext";
import axios from "axios";
import { useEffect } from "react";

export const Header = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
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
    fetchUser().then((responseData) => {
      setUser(responseData);
    });
  }, []);

  return <HeaderPresenter isLoggedIn={isLoggedIn} user={user} />;
};
