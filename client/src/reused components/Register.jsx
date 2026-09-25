import { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import { FormField, PrimaryButton, ErrorBanner } from "./FormField";

const initialForm = {
  first_name: "",
  last_name: "",
  username: "",
  phone: "",
  email: "",
  password: "",
  confirm_password: "",
};

/**
 * Pure UI. Wire it up by passing:
 *   onSubmit={(values) => { ... call your API here ... }}
 *   onNavigateToLogin={() => { ... }}
 * `values` has the confirm_password field already stripped out.
 */
const Register = ({ onSubmit, onNavigateToLogin }) => {
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.first_name.trim()) next.first_name = "Required.";
    if (!form.last_name.trim()) next.last_name = "Required.";
    if (!form.username.trim()) next.username = "Required.";
    if (!form.phone.trim()) next.phone = "Required.";
    if (!form.email.trim()) next.email = "Required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter a valid email.";
    if (!form.password) next.password = "Required.";
    else if (form.password.length < 8)
      next.password = "Use at least 8 characters.";
    if (form.confirm_password !== form.password)
      next.confirm_password = "Passwords don't match.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    if (!validate()) return;

    try {
      setLoading(true);
      const { payload } = form;
      await onSubmit?.(payload);
    } catch (err) {
      setFormError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      eyebrow="Get started"
      title="Create your account"
      subtitle="One account for every order, from checkout to support."
    >
      <form onSubmit={handleSubmit} noValidate>
        <ErrorBanner message={formError} />

        <div className="grid grid-cols-2 gap-x-4">
          <FormField
            label="First name"
            autoComplete="given-name"
            placeholder="Amine"
            value={form.first_name}
            onChange={update("first_name")}
            error={errors.first_name}
          />
          <FormField
            label="Last name"
            autoComplete="family-name"
            placeholder="Benali"
            value={form.last_name}
            onChange={update("last_name")}
            error={errors.last_name}
          />
        </div>

        <FormField
          label="Username"
          autoComplete="username"
          placeholder="aminebenali"
          value={form.username}
          onChange={update("username")}
          error={errors.username}
        />

        <FormField
          label="Phone"
          type="tel"
          autoComplete="tel"
          placeholder="0550 12 34 56"
          value={form.phone}
          onChange={update("phone")}
          error={errors.phone}
        />

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
            autoComplete="new-password"
            placeholder="At least 8 characters"
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

        <FormField
          label="Confirm password"
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          placeholder="Re-enter your password"
          value={form.confirm_password}
          onChange={update("confirm_password")}
          error={errors.confirm_password}
        />

        <PrimaryButton type="submit" loading={loading}>
          Create account
        </PrimaryButton>

        <p className="text-sm text-[#9B9B96] mt-8 text-center">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onNavigateToLogin}
            className="text-[#C9A227] hover:text-[#E4C24B]"
          >
            Log in
          </button>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;
