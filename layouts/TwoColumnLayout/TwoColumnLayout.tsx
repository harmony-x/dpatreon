import { FC } from "react";
import { TwoColumnLayoutProps } from "./TwoColumnLayout.types";

const TwoColumnLayout: FC<TwoColumnLayoutProps> = ({
  leftColumn,
  rightColumn,
}) => {
  return (
    <section className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center md:items-start">
      <div className="w-full md:w-1/2 lg:w-51%">{leftColumn}</div>
      <div className="w-full md:w-5/12 lg:w-39%">{rightColumn}</div>
    </section>
  );
};

export default TwoColumnLayout;
