import { SVGProps } from "react";

export default function PolygonMatic(
  props?: SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      {...props}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#8247E5" />
      <g clipPath="url(#clip0_385_1191)">
        <path
          d="M32.3242 20.6005C31.8457 20.3319 31.2305 20.3319 30.6836 20.6005L26.8555 22.8169L24.2578 24.2274L20.498 26.4438C20.0195 26.7125 19.4043 26.7125 18.8574 26.4438L15.918 24.6975C15.4395 24.4289 15.0977 23.8916 15.0977 23.2871V19.9289C15.0977 19.3916 15.3711 18.8543 15.918 18.5184L18.8574 16.8393C19.3359 16.5707 19.9512 16.5707 20.498 16.8393L23.4375 18.5856C23.916 18.8543 24.2578 19.3916 24.2578 19.996V22.2125L26.8555 20.7349V18.4513C26.8555 17.914 26.582 17.3766 26.0352 17.0408L20.5664 13.8841C20.0879 13.6155 19.4727 13.6155 18.9258 13.8841L13.3203 17.108C12.7734 17.3766 12.5 17.914 12.5 18.4513V24.7647C12.5 25.302 12.7734 25.8393 13.3203 26.1752L18.8574 29.3319C19.3359 29.6005 19.9512 29.6005 20.498 29.3319L24.2578 27.1826L26.8555 25.705L30.6152 23.5558C31.0937 23.2871 31.709 23.2871 32.2559 23.5558L35.1953 25.2349C35.6738 25.5035 36.0156 26.0408 36.0156 26.6453V30.0035C36.0156 30.5408 35.7422 31.0781 35.1953 31.414L32.3242 33.0931C31.8457 33.3617 31.2305 33.3617 30.6836 33.0931L27.7441 31.414C27.2656 31.1453 26.9238 30.608 26.9238 30.0035V27.8543L24.3262 29.3319V31.5483C24.3262 32.0856 24.5996 32.6229 25.1465 32.9587L30.6836 36.1154C31.1621 36.3841 31.7773 36.3841 32.3242 36.1154L37.8613 32.9587C38.3398 32.6901 38.6816 32.1528 38.6816 31.5483V25.1677C38.6816 24.6304 38.4082 24.0931 37.8613 23.7572L32.3242 20.6005Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_385_1191">
          <rect
            width="26.25"
            height="22.5"
            fill="white"
            transform="translate(12.5 13.75)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}