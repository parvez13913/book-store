import LoginForm from "../components/LoginForm";
import loginImg from "../images/login.svg";

const Login = () => {
  return (
    <div className="flex justify-around items-center">
      <LoginForm />
      <div>
        <img src={loginImg} alt="loginImg" />
      </div>
    </div>
  );
};

export default Login;
