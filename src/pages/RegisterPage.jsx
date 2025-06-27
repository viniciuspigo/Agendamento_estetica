import RegisterForm from "../components/RegisterForm/RegisterForm";
import RightContent from "../components/RegisterLoginForm/RightContent";

function RegisterPage() {
  return (
    <div className="flex flex-row">
      <RegisterForm />
      <RightContent />
    </div>
  );
}

export default RegisterPage;
