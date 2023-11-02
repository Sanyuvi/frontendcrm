import { useNavigate } from "react-router-dom";

export default function NoPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="mb-4">Sorry You entered wrong universe</h1>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
}
