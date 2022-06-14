import { FC, SVGProps } from "react";

export type SearchBoxProps = {
  placeholder: string,
  SearchIcon: FC<SVGProps<SVGSVGElement>>,
  height: string,
  children?: JSX.Element,
  className?: string,
  rightSpacing?: string
}