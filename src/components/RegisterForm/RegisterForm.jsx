import { IconUser, IconLock, IconMail } from "@tabler/icons-react";
import RegisterLoginHeader from "../RegisterLoginForm/RegisterLoginHeader";
import RegisterLoginInput from "../RegisterLoginForm/RegisterLoginInput";
import RegisterLoginButton from "../RegisterLoginForm/RegisterLoginButton";
import RegisterLoginSeparator from "../RegisterLoginForm/RegisterLoginSeparator";
import GoogleInput from "../RegisterLoginForm/GoogleInput";
import RegisterLoginPrompt from "../RegisterLoginForm/RegisterLoginPrompt";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const formSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "O Nome deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
    password: z
      .string()
      .min(8, { message: "A senha deve ter pelo menos 8 caracteres." }),
    passwordConfirmation: z
      .string()
      .min(8, { message: "A senha deve ter pelo menos 8 caracteres." }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não coincidem",
    path: ["passwordConfirmation"],
  });

function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/users/register-user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
          }),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        toast.success("Cadastro realizado com sucesso!");
        reset();
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        console.error(
          "Erro no cadastro: ",
          responseData.message || "Erro ao cadastrar usuário"
        );
        toast.error("Erro ao realizar cadastro!");
      }
    } catch (error) {
      console.log("Erro ao conectar no Servidor: ", error);
      toast.error("Erro ao conectar no Servidor.");
    } finally {
      setLoading(false);
    }
    console.log("Informações do Usuário", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-(--login-register-left-background) h-screen w-1/2"
    >
      {/* Formulário de Registro */}
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          {/* Cabeçalho do Form */}
          <RegisterLoginHeader
            title={"Registro"}
            description={"Bem-vindo(a) ao seu espaço de beleza."}
          />

          {/* Inputs do Form */}
          <div className="w-[364px] flex flex-col">
            <div className="flex flex-col gap-4 w-full">
              {/* Input de Nome com Ícone */}
              <div className="flex flex-col gap-1">
                <RegisterLoginInput
                  icon={IconUser}
                  id="name"
                  type="name"
                  {...register("name")}
                  placeholder="Nome Completo"
                />
                {errors.name && (
                  <p className="text-(--errors-message) text-xs">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Input de Email com Ícone */}
              <div className="flex flex-col gap-1">
                <RegisterLoginInput
                  icon={IconMail}
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
              <div className="flex flex-col gap-1">
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

              {/* Input de Confirmar Senha com Ícone */}
              <div className="flex flex-col gap-1">
                <RegisterLoginInput
                  icon={IconLock}
                  id="passwordConfirmation"
                  type="password"
                  {...register("passwordConfirmation")}
                  placeholder="Confirmar Senha"
                />
                {errors.passwordConfirmation && (
                  <p className="text-(--errors-message) text-xs">
                    {errors.passwordConfirmation.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Botão de Registro */}
          <div className="mt-7">
            <RegisterLoginButton
              text="Cadastrar-se"
              type="submit"
              disabled={loading}
            />
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
            <RegisterLoginPrompt
              textQuestion="Já possuí um Login? "
              textPrompt="Entrar Agora"
              routeTo={"/login"}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
