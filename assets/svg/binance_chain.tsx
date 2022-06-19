import { SVGProps } from "react";

export default function BinanceChain(props?: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg {...props} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#F0B90B" fillOpacity="0.15"/>
      <path d="M13.422 20L10.7144 22.7068L8 20L10.7076 17.2932L13.422 20ZM20.0034 13.4205L24.6479 18.0636L27.3555 15.3568L20.0034 8L12.6445 15.3568L15.3521 18.0636L20.0034 13.4205ZM29.2924 17.2932L26.5848 20L29.2924 22.7068L32 20L29.2924 17.2932ZM20.0034 26.5795L15.3589 21.9364L12.6513 24.6432L20.0034 32L27.3555 24.6432L24.6479 21.9364L20.0034 26.5795ZM20.0034 22.7068L22.711 20L20.0034 17.2932L17.289 20L20.0034 22.7068Z" fill="white"/>
    </svg>
  );
}