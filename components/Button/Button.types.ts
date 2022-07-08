export type ButtonProps = {
  type: "primary" | "secondary" | "card1" | "unlock" | "card2" | "default";
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  height: string;
  px: string;
  link?: string;
  target?: string;
};
