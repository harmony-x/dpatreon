import { SVGProps } from "react";

export default function JoinLogo(props?: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="36" cy="36" r="36" fill="#8247E5" />
      <circle cx="36.4503" cy="30.5099" r="11.61" fill="white" />
      <rect x="17.1001" y="46.7639" width="38.7" height="6.192" fill="white" />
    </svg>
  );
}
