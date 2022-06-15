import { FC, SVGProps } from "react";

export type HowtoCardDataType = {
  heading: string,
  Icon: FC<SVGProps<SVGSVGElement>>,
  title: string,
  description: string,
}