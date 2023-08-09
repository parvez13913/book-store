import { useForm, SubmitHandler } from "react-hook-form";

const LoginForm = () => {
  type Inputs = {
    email: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border shadow-lg mx-8 w-1/7 mb-8 rounded-lg px-9 py-4"
    >
      <h6 className="text-center my-6 text-xl font-bold border-b-2 border-spacing-3">
        Login
      </h6>

      {/* email*/}
      <label className="block font-medium mb-1 text-left">Email</label>
      <input
        className="border py-2 px-4 rounded-lg my-2 w-full"
        {...register("email", {
          required: {
            value: true,
            message: "Email is Required",
          },
        })}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      {/* password */}
      <label className="block font-medium mb-1 text-left">Password</label>
      <input
        className="border py-2 px-4 rounded-lg my-2 w-full"
        {...register("password", {
          required: {
            value: true,
            message: "Password is Required",
          },
        })}
      />

      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <input
        className="bg-blue-900 text-white p-2 rounded-lg w-full mt-2"
        type="submit"
      />
    </form>
  );
};

export default LoginForm;
