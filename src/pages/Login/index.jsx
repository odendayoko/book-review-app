import { useForm } from "react-hook-form";
import { LoginPagePresenter } from "./presenter";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <LoginPagePresenter
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
    />
  );
};
