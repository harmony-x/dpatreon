export type JoinModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  amount: number;
  creatorAddress: string;
  confirm: () => void;
};
