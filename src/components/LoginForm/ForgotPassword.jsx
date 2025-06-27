function ForgotPassword() {
  return (
    <div className="w-full text-right">
      <a
        href="/recuperar-senha"
        className="text-sm text-[var(--text-primary)] hover:underline"
      >
        Esqueci minha senha
      </a>
    </div>
  );
}

export default ForgotPassword;