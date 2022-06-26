import Button from "$components/Button/Button";
import { Input } from "$components/Input/Input";
import { TextArea } from "$components/TextArea/TextArea";
import UploadImage from "$components/UploadImage/UploadImage";
import { FileType } from "$types/userpage";
import React, { useState } from "react";
import { EditProfileHeading } from "../EditProfileHeading/EditProfileHeading";
import { BasicPanelProps } from "./BasicPanel.types";

const ProfilePhoto: React.FC<FileType> = ({ file, fileLoader }) => (
  <div
    style={{ backgroundImage: `url(${file || ""})` }}
    className={`w-24 h-24 rounded-50% ${
      file ? "" : "bg-gray7"
    } cursor-pointer flex items-center justify-center bg-cover bg-no-repeat bg-center`}
  >
    {fileLoader && (
      <div className="flex justify-center items-center">
        <div
          className="animate-pulse inline-block w-6 h-6 bg-primary bg-opacity-40 rounded-full"
          role="status"
        />
      </div>
    )}
  </div>
);

const CoverPhoto: React.FC<FileType> = ({ file, fileLoader }) => (
  <div
    style={{ backgroundImage: `url(${file || ""})` }}
    className={`w-full md:w-64 h-24 ${
      file ? "" : "bg-gray7"
    } cursor-pointer flex items-center justify-center bg-cover bg-no-repeat bg-center`}
  >
    {fileLoader && (
      <div className="flex justify-center items-center">
        <div
          className="animate-pulse inline-block w-6 h-6 bg-primary bg-opacity-40 rounded-full"
          role="status"
        />
      </div>
    )}
  </div>
);

export const BasicPanel: React.FC<BasicPanelProps> = ({
  about,
  creation,
  coverImg,
  profileImg,
  name,
  preference,
}) => {
  const [fileProfile, setFileProfile] = useState<null | string>(null);
  const [fileProfileLoader, setFileProfileLoader] = useState<boolean>(false);
  const [fileCover, setFileCover] = useState<null | string>(null);
  const [fileCoverLoader, setFileCoverLoader] = useState<boolean>(false);
  const [patreonName, setPatreonName] = useState<string>("");
  const [creationName, setCreationName] = useState<string>("");
  const [aboutDescription, setAboutDescription] = useState<string>("");
  console.log(fileProfile);
  console.log(fileCover);
  const onPatreonNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatreonName(e.target.value);
  };

  const onCreationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreationName(e.target.value);
  };

  const onAboutDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAboutDescription(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className=""
    >
      <EditProfileHeading
        description="Set your creator details"
        title="Basics"
      />
      <div className="flex flex-col lg:flex-row justify-between gap-3 md:gap-11">
        <div className="w-full lg:w-3/4">
          <div className="w-full border-xs border-gray3 border-opacity-30 py-8 px-4 md:px-8 flex flex-col md:flex-row justify-between">
            <UploadImage
              gap="gap-1 md:gap-9"
              file={fileProfile}
              fileLoader={fileProfileLoader}
              setFile={setFileProfile}
              setFileLoader={setFileProfileLoader}
              InputComponent={
                <ProfilePhoto
                  file={fileProfile}
                  fileLoader={fileProfileLoader}
                />
              }
              labelComponent={
                <h1 className="font-semibold text-black text-base md:text-lg">
                  Profile Photo
                </h1>
              }
            />
            <UploadImage
              gap="gap-1 md:gap-8"
              file={fileCover}
              fileLoader={fileCoverLoader}
              setFile={setFileCover}
              setFileLoader={setFileCoverLoader}
              InputComponent={
                <CoverPhoto file={fileCover} fileLoader={fileCoverLoader} />
              }
              labelComponent={
                <h1 className="font-semibold text-black text-base md:text-lg">
                  Cover photo
                </h1>
              }
            />
          </div>
          <div className="w-full border-xs border-gray3 border-opacity-30 py-8 px-4 md:px-8 mt-9">
            <Input
              gap="gap-3 md:gap-11"
              height="h-55px"
              label="Name of Patreon Page"
              labelFor="Patreon"
              onChange={onPatreonNameChange}
              placeholder="pseudonym, brand name, personal name, anything else"
              px="px-5"
              value={patreonName}
            />
            <Input
              gap="gap-3 md:gap-11"
              height="h-55px"
              label="What are you creating?"
              labelFor="Creation"
              onChange={onCreationChange}
              placeholder="Music Videos, water color paintings, creative design"
              px="px-5"
              value={creationName}
              className="mt-10"
            />
            <TextArea
              gap="gap-3 md:gap-11"
              height="h-32"
              label="About your patreon page"
              labelFor="About"
              onChange={onAboutDescriptionChange}
              placeholder="This is the first thing potential patrons will see when they land on your page"
              px="px-5"
              value={aboutDescription}
              className="mt-10"
              py="py-5"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <Button
            px="px-6 md:px-10"
            height="h-12 md:h-55px"
            onClick={() => {}}
            text="Save Changes"
            type="primary"
            className="w-full mt-4"
          />
        </div>
      </div>
    </form>
  );
};
