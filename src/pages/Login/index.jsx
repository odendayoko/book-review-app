import { useForm } from "react-hook-form";
import { LoginPagePresenter } from "./presenter";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../router/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

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
      login(token);
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response.data.ErrorMessageJP);
      }
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
