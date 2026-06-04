import { cn } from "@/lib/utils";

type OpalMascotBackgroundProps = {
  variant: "hero" | "method" | "system" | "cta";
};

const variantClassNames = {
  hero: "right-[-10rem] top-8 h-[32rem] w-[32rem] opacity-20 sm:h-[40rem] sm:w-[40rem] lg:right-[-8rem]",
  method: "right-[-7rem] top-10 hidden h-[26rem] w-[26rem] opacity-15 md:block",
  system: "left-[-7rem] top-10 hidden h-[30rem] w-[30rem] opacity-15 lg:block",
  cta: "right-[-7rem] top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 opacity-20",
};

export function OpalMascotBackground({ variant }: OpalMascotBackgroundProps) {
  const isSystem = variant === "system";
  const isCta = variant === "cta";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute z-0 select-none overflow-hidden blur-[0.2px]",
        "max-sm:hidden",
        variantClassNames[variant],
      )}
    >
      <svg className="h-full w-full" fill="none" viewBox="0 0 620 620" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(318 286) rotate(65) scale(190 170)" gradientUnits="userSpaceOnUse" id={`opal-core-${variant}`} r="1">
            <stop stopColor="#F5F7FA" stopOpacity="0.62" />
            <stop offset="0.34" stopColor="#5EE7FF" stopOpacity="0.52" />
            <stop offset="0.68" stopColor="#C7F9D2" stopOpacity="0.30" />
            <stop offset="1" stopColor="#B9A7FF" stopOpacity="0.24" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id={`opal-ring-${variant}`} x1="135" x2="486" y1="466" y2="126">
            <stop stopColor="#5EE7FF" stopOpacity="0.88" />
            <stop offset="0.48" stopColor="#C7F9D2" stopOpacity="0.48" />
            <stop offset="1" stopColor="#B9A7FF" stopOpacity="0.58" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id={`opal-line-${variant}`} x1="92" x2="536" y1="528" y2="84">
            <stop stopColor="#5EE7FF" stopOpacity="0" />
            <stop offset="0.22" stopColor="#5EE7FF" stopOpacity="0.66" />
            <stop offset="0.58" stopColor="#F5F7FA" stopOpacity="0.84" />
            <stop offset="1" stopColor="#5EE7FF" stopOpacity="0" />
          </linearGradient>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="420" id={`opal-blur-${variant}`} width="420" x="100" y="100">
            <feGaussianBlur stdDeviation="24" />
          </filter>
        </defs>

        <circle cx="310" cy="310" fill="#5EE7FF" filter={`url(#opal-blur-${variant})`} opacity={isCta ? "0.16" : "0.10"} r="152" />
        <circle cx="310" cy="310" fill={`url(#opal-core-${variant})`} opacity={isSystem ? "0.18" : "0.30"} r="122" />
        <circle cx="310" cy="310" r="171" stroke={`url(#opal-ring-${variant})`} strokeOpacity="0.68" strokeWidth="2.4" />
        <circle cx="310" cy="310" r="214" stroke="#5EE7FF" strokeDasharray={isSystem ? "1 10" : "160 90"} strokeLinecap="round" strokeOpacity={isSystem ? "0.28" : "0.24"} strokeWidth="1.4" />
        <circle cx="310" cy="310" r="96" stroke="#F5F7FA" strokeOpacity="0.14" strokeWidth="1" />

        <path d="M106 514L514 106" stroke={`url(#opal-line-${variant})`} strokeLinecap="round" strokeWidth={isCta ? "2.2" : "2.8"} />
        <circle cx="310" cy="310" fill="#F5F7FA" opacity="0.82" r="6" />
        <circle cx="438" cy="182" fill="#5EE7FF" opacity="0.82" r="4" />
        <path d="M176 362C229 427 321 444 391 398" stroke="#C7F9D2" strokeOpacity="0.18" strokeWidth="1.2" />
        <path d="M206 237C253 187 337 177 394 215" stroke="#B9A7FF" strokeOpacity="0.17" strokeWidth="1.2" />
      </svg>
    </div>
  );
}
