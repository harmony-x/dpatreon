import { FC } from "react";
import { ThreeColumnLayoutProps } from "./ThreeColumnLayout.types";

const ThreeColumnLayout : FC<ThreeColumnLayoutProps> = ({leftColumn, centerColumn, rightColumn}) => {
  return (
    <section className="flex flex-col md:flex-row gap-6 justify-between items-center md:items-start">
      <div className="w-full md:w-1/3 lg:w-1/4">{leftColumn}</div>
      <div className="w-full md:w-2/5 lg:w-1/2">{centerColumn}</div>
      <div className="w-full md:w-1/3 lg:w-1/4">{rightColumn}</div>
    </section>
  )
}

export default ThreeColumnLayout;