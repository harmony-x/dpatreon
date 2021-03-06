import React, { SetStateAction } from "react";

export type UploadImageProps = {
  file: string | null;
  setFile:
    | React.Dispatch<SetStateAction<string | null>>
    | ((file: string) => void);
  fileLoader: boolean;
  setFileLoader: React.Dispatch<SetStateAction<boolean>>;
  labelComponent: React.ReactNode;
  InputComponent: React.ReactNode;
  gap?: string;
  id: string;
  labelWidth?: string;
};
