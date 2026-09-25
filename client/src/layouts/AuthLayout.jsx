import logo from "../assets/logoZ.png";

/**
 * Split layout shared by Login and Register.
 * Left: the form. Right (desktop only): brand panel with the diagonal
 * cut motif lifted from the Z-Phone mark, repeated as a quiet background rhythm.
 */
export default function AuthLayout({ eyebrow, title, subtitle, children }) {
  return (
    <div className="min-h-screen w-full bg-[#0F0F10] flex">
      {/* Form side */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16">
        <div className="w-full max-w-sm mx-auto">
          <img src={logo} alt="Z-Phone" className="h-9 w-auto mb-12 lg:hidden" />

          <p className="text-[#C9A227] text-sm mb-2">{eyebrow}</p>
          <h1 className="text-3xl text-[#F2F1EC] font-semibold mb-2 tracking-tight">
            {title}
          </h1>
          <p className="text-[#9B9B96] text-sm mb-10 leading-relaxed">
            {subtitle}
          </p>

          {children}
        </div>
      </div>

      {/* Brand side */}
      <div className="hidden lg:flex flex-1 relative bg-[#171719] items-center justify-center overflow-hidden">
        <DiagonalField />
        <div className="relative z-10 flex flex-col items-center text-center px-12">
          <img src={logo} alt="Z-Phone" className="h-16 w-auto mb-8" />
          <p className="text-[#9B9B96] text-base max-w-xs leading-relaxed">
            The phones you want, the service you trust.
          </p>
        </div>
      </div>
    </div>
  );
}

/* A quiet field of parallelogram slices, same cut angle as the logo's Z,
   scaled down and dimmed so it reads as texture rather than a second logo. */
function DiagonalField() {
  const bars = Array.from({ length: 5 });
  return (
    <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
      {bars.map((_, i) => (
        <div
          key={i}
          className="absolute bg-[#C9A227]"
          style={{
            width: "18%",
            height: "160%",
            top: "-30%",
            left: `${i * 22 - 10}%`,
            transform: "skewX(-20deg)",
          }}
        />
      ))}
    </div>
  );
}
