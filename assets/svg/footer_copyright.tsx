import { SVGProps } from "react";

interface FooterCopyrightProps {
  svgProps?: SVGProps<SVGSVGElement>;
  pathFill: string;
}
export default function FooterCopyright(props: FooterCopyrightProps): JSX.Element {
  return (
    <svg {...props.svgProps} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5001 0.083252C16.2501 0.083252 20.9168 4.74992 20.9168 10.4999C20.9168 16.2499 16.2501 20.9166 10.5001 20.9166C4.7501 20.9166 0.0834351 16.2499 0.0834351 10.4999C0.0834351 4.74992 4.7501 0.083252 10.5001 0.083252ZM10.5001 2.16659C5.89593 2.16659 2.16677 5.89575 2.16677 10.4999C2.16677 15.1041 5.89593 18.8333 10.5001 18.8333C15.1043 18.8333 18.8334 15.1041 18.8334 10.4999C18.8334 5.89575 15.1043 2.16659 10.5001 2.16659ZM10.5001 5.29159C12.3959 5.29159 14.0553 6.30513 14.9668 7.82075L13.1814 8.89263C12.9004 8.42413 12.5015 8.03748 12.0245 7.77122C11.5475 7.50496 11.009 7.3684 10.4627 7.37516C9.91647 7.38192 9.38153 7.53175 8.91125 7.80973C8.44097 8.08771 8.05177 8.48412 7.78247 8.95942C7.51317 9.43473 7.37317 9.97232 7.37644 10.5186C7.3797 11.0649 7.52612 11.6008 7.80109 12.0728C8.07606 12.5449 8.46997 12.9366 8.94354 13.2089C9.41711 13.4813 9.95381 13.6247 10.5001 13.6249C11.0398 13.6253 11.5704 13.4857 12.0402 13.2199C12.5099 12.9541 12.9027 12.5711 13.1803 12.1083L14.9668 13.1791C14.3814 14.1568 13.4914 14.9155 12.4334 15.3388C11.3753 15.7621 10.2076 15.8267 9.10937 15.5225C8.01112 15.2184 7.04296 14.5624 6.35337 13.6552C5.66378 12.7479 5.29085 11.6395 5.29177 10.4999C5.29177 7.62492 7.6251 5.29159 10.5001 5.29159Z" fill={props.pathFill} fillOpacity="0.6"/>
    </svg>
  );
}