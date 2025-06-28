function RegisterLoginButton({ text, type }) {
  return (
    <button type={type} className="bg-[var(--login-btn)] text-white rounded-2xl py-4 px-7 font-bold text-[12px] cursor-pointer hover:bg-[var(--login-btn-hover)] transition duration-300 hover:shadow-md hover:scale-102">
      {text}
    </button>
  );
}

export default RegisterLoginButton;