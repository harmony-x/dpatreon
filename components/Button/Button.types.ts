export type ButtonProps = {
  type: "primary" | "secondary",
  text: string,
  onClick: () => void,
  disabled?: boolean,
  className?: string,
  height: string,
  px: string,
}