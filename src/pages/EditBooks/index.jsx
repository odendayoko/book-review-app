import axios from "axios";
import { EditBooksPagePresenter } from "./presenter";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export const EditBooksPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
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
  return (
    <EditBooksPagePresenter
      handleSubmit={handleSubmit(onUpdate)}
      register={register}
      errors={errors}
    />
  );
};
