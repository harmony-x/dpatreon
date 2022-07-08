interface RadioOption {
  component: React.ReactNode;
  value: string;
}

export interface RadioProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  label?: string;
  options: RadioOption[];
}
