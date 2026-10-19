import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { FormField, PrimaryButton, ErrorBanner } from "./FormField";

const Login = ({ onSubmit, onNavigateToRegister }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const update = (field) => (e) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
    // clear the field error as soon as the user edits it
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const validate = () => {
    const next = {};
    if (!form.email.trim()) next.email = "Enter your email.";
    if (!form.password) next.password = "Enter your password.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // prevent double submit
    setFormError("");

    if (!validate()) return;

    setLoading(true);
    try {
      await onSubmit?.({ ...form, email: form.email.trim() });

      const from = location.state?.from;
      const destination = from?.pathname?.startsWith("/profile")
        ? `${from.pathname}${from.search || ""}${from.hash || ""}`
        : "/profile/info";

      navigate(destination, { replace: true });
    } catch (err) {
      setFormError(err?.message || "Something went wrong. Please try again.");
      setLoading(false); // only reset on failure; on success we navigate away
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} noValidate>
        {formError && <ErrorBanner>{formError}</ErrorBanner>}

        <FormField
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          value={form.email}
          onChange={update("email")}
          error={errors.email}
        />

        <FormField
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          autoComplete="current-password"
          value={form.password}
          onChange={update("password")}
          error={errors.password}
          rightSlot={
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          }
        />

        <PrimaryButton type="submit" loading={loading} disabled={loading}>
          Sign in
        </PrimaryButton>

        <p>
          Don't have an account?{" "}
          <button type="button" onClick={onNavigateToRegister}>
            Create one
          </button>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
