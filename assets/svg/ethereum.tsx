import { SVGProps } from "react";

export default function Ethereum(props?: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg {...props} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_42_131)">
      <path d="M19.9407 26.4667L11.9595 21.7566L19.9358 33.0008L27.9211 21.7566L19.9358 26.4667H19.9407ZM20.0593 7L12.0814 20.2413L20.0593 24.9595L28.0405 20.2462L20.0593 7Z" fill="#222222" fillOpacity="0.15"/>
      </g>
      <circle cx="20" cy="20" r="19.75" stroke="#71808E" strokeOpacity="0.15" strokeWidth="0.5"/>
      <defs>
      <clipPath id="clip0_42_131">
      <rect width="26" height="26" fill="white" transform="translate(7 7)"/>
      </clipPath>
      </defs>
    </svg>
  );
}