export type TextAreaProps = {
  value: string,
  label: string,
  placeholder: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  gap: string,
  labelFor: string,
  height: string,
  className?: string,
  px: string,
  py: string,
}