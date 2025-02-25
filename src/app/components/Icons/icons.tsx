import { SVGProps } from "react";

export const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.color || "currentColor"}
    {...props}
  >
    <path d="M106.666667 554.666667h519.253333l-147.2 146.773333a21.333333 21.333333 0 0 0 0 30.293333l30.293333 29.866667a21.333333 21.333333 0 0 0 30.293334 0l219.306666-218.88a32 32 0 0 0 9.386667-22.613333v-16.213334a32.853333 32.853333 0 0 0-9.386667-22.613333l-219.306666-218.88a21.333333 21.333333 0 0 0-30.293334 0l-30.293333 30.293333a20.906667 20.906667 0 0 0 0 29.866667L625.92 469.333333H106.666667a21.333333 21.333333 0 0 0-21.333334 21.333334v42.666666a21.333333 21.333333 0 0 0 21.333334 21.333334z m561.92-42.666667zM938.666667 746.666667v-469.333334a21.333333 21.333333 0 0 0-21.333334-21.333333h-42.666666a21.333333 21.333333 0 0 0-21.333334 21.333333v469.333334a21.333333 21.333333 0 0 0 21.333334 21.333333h42.666666a21.333333 21.333333 0 0 0 21.333334-21.333333z" />
  </svg>
);

export const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle
      cx="12"
      cy="12"
      r="4"
    />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

export const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);
