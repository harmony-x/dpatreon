import { SVGProps } from "react";

export default function UserAvartar(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg {...props} width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.0209 36.0624C40.2091 32.8743 42.0001 28.5503 42.0001 24.0416C42.0001 19.533 40.2091 15.2089 37.0209 12.0208C33.8328 8.8327 29.5088 7.04163 25.0001 7.04163C20.4914 7.04163 16.1674 8.8327 12.9793 12.0208L25.0001 24.0416L37.0209 36.0624Z" fill="#E47722"/>
      <path d="M12.9793 12.0208C9.79119 15.2089 8.00012 19.5329 8.00012 24.0416C8.00012 28.5503 9.79119 32.8743 12.9793 36.0624C16.1674 39.2506 20.4914 41.0416 25.0001 41.0416C29.5088 41.0416 33.8328 39.2506 37.0209 36.0624L25.0001 24.0416L12.9793 12.0208Z" fill="#753D18"/>
      <circle cx="25.0001" cy="24.0416" r="18.75" stroke="#C5CED3" strokeWidth="0.5"/>
    </svg>
  );
}