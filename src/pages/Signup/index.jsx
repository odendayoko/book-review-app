import { useForm } from "react-hook-form";
import { SignUpPagePresenter } from "./presenter";
import axios from "axios";
import Compressor from "compressorjs";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../router/AuthContext";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [compressedFile, setCompressedFile] = useState();

  const onSubmit = async (formData) => {
    try {
      const token = await signUp(formData);
      login(token);

      await uploadIcon(token);

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response.data.ErrorMessageJP);
      }
      throw error;
    }
  };

  const signUp = async (params) => {
    try {
      const response = await axios.post(
        "https://railway.bookreview.techtrain.dev/users",
        params
      );
      return response.data.token;
    } catch (error) {
      console.error("Sign up error:", error);
      throw error;
    }
  };

  const uploadIcon = async (token) => {
    try {
      const formData = new FormData();
      formData.append("icon", compressedFile);

      const response = await axios.post(
        "https://railway.bookreview.techtrain.dev/uploads",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Icon upload error:", error);
      throw error;
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      new Compressor(file, {
        maxWidthOrHeight: 128,
        // ファイルサイズは1MB以下に圧縮する
        maxSizeMB: 1,
        success: (result) => {
          // なんかもっといい方法ありそう…
          setCompressedFile(result);
        },
        error: (error) => {
          console.log("compressError:", error);
        },
      });
    }
  };

  return (
    <SignUpPagePresenter
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
      handleFileChange={handleFileChange}
    />
  );
};
