import type { SVGProps } from 'react';

export function GalaxyLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="url(#logo-gradient-galaxy)" stroke="none" />
      <circle cx="12" cy="12" r="7" fill="var(--background)" stroke="none" />
      <circle cx="12" cy="12" r="4" fill="url(#logo-gradient-galaxy)" stroke="none" />
      <defs>
        <radialGradient id="logo-gradient-galaxy">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </radialGradient>
      </defs>
    </svg>
  );
}
