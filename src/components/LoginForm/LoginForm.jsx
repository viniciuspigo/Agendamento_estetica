import { IconUser, IconLock } from "@tabler/icons-react";
import RegisterLoginHeader from "../RegisterLoginForm/RegisterLoginHeader";
import ForgotPassword from "./ForgotPassword";
import RegisterLoginButton from "../RegisterLoginForm/RegisterLoginButton";
import RegisterLoginInput from "../RegisterLoginForm/RegisterLoginInput";
import RegisterLoginSeparator from "../RegisterLoginForm/RegisterLoginSeparator";
import GoogleInput from "../RegisterLoginForm/GoogleInput";
import RegisterLoginPrompt from "../RegisterLoginForm/RegisterLoginPrompt";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um e-mail váilido." }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
});

function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/users/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success("Login realizado com sucesso.");
        reset();
        setTimeout(() => {
          navigate("/pagina-inicial");
        }, 1500);
      } else {
        toast.error("Erro ao realizar login", responseData.message);
        console.error("Erro ao realizar login", responseData.message);
      }
    } catch (error) {
      toast.error("Erro ao conectar no Servidor", error);
      console.error("Erro ao conectar no Servidor", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-(--login-register-left-background) h-screen w-1/2"
    >
      {/* Formulário de Login */}
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          {/* Cabeçalho do Form */}
          <RegisterLoginHeader
            title="Login"
            description="Bem-vindo(a) de volta ao seu espaço de beleza."
          />

          {/* Inputs do Form */}
          <div className="w-[364px] flex flex-col">
            <div className="flex flex-col gap-4 w-full">
              {/* Input de Email com Ícone */}
              <div className="flex flex-col gap-1">
                <RegisterLoginInput
                  icon={IconUser}
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-(--errors-message) text-xs">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Input de Senha com Ícone */}
              <RegisterLoginInput
                icon={IconLock}
                id="password"
                type="password"
                {...register("password")}
                placeholder="Senha"
              />
              {errors.password && (
                <p className="text-(--errors-message) text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Esqueci minha senha */}
            <ForgotPassword />
          </div>

          {/* Botão de Login */}
          <div className="mt-7">
            <RegisterLoginButton
              text="Entrar Agora"
              type="submit"
              disabled={loading}
            />
          </div>

          {/* Login with Others */}
          <div className="flex items-center my-6 w-full">
            <RegisterLoginSeparator text="Login" />
          </div>

          {/* Login with Google */}
          <div className="flex flex-col gap-4">
            <GoogleInput text="Login With Google" />
          </div>

          {/* Ainda não está cadastrado */}
          <div className="mt-6">
            <RegisterLoginPrompt
              textQuestion="Ainda não possuí um Login? "
              textPrompt="Cadastre-se"
              routeTo={"/cadastro"}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
