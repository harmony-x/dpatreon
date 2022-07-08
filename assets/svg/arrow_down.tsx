import { SVGProps } from "react";

export default function ArrowDown(
  props?: SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      {...props}
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L4 4L7 1"
        stroke="#4A4D4F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
