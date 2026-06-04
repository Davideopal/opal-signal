type OpalLogoProps = {
  showWordmark?: boolean;
  size?: number;
};

export function OpalLogo({ showWordmark = true, size = 32 }: OpalLogoProps) {
  const gradientId = "opal-logo-gradient";

  return (
    <span className="inline-flex items-center gap-3 text-[var(--text)]">
      <svg
        aria-hidden="true"
        className="shrink-0"
        fill="none"
        height={size}
        viewBox="0 0 40 40"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id={gradientId} x1="8" x2="32" y1="31" y2="9">
            <stop stopColor="#37C9DF" />
            <stop offset="0.46" stopColor="#D8F7FF" />
            <stop offset="0.74" stopColor="#C7F9D2" />
            <stop offset="1" stopColor="#B9A7FF" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="13.4" stroke={`url(#${gradientId})`} strokeWidth="1.8" />
        <circle cx="20" cy="20" fill="#101418" r="3.2" />
        <path d="M8.8 30.2L31.2 9.8" stroke="#101418" strokeLinecap="round" strokeWidth="2.7" />
        <path d="M8.8 30.2L31.2 9.8" stroke="#37C9DF" strokeLinecap="round" strokeOpacity="0.76" strokeWidth="1.4" />
      </svg>
      {showWordmark ? <span className="text-sm font-semibold tracking-normal">Opal Signal</span> : null}
    </span>
  );
}
