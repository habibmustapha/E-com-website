export function FormField({ label, error, ...inputProps }) {
  return (
    <label className="block mb-5">
      <span className="block text-xs text-[#9B9B96] mb-1.5">{label}</span>
      <input
        {...inputProps}
        className={`w-full bg-[#1A1A1C] border rounded-md px-3.5 py-2.5 text-[#F2F1EC] text-sm
          placeholder:text-[#5D5D5A] outline-none transition-colors
          focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/40
          ${error ? "border-[#E24C4C]" : "border-[#2B2B2E]"}`}
      />
      {error && <span className="block text-xs text-[#E24C4C] mt-1.5">{error}</span>}
    </label>
  );
}

export function PrimaryButton({ children, loading, ...buttonProps }) {
  return (
    <button
      {...buttonProps}
      disabled={loading || buttonProps.disabled}
      className="w-full bg-[#C9A227] text-[#0F0F10] font-medium text-sm py-3
        transition-colors hover:bg-[#E4C24B] disabled:opacity-50 disabled:cursor-not-allowed"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 92% 100%, 0 100%)" }}
    >
      {loading ? "Please wait…" : children}
    </button>
  );
}

export function ErrorBanner({ message }) {
  if (!message) return null;
  return (
    <div className="mb-5 border border-[#E24C4C]/40 bg-[#E24C4C]/10 text-[#F2A9A9] text-sm px-3.5 py-2.5 rounded-md">
      {message}
    </div>
  );
}
