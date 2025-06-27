import LoginForm from "../components/LoginForm/LoginForm";
import RightContent from "../components/RegisterLoginForm/RightContent";

function LoginPage() {
  return (
    <div className="flex flex-row">
      <LoginForm />
      <RightContent />
    </div>
  );
}

export default LoginPage;
