import { ChangeEvent, FC, useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { UploadImageProps } from "./UploadImage.types";

const UploadImage: FC<UploadImageProps> = ({
  InputComponent,
  labelComponent,
  gap,
  file,
  fileLoader,
  setFile,
  setFileLoader,
  id,
  labelWidth = "w-full md:w-max",
}) => {
  const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0" as any);

  async function onChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.name);
    if (e.target?.files) {
      const file = e.target?.files[0];
      setFileLoader(true);
      try {
        const added = await client.add(file, {
          progress: (prog) => console.log(`received: ${prog}`),
        });
        const url = `https://ipfs.infura.io/ipfs/${added.path}`;
        setFile(url);
        setFileLoader(false);
      } catch (error) {
        console.log("Error uploading file: ", error);
        setFileLoader(false);
      }
    }
  }

  return (
    <>
      <div
        onClick={() => {
          document.getElementById(id)?.click();
        }}
        className={`relative mb-4 flex flex-col md:flex-row items-start w-full ${
          gap || ""
        }`}
      >
        {labelComponent}
        <label
          key={gap}
          htmlFor="image"
          className={`flex items-start ${labelWidth}`}
        >
          <div className="sr-only">{labelComponent}</div>
          <input
            type="file"
            id={id}
            name={id}
            className="cursor-pointer absolute block appearance-none sr-only"
            onChange={onChange}
          />
          {InputComponent}
        </label>
      </div>
    </>
  );
};

export default UploadImage;
