import { FC } from "react";
import { CreatorShowcaseProps } from "./CreatorShowcase.types";

const CreatorShowcase : FC<CreatorShowcaseProps> = ({children, img}) => {
  return (
    <section className="w-full min-h-314px bg-cover bg-no-repeat bg-center relative" style={{backgroundImage: `url(${img})`}}>
      {children}
    </section>
  )
}

export default CreatorShowcase;
