import { IconUser, IconLock } from "@tabler/icons-react";

function LoginForm() {
  return (
    <div className="flex flex-row">
      <div className="bg-[var(--login-register-left-background)] h-screen w-1/2">
        {/* Formulário de Login */}
        <div className="h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            {/* Cabeçalho do Form */}
            <div className="flex flex-col gap-2 items-center m-6">
              <h1 className="text-[var(--text-primary)] font-bold text-3xl uppercase">
                Login
              </h1>
              <p className="text-[var(--text-primary)] font-normal">
                Bem-vindo(a) de volta ao seu espaço de beleza.
              </p>
            </div>

            {/* Inputs do Form */}
            <div className="w-[364px] flex flex-col gap-4">
              {/* Input de Email com Ícone */}
              <div className="relative">
                <IconUser
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-(--text-secondary)"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-10 py-3 border-none bg-[var(--input-background)] placeholder:text-(--text-secondary) rounded-2xl"
                />
              </div>

              {/* Input de Senha com Ícone */}
              <div className="relative">
                <IconLock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]"
                  size={20}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  className="w-full px-10 py-3 border-none bg-[var(--input-background)] placeholder:text-[var(--text-secondary)] rounded-2xl"
                />
              </div>
            </div>

            {/* Botão de Login */}
            <div className="mt-6">
              <button className="bg-(--login-btn) text-white rounded-2xl py-4 px-7 font-bold text-[12px]">
                Entrar Agora
              </button>
            </div>

            <div className="mt-6 flex flex-col">
              <hr />
              <h2>Login with Others</h2>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--login-register-right-background)] h-screen w-1/2"></div>
    </div>
  );
}

export default LoginForm;
