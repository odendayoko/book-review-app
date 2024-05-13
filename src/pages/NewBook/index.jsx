import axios from "axios";
import { NewBookPagePresenter } from "./presenter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewBookPage = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    title: "",
    url: "",
    detail: "",
    review: "",
  });

  const postBooks = async (token) => {
    try {
      await axios.post(
        "https://railway.bookreview.techtrain.dev/books",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    if (token == null) {
      return;
    }

    postBooks(token).then(() => {
      alert("レビューを投稿しました");
      navigate("/");
    });
  };

  return <NewBookPagePresenter onSubmit={handleSubmit} />;
};
