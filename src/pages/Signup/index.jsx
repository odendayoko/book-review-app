import { useForm } from "react-hook-form";
import { SignUpPagePresenter } from "./presenter";
import axios from "axios";

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  return (
    <SignUpPagePresenter
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
};
