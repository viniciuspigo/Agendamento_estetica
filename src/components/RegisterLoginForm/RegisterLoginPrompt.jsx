import { Link } from "react-router-dom";

function RegisterLoginPrompt({ textQuestion, textPrompt, routeTo}) {
  return (
      <p className="text-sm text-[var(--text-primary)] text-center">
        {textQuestion}
        <Link to={routeTo} className="font-semibold hover:underline text-[var(--text-primary)]">
          {textPrompt}
        </Link>
      </p>
  );
}

export default RegisterLoginPrompt;