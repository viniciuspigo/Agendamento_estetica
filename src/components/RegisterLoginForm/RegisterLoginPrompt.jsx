function RegisterLoginPrompt({ textQuestion, textPrompt, routeTo}) {
  return (
      <p className="text-sm text-[var(--text-primary)] text-center">
        {textQuestion}
        <a href={routeTo} className="font-semibold hover:underline text-[var(--text-primary)]">
          {textPrompt}
        </a>
      </p>
  );
}

export default RegisterLoginPrompt;