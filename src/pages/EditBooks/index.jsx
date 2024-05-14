import axios from "axios";
import { EditBooksPagePresenter } from "./presenter";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { fetchBookInfo } from "../BookInfo";

export const EditBooksPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const updateBooks = async (token, params) => {
    try {
      await axios.put(
        `https://railway.bookreview.techtrain.dev/books/${id}`,
        params,
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

  const onUpdate = async (formData) => {
    const token = localStorage.getItem("token");

    if (token == null) {
      return;
    }

    updateBooks(token, formData).then(() => {
      alert("レビューを更新しました");
      navigate("/");
    });
  };

  // グローバルで持つのだるいので毎回fetchする
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token == null) {
      return;
    }

    fetchBookInfo(id, token).then((responseData) => {
      reset(responseData);
    });
  }, [id, reset]);

  return (
    <EditBooksPagePresenter
      handleSubmit={handleSubmit(onUpdate)}
      register={register}
      errors={errors}
    />
  );
};
