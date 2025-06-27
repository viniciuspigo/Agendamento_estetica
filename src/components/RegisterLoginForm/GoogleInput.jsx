import { FcGoogle } from "react-icons/fc";

function GoogleInput({ text }) {
  return (
    <button className="w-[364px] py-3 flex flex-row items-center gap-2 justify-center border border-[var(--login-border)] rounded-2xl cursor-pointer hover:bg-[var(--input-background)] transition duration-300">
      <FcGoogle size={28} /> {text}
    </button>
  );
}

export default GoogleInput;