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
/* import { supabase } from "../../../backend/config/supabase"; */

const formSchema = z
  .object({
    name: z.string().min(3, { message: "O Nome deve ter pelo menos 3 caracteres" }),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = (response) => {
 /*    const { data, error } = supabase.auth.signUp({
      email: response.email,
      password: response.password,
      options: {
        data: {display_name: response.name}
      },
    });
    if (error) {
      console.error(`OLHA O ERRO AQUI ${error}`);
    } else {
      console.log("Deu tudo certo", data);
    } */
    console.log("Informações do Usuário", response)
    reset();
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
              <RegisterLoginInput
                icon={IconUser}
                id="name"
                type="name"
                {...register("name")}
                placeholder="Nome Completo"
              />
              {name.email && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}

              {/* Input de Email com Ícone */}
              <RegisterLoginInput
                icon={IconMail}
                id="email"
                type="email"
                {...register("email")}
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              {/* Input de Senha com Ícone */}
              <RegisterLoginInput
                icon={IconLock}
                id="password"
                type="password"
                {...register("password")}
                placeholder="Senha"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              {/* Input de Confirmar Senha com Ícone */}
              <RegisterLoginInput
                icon={IconLock}
                id="passwordConfirmation"
                type="password"
                {...register("passwordConfirmation")}
                placeholder="Confirmar Senha"
              />
              {errors.passwordConfirmation && (
                <p className="text-red-500 text-sm">
                  {errors.passwordConfirmation.message}
                </p>
              )}
            </div>
          </div>

          {/* Botão de Registro */}
          <div className="mt-7">
            <RegisterLoginButton text="Cadastrar-se" type="submit" />
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
