import { FC, SVGProps } from "react";

export type FooterProps = {
  theme: {
    fill: string,
    text1: string,
    text2: string,
    LogoSVG: FC<SVGProps<SVGSVGElement>>,
    // background: string,
  },
}