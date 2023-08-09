import SignupForm from "../components/SignupForm";
import signupImg from "../images/signup.svg";

const Signup = () => {
  return (
    <div className="flex justify-around items-center w-full">
      <div>
        <img className="w-1/2" src={signupImg} alt="signupImg" />
      </div>
      <SignupForm />
    </div>
  );
};

export default Signup;
