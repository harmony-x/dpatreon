import { FC } from "react";
import { SectionHeadingProps } from "./SectionHeading.types";

const SectionHeading : FC<SectionHeadingProps> = ({text, className}) => {
  return (
    <h2 className={`font-bold not-italic font-Montserrat text-2xl md:text-3xl lg2:text-4xl lg3:text-6xl text-black ${className}`}>{text}</h2>
  )
}

export default SectionHeading;