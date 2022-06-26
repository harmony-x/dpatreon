export type InputProps = {
  value: string,
  label: string,
  placeholder: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  gap: string,
  labelFor: string,
  height: string,
  className?: string,
  px: string,
  onEnter?: () => void,
  isRequired?: boolean,
  labelTextSize?: 'sm' | 'lg',
}