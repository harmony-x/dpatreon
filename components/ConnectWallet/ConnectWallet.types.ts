import { Dispatch, SetStateAction } from "react";

export type ConnectWalletProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}