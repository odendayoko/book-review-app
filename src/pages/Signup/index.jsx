import { useForm } from "react-hook-form";
import { SignUpPagePresenter } from "./presenter";

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <SignUpPagePresenter
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
};
