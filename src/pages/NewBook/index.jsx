import axios from "axios";
import { NewBookPagePresenter } from "./presenter";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const NewBookPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postBooks = async (token, params) => {
    try {
      await axios.post(
        "https://railway.bookreview.techtrain.dev/books",
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

  const onSubmit = async (formData) => {
    const token = localStorage.getItem("token");

    if (token == null) {
      return;
    }

    postBooks(token, formData).then(() => {
      alert("レビューを投稿しました");
      navigate("/");
    });
  };

  return (
    <NewBookPagePresenter
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
    />
  );
};
