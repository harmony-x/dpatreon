import { Dispatch, ReactNode, SetStateAction } from "react";

export type ModalProps = {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  modalClassName?: string;
};
