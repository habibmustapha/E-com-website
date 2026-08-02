import { useState } from "react";
import { Login } from "../../../services/authService";
import back from "../../assets/back.jpg";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const user = await Login(email, password);

      navigate("/admin");

      console.log(user);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-text text-center mb-8">
          Admin Login
        </h1>
        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="text-text/80 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-text placeholder:text-text/50 outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="text-text/80 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-text placeholder:text-text/50 outline-none focus:border-primary"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl cursor-pointer bg-white py-3 font-semibold text-text transition hover:bg-buttons-hover"
          >
            {loading ? "Logging in ..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
