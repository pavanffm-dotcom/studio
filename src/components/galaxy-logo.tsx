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
      <defs>
        <linearGradient id="logo-gradient-cute" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--cute-purple))" />
          <stop offset="100%" stopColor="hsl(var(--baby-pink))" />
        </linearGradient>
      </defs>
      <path d="M12 2a10 10 0 1 0 10 10" stroke="url(#logo-gradient-cute)" strokeWidth="2.5" />
      <path d="M12 22a10 10 0 0 0-9.5-13.5" stroke="url(#logo-gradient-cute)" strokeWidth="2.5" opacity="0.6" />
      <circle cx="12" cy="12" r="2.5" fill="url(#logo-gradient-cute)" stroke="none" />
    </svg>
  );
}
