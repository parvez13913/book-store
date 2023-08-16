import { useForm, SubmitHandler } from "react-hook-form";
import { useSignInUserMutation } from "../redux/api/apiSlice";
import swal from "sweetalert";
import LoadingSpinner from "./LoadingSpinner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginForm = () => {
  const [signInUser, { isSuccess, isLoading, data, isError, error }] =
    useSignInUserMutation();
  type Inputs = {
    email: string;
    password: string;
  };
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signInUser(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isError && error) {
      swal("Oops!", `invalid email or wrong password`, "error");
    }
    if (isSuccess && data) {
      localStorage.setItem("accessToken", data?.data?.accessToken);
      swal("Congratulations!", "User signed in Successfully!", "success");
      navigate(from, { replace: true });
    }
  }, [isError, isSuccess, data, navigate, error, from]);
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-info shadow-lg mx-8 w-1/7 mb-8 rounded-lg px-9 py-4"
    >
      <h6 className="text-center my-6 text-xl font-bold border-b-2 border-spacing-3 border-info">
        Sign In
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
      <p className="my-3 text-center">
        New to Bick Hero??{" "}
        <Link to="/signup" className="text-red-500">
          Please Signup
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
