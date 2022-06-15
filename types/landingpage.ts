import { FC, SVGProps } from "react";

export type HowtoCardDataType = {
  heading: string,
  Icon: FC<SVGProps<SVGSVGElement>>,
  title: string,
  description: string,
}

export type LinkList = {
  name: string,
  link: string,
  id: number
}