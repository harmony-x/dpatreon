import UploadImage from "$components/UploadImage/UploadImage";
import { FileType } from "$types/userpage";
import React, { useState } from "react";
import { EditProfileHeading } from "../EditProfileHeading/EditProfileHeading";
import { BasicPanelProps } from "./BasicPanel.types";

const ProfilePhoto : React.FC<FileType>  = ({file, fileLoader}) => (
  <div key={33} style={{backgroundImage: `url(${file || ""})`}} className={`w-24 h-24 rounded-50% ${file ? '' : 'bg-gray7'} cursor-pointer flex items-center justify-center bg-cover bg-no-repeat bg-center`}>
    {fileLoader && 
      <div className="flex justify-center items-center">
        <div className="animate-pulse inline-block w-6 h-6 bg-primary bg-opacity-40 rounded-full" role="status"/>
    </div>}
  </div>
)

const CoverPhoto : React.FC<FileType>  = ({file, fileLoader}) => (
  <div key={90} style={{backgroundImage: `url(${file || ""})`}} className={`w-64 h-24 ${file ? '' : 'bg-gray7'} cursor-pointer flex items-center justify-center bg-cover bg-no-repeat bg-center`}>
    {fileLoader && 
      <div className="flex justify-center items-center">
        <div className="animate-pulse inline-block w-6 h-6 bg-primary bg-opacity-40 rounded-full" role="status"/>
    </div>}
  </div>
)

export const BasicPanel : React.FC<BasicPanelProps> = ({about, creation, coverImg,profileImg, name, preference}) => {
  const [fileProfile, setFileProfile] = useState<null | string>(null);
  const [fileProfileLoader, setFileProfileLoader] = useState<boolean>(false);
  const [fileCover, setFileCover] = useState<null | string>(null);
  const [fileCoverLoader, setFileCoverLoader] = useState<boolean>(false);

  return (
    <section className="">
      <EditProfileHeading description="Set your creator details" title="Basics" />
      <div className="flex justify-between gap-11">
        <div className="w-3/4">
          <div className="w-full border-xs border-gray3 border-opacity-30 py-8 px-8 flex justify-between">
            <UploadImage key={1} gap="gap-9" file={fileProfile} fileLoader={fileProfileLoader} setFile={setFileProfile} setFileLoader={setFileProfileLoader} InputComponent={<ProfilePhoto file={fileProfile} fileLoader={fileProfileLoader} key={0} />} labelComponent={<h1 className="font-semibold text-black text-base md:text-lg">Profile Photo</h1>} />
            <UploadImage key={23} gap="gap-8" file={fileCover} fileLoader={fileCoverLoader} setFile={setFileCover} setFileLoader={setFileCoverLoader} InputComponent={<CoverPhoto file={fileCover} fileLoader={fileCoverLoader} key={10} />} labelComponent={<h1 className="font-semibold text-black text-base md:text-lg">Cover photo</h1>} />
          </div>
          <div className="w-full border-xs border-gray3 border-opacity-30 py-8 px-8 mt-9">

          </div>
        </div>
      </div>
    <div className="w-1/4"></div>
  </section>
  )
}

  