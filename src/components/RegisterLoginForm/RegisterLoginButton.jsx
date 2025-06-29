import { IconLoader2 } from "@tabler/icons-react";

function RegisterLoginButton({ text, type, disabled }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-[var(--login-btn)] text-white rounded-2xl py-4 px-7 font-bold text-[12px] flex items-center justify-center gap-2 transition duration-300 cursor-pointer
        ${
          disabled
            ? "opacity-70 cursor-not-allowed"
            : "hover:bg-[var(--login-btn-hover)] hover:shadow-md hover:scale-102"
        }
      `}
    >
      {disabled ? <IconLoader2 className="animate-spin" size={20} /> : text}
    </button>
  );
}

export default RegisterLoginButton;
