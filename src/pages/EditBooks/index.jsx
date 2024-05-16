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

  const token = localStorage.getItem("token");

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

  const deleteBooks = async (token) => {
    try {
      await axios.delete(
        `https://railway.bookreview.techtrain.dev/books/${id}`,
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
    if (token == null) {
      return;
    }

    updateBooks(token, formData).then(() => {
      alert("レビューを更新しました");
      navigate("/");
    });
  };

  const handleDelete = () => {
    if (token == null) {
      return;
    }

    deleteBooks(token).then(() => {
      alert("レビューを削除しました");
      navigate("/");
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token == null) {
      navigate("/login");
      return;
    }

    fetchBookInfo(id, token).then((responseData) => {
      reset(responseData);
    });
  }, [id, navigate, reset]);

  return (
    <EditBooksPagePresenter
      onSubmit={handleSubmit(onUpdate)}
      register={register}
      errors={errors}
      onDelete={handleDelete}
    />
  );
};
