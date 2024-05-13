import axios from "axios";
import { ProfilePagePresenter } from "./presenter";
import { useEffect, useState } from "react";
import { fetchUser } from "../../components/Header";
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({});

  const updateUser = async (token) => {
    try {
      await axios.put(
        "https://railway.bookreview.techtrain.dev/users",
        formValue,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response.data.ErrorMessageJP);
      }
      throw error;
    }
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    if (token == null) {
      return;
    }

    updateUser(token).then(() => {
      alert("プロフィールを更新しました");
      navigate("/");
    });
  };

  const handleChangeUserName = (newName) => {
    setFormValue({ ...formValue, name: newName });
  };

  // グローバルで持つのだるいので毎回fetchする
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token == null) {
      return;
    }

    fetchUser(token).then((responseData) => {
      setFormValue(responseData);
    });
  }, []);

  return (
    <ProfilePagePresenter
      formValue={formValue}
      onUpdate={handleUpdate}
      handleChangeUserName={handleChangeUserName}
    />
  );
};
