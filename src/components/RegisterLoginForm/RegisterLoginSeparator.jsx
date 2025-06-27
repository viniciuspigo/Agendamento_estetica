function RegisterLoginSeparator({ text }) {
  return (
    <>
      <div className="flex-1 h-px bg-[var(--login-border)]"></div>
      <h2 className="mx-2 text-[var(--text-primary)]">
        <strong>{text}</strong> with Others
      </h2>
      <div className="flex-1 h-px bg-[var(--login-border)]"></div>
    </>
  );
}

export default RegisterLoginSeparator;
