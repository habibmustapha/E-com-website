import { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import { FormField, PrimaryButton, ErrorBanner } from "./FormField";

/**
 * Pure UI. Wire it up by passing:
 *   onSubmit={(values) => { ... call your API here ... }}
 * onNavigateToRegister={() => { ... }} 
 */

const Login = ({ onSubmit, onNavigateToRegister }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.email.trim()) next.email = "Enter your email.";
    if (!form.password) next.password = "Enter your password.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    if (!validate()) return;

    try {
      setLoading(true);
      await onSubmit?.(form);
    } catch (err) {
      setFormError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Log in to your account"
      subtitle="Track orders, save favorites and check out faster."
    >
      <form onSubmit={handleSubmit} noValidate>
        <ErrorBanner message={formError} />

        <FormField
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={update("email")}
          error={errors.email}
        />

        <div className="relative">
          <FormField
            label="Password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="••••••••"
            value={form.password}
            onChange={update("password")}
            error={errors.password}
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute right-3 top-8.5 text-xs text-[#9B9B96] hover:text-[#C9A227]"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="flex justify-end mb-6 -mt-2">
          <a href="#" className="text-xs text-[#9B9B96] hover:text-[#C9A227]">
            Forgot password?
          </a>
        </div>

        <PrimaryButton type="submit" loading={loading}>
          Log in
        </PrimaryButton>

        <p className="text-sm text-[#9B9B96] mt-8 text-center">
          New to Z-Phone?{" "}
          <button
            type="button"
            onClick={onNavigateToRegister}
            className="text-[#C9A227] hover:text-[#E4C24B]"
          >
            Create an account
          </button>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
