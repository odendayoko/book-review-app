import { useForm } from "react-hook-form";
import { SignUpPagePresenter } from "./presenter";
import axios from "axios";
import Compressor from "compressorjs";
import { useState } from "react";

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [compressedFile, setCompressedFile] = useState();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://railway.bookreview.techtrain.dev/users",
        { name: data.name, email: data.email, password: data.password }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
    } catch (e) {
      // handle your error
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      new Compressor(file, {
        maxWidthOrHeight: 128,
        // ファイルサイズは1MB以下に圧縮する
        maxSizeMB: 1,
        success: (compressedFile) => {
          // なんかもっといい方法ありそう…
          setCompressedFile(compressedFile);
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
