import { IconUser, IconLock } from "@tabler/icons-react";
import RegisterLoginHeader from "../RegisterLoginForm/RegisterLoginHeader";
import RegisterLoginInput from "../RegisterLoginForm/RegisterLoginInput";
import RegisterLoginButton from "../RegisterLoginForm/RegisterLoginButton";
import RegisterLoginSeparator from "../RegisterLoginForm/RegisterLoginSeparator";
import GoogleInput from "../RegisterLoginForm/GoogleInput"
import RegisterLoginPrompt from "../RegisterLoginForm/RegisterLoginPrompt";

function RegisterForm() {
  return (
    <form className="bg-(--login-register-left-background) h-screen w-1/2">
      {/* Formulário de Registro */}
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          {/* Cabeçalho do Form */}
          <RegisterLoginHeader title={"Registro"} description={"Bem-vindo(a) ao seu espaço de beleza."}/>

          {/* Inputs do Form */}
          <div className="w-[364px] flex flex-col">
            <div className="flex flex-col gap-4 w-full">
              {/* Input de Email com Ícone */}
              <RegisterLoginInput
                icon={IconUser}
                type="email"
                placeholder="Email"
              />

              {/* Input de Senha com Ícone */}
              <RegisterLoginInput
                icon={IconLock}
                type="password"
                placeholder="Senha"
              />

              {/* Input de Confirmar Senha com Ícone */}
              <RegisterLoginInput
                icon={IconLock}
                type="password"
                placeholder="Confirmar Senha"
              />
            </div>
          </div>

          {/* Botão de Registro */}
          <div className="mt-7">
            <RegisterLoginButton text="Cadastrar-se" />
          </div>

          {/* Login with Others */}
          <div className="flex items-center my-6 w-full">
            <RegisterLoginSeparator text="Cadastre-se" />
          </div>

          {/* Login with Google */}
          <div className="flex flex-col gap-4">
            <GoogleInput text="Cadastre-se With Google" />
          </div>

          {/* Ainda não está cadastrado */}
          <div className="mt-6">
            <RegisterLoginPrompt textQuestion="Já possuí um Login? " textPrompt="Entrar Agora" routeTo={"/login"}/>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
