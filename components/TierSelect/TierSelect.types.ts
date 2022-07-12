export interface TierSelectProps {
  options: { name: string; value: number }[];
  selected: { name: string; value: number };
  setSelected: React.Dispatch<
    React.SetStateAction<{
      name: string;
      value: number;
    }>
  >;
}
