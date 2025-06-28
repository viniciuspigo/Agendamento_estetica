// eslint-disable-next-line no-unused-vars
function RegisterLoginInput({ icon: Icon, id, type, placeholder, ...props }) {
  return (
    <div className="relative">
      <Icon
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]"
        size={24}
      />
      <input
        id={id}
        type={type}
        {...props}
        placeholder={placeholder}
        className="w-full px-10 py-3 bg-[var(--input-background)] placeholder:text-[var(--text-secondary)] rounded-2xl border border-transparent focus:border-[var(--input-focus-border)] outline-none transition duration-300"
      />
    </div>
  );
}

export default RegisterLoginInput;
