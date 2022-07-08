import { SVGProps } from "react";

export default function Stack(props?: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      width="33"
      height="34"
      viewBox="0 0 33 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16.5" cy="17" r="16.5" fill="#F3EDFC" />
      <path
        d="M17 15.8332C19.3194 15.8332 21.6667 15.0317 21.6667 13.4998C21.6667 11.968 19.3194 11.1665 17 11.1665C14.6807 11.1665 12.3334 11.968 12.3334 13.4998C12.3334 15.0317 14.6807 15.8332 17 15.8332Z"
        fill="#8247E5"
      />
      <path
        d="M12.3334 15.8332C12.3334 17.365 14.6807 18.1665 17 18.1665C19.3194 18.1665 21.6667 17.365 21.6667 15.8332V14.6665C21.6667 16.1983 19.3194 16.9998 17 16.9998C14.6807 16.9998 12.3334 16.1983 12.3334 14.6665V15.8332Z"
        fill="#8247E5"
      />
      <path
        d="M12.3334 18.1667C12.3334 19.6985 14.6807 20.5 17 20.5C19.3194 20.5 21.6667 19.6985 21.6667 18.1667V17C21.6667 18.5318 19.3194 19.3333 17 19.3333C14.6807 19.3333 12.3334 18.5318 12.3334 17V18.1667Z"
        fill="#8247E5"
      />
      <path
        d="M12.3334 20.5002C12.3334 22.032 14.6807 22.8335 17 22.8335C19.3194 22.8335 21.6667 22.032 21.6667 20.5002V19.3335C21.6667 20.8653 19.3194 21.6668 17 21.6668C14.6807 21.6668 12.3334 20.8653 12.3334 19.3335V20.5002Z"
        fill="#8247E5"
      />
    </svg>
  );
}