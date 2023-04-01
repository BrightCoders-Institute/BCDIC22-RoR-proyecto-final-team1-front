import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div id="error-page">
      <p>
        <i>{error.status} - {error.statusText}</i>
      </p>
      <Link to={`/`}>Ir al inicio</Link>
    </div>
  );
}