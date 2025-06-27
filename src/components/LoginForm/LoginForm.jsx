import { IconUser, IconLock } from "@tabler/icons-react";
import RegisterLoginHeader from "../RegisterLoginForm/RegisterLoginHeader";
import ForgotPassword from "./ForgotPassword";
import RegisterLoginButton from "../RegisterLoginForm/RegisterLoginButton";
import RegisterLoginInput from "../RegisterLoginForm/RegisterLoginInput";
import RegisterLoginSeparator from "../RegisterLoginForm/RegisterLoginSeparator"
import GoogleInput from "../RegisterLoginForm/GoogleInput"
import RegisterLoginPrompt from "../RegisterLoginForm/RegisterLoginPrompt";

function LoginForm() {
  return (
    <form className="bg-(--login-register-left-background) h-screen w-1/2">
      {/* Formulário de Login */}
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          {/* Cabeçalho do Form */}
          <RegisterLoginHeader title="Login" description="Bem-vindo(a) de volta ao seu espaço de beleza."/>

          {/* Inputs do Form */}
          <div className="w-[364px] flex flex-col">
            <div className="flex flex-col gap-4 w-full">
              {/* Input de Email com Ícone */}
              <RegisterLoginInput icon={IconUser} type="email" placeholder="Email" />

              {/* Input de Senha com Ícone */}
              <RegisterLoginInput icon={IconLock} type="password" placeholder="Senha" />
            </div>

            {/* Esqueci minha senha */}
            <ForgotPassword />
          </div>

          {/* Botão de Login */}
          <div className="mt-7">
            <RegisterLoginButton text="Entrar Agora"/>
          </div>

          {/* Login with Others */}
          <div className="flex items-center my-6 w-full">
            <RegisterLoginSeparator text="Login"/>
          </div>

          {/* Login with Google */}
          <div className="flex flex-col gap-4">
            <GoogleInput text="Login With Google"/>
          </div>

          {/* Ainda não está cadastrado */} 
          <div className="mt-6">
            <RegisterLoginPrompt textQuestion="Ainda não possuí um Login? " textPrompt="Cadastre-se" routeTo={"/cadastro"}/>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
