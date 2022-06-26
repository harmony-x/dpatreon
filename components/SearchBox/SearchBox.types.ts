import { FC, SVGProps } from "react";

export type SearchBoxProps = {
  placeholder: string,
  SearchIcon: FC<SVGProps<SVGSVGElement>>,
  height: string,
  children?: JSX.Element,
  className?: string,
  rightSpacing?: string,
  leftPosition: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  containerClassName?: string,
}