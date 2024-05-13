import axios from "axios";
import { ProfilePagePresenter } from "./presenter";
import { useState } from "react";

export const ProfilePage = () => {
  const [formValue, setFormValue] = useState({ name: "defaultName" });

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
    });
  };

  const handleChangeUserName = (newName) => {
    setFormValue({ ...formValue, name: newName });
  };

  return (
    <ProfilePagePresenter
      formValue={formValue}
      onUpdate={handleUpdate}
      handleChangeUserName={handleChangeUserName}
    />
  );
};
