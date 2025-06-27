function RegisterLoginHeader({ title, description}) {
  return (
    <div className="flex flex-col gap-2 items-center m-6">
      <h1 className="text-[var(--text-primary)] font-bold text-3xl uppercase">
        {title}
      </h1>
      <p className="text-[var(--text-primary)] font-normal">
        {description}
      </p>
    </div>
  );
}

export default RegisterLoginHeader;
