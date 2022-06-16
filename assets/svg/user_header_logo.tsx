import { SVGProps } from "react";

export default function UserHeaderLogo(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg {...props} width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="41" height="41" fill="#8247E5"/>
      <circle cx="20.5" cy="17.5" r="7.5" fill="white"/>
      <rect x="8" y="28" width="25" height="4" fill="white"/>
    </svg>
  );
}