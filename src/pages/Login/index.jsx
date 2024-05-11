import { useForm } from "react-hook-form";
import { LoginPagePresenter } from "./presenter";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://railway.bookreview.techtrain.dev/signin",
        {
          email: data.email,
          password: data.password,
        }
      );

      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      alert("ログインに失敗しました。");
      throw error;
    }
  };

  return (
    <LoginPagePresenter
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
    />
  );
};
