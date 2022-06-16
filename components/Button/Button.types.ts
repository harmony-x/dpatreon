export type ButtonProps = {
  type: "primary" | "secondary" | "card1",
  text: string,
  onClick: () => void,
  disabled?: boolean,
  className?: string,
  height: string,
  px: string,
}