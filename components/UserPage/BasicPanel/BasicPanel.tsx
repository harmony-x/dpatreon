import Button from "$components/Button/Button";
import { Input } from "$components/Input/Input";
import { TextArea } from "$components/TextArea/TextArea";
import UploadImage from "$components/UploadImage/UploadImage";
import { FileType } from "$types/userpage";
import { patreonContract } from "$utils/contracts";
import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import { EditProfileHeading } from "../EditProfileHeading/EditProfileHeading";
import { BasicPanelProps } from "./BasicPanel.types";
import { Form, Formik } from "formik";
import { useQuery } from "react-query";
import { getCreators } from "actions";

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
  const [fileProfileLoader, setFileProfileLoader] = useState<boolean>(false);
  const [fileCoverLoader, setFileCoverLoader] = useState<boolean>(false);
  const { data, isLoading, isSuccess } = useQuery("creators", getCreators);

  const { library, account } = useWeb3React();

  const creator = data?.filter((c) => c.creatorAddress === account);

  // put actual initials here
  const initialValues = creator?.length
    ? creator[0]
    : {
        about: "",
        name: "",
        isAreCreating: "",
        profilePhoto: "",
        coverPhoto: "",
      };

  return isSuccess ? (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          console.log(values);
          await patreonContract(library).fillBasics(
            values.profilePhoto,
            values.coverPhoto,
            values.name,
            values.isAreCreating,
            values.about
          );
        } catch (error) {
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <EditProfileHeading
            description="Set your creator details"
            title="Basics"
          />
          <div className="flex flex-col lg:flex-row justify-between gap-3 md:gap-11">
            <div className="w-full lg:w-3/4">
              <div className="w-full border-xs border-gray3 border-opacity-30 py-8 px-4 md:px-8 flex flex-col md:flex-row justify-between">
                <UploadImage
                  gap="gap-1 md:gap-9"
                  id="fileProfile"
                  fileLoader={fileProfileLoader}
                  setFileLoader={setFileProfileLoader}
                  file={values.profilePhoto}
                  setFile={(file: string) =>
                    setFieldValue("profilePhoto", file)
                  }
                  InputComponent={
                    <ProfilePhoto
                      file={values.profilePhoto}
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
                  id="fileCover"
                  fileLoader={fileCoverLoader}
                  setFileLoader={setFileCoverLoader}
                  file={values.coverPhoto}
                  setFile={(file: string) => setFieldValue("coverPhoto", file)}
                  InputComponent={
                    <CoverPhoto
                      file={values.coverPhoto}
                      fileLoader={fileCoverLoader}
                    />
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
                  placeholder="pseudonym, brand name, personal name, anything else"
                  px="px-5"
                  value={values.name}
                  onChange={(e) => setFieldValue("name", e.target.value)}
                />
                <Input
                  gap="gap-3 md:gap-11"
                  height="h-55px"
                  label="What are you creating?"
                  labelFor="Creation"
                  value={values.isAreCreating}
                  onChange={(e) =>
                    setFieldValue("isAreCreating", e.target.value)
                  }
                  placeholder="Music Videos, water color paintings, creative design"
                  px="px-5"
                  className="mt-10"
                />
                <TextArea
                  gap="gap-3 md:gap-11"
                  height="h-32"
                  label="About your patreon page"
                  labelFor="About"
                  value={values.about}
                  onChange={(e) => setFieldValue("about", e.target.value)}
                  placeholder="This is the first thing potential patrons will see when they land on your page"
                  px="px-5"
                  className="mt-10"
                  py="py-5"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/4">
              <Button
                px="px-6 md:px-10"
                height="h-12 md:h-55px"
                text="Save Changes"
                type="primary"
                className="w-full mt-4"
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  ) : (
    <>Loading...</>
  );
};
