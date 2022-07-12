import Button from "$components/Button/Button";
import { Input } from "$components/Input/Input";
import { TextArea } from "$components/TextArea/TextArea";
import UploadImage from "$components/UploadImage/UploadImage";
import { FileType } from "$types/userpage";
import { subscriptionContract } from "$utils/contracts";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import { TierFormProps } from "./TierForm.types";
import { useWeb3React } from "@web3-react/core";
import { ExtendedTier } from "../TiersPanel/TiersPanel.types";
import Image from "next/image";

const TierImage: React.FC<FileType> = ({ file, fileLoader }) => (
  <div
    style={{ backgroundImage: `url(${file || ""})` }}
    className={`w-full h-20 ${
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

export const TierForm: React.FC<TierFormProps> = ({
  benefits,
  description,
  image,
  price,
  published,
  title,
  edit,
  setTiers,
  tiers,
  id,
}) => {
  const [tierImage, setTierImage] = useState<boolean>(false);
  const [tierBenefits, setTierBenefits] = useState<
    { name: string; id: number }[]
  >(
    benefits
      ? benefits.split("|").map((item, index) => ({ name: item, id: index }))
      : []
  );
  const { library, account } = useWeb3React();

  // put actual initials here
  const initialValues = {
    benefits: "",
    description,
    image,
    price,
    title,
  };

  return edit ? (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        const { description, image, price, title } = values;
        const newTier: ExtendedTier = {
          benefits: tierBenefits.map((item) => item.name).join("|"),
          description,
          edit: false,
          id,
          price,
          image,
          published,
          title,
        };
        setTiers(tiers.map((item) => (item.id === id ? newTier : { ...item })));
        try {
          console.log(values);
          await subscriptionContract(library).setTier(id, {
            published: newTier.published,
            title: newTier.title,
            description: newTier.description,
            price: parseInt("" + newTier.price * 100),
            image: newTier.image,
            benefits: newTier.benefits,
          });
        } catch (error) {
          alert("Could not save tier.");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className="w-full px-6 py-7 border-xs border-gray3 border-opacity-30">
            <button
              type="button"
              className="mb-5 text-red underline text-opacity-80 text-xs text-right font-light flex flex-col"
            >
              {published ? (
                <span
                  className="text-right items-end"
                  onClick={async () =>
                    await subscriptionContract(library).setTierStatus(id, false)
                  }
                >
                  Unpublish
                </span>
              ) : (
                <span
                  onClick={async () =>
                    await subscriptionContract(library).setTierStatus(id, true)
                  }
                >
                  Publish
                </span>
              )}
            </button>
            <Input
              gap="gap-3 md:gap-2"
              height="h-42px"
              label="Tier title"
              labelFor="title"
              placeholder="Official Patron"
              px="px-5"
              value={values.title}
              onChange={(e) => setFieldValue("title", e.target.value)}
              labelTextSize="sm"
            />
            <Input
              gap="gap-3 md:gap-2"
              height="h-42px"
              label="Tier Price"
              labelFor="price"
              placeholder="1 MATIC"
              px="px-5"
              value={String(values.price || "")}
              onChange={(e) => setFieldValue("price", e.target.value)}
              labelTextSize="sm"
            />
            <div className="w-full">
              <UploadImage
                gap="gap-1 md:gap-2"
                id="fileCover"
                fileLoader={tierImage}
                setFileLoader={setTierImage}
                file={values.image}
                setFile={(file: string) => setFieldValue("image", file)}
                InputComponent={
                  <TierImage file={values.image} fileLoader={tierImage} />
                }
                labelComponent={
                  <h1 className="font-semibold text-black text-base md:w-1/4">
                    Tier image
                  </h1>
                }
                labelWidth="w-full md:w-3/4"
              />
            </div>
            <Input
              gap="gap-3 md:gap-2"
              height="h-42px"
              label="Benefits"
              labelFor="benefits"
              value={values.benefits}
              isRequired={false}
              onChange={(e) => setFieldValue("benefits", e.target.value)}
              onEnter={() => {
                setTierBenefits([
                  ...tierBenefits,
                  { name: values.benefits, id: tierBenefits.length },
                ]);
                setFieldValue("benefits", "");
              }}
              placeholder="Add benefit"
              px="px-5"
              className="mt-10 mb-2"
              labelTextSize="sm"
            />
            <div className="flex flex-wrap gap-2 mb-5">
              {tierBenefits.map(
                ({ id, name }, index) =>
                  name && (
                    <p
                      className="px-2 py-1 bg-gray3 bg-opacity-10 rounded-4xl text-black text-opacity-60 text-xs flex items-center leading-none"
                      key={index}
                    >
                      {name}{" "}
                      <span
                        onClick={() =>
                          setTierBenefits(
                            [...tierBenefits].filter((item) => item.id !== id)
                          )
                        }
                        className="ml-1 text-red text-10px inline-block cursor-pointer"
                      >
                        X
                      </span>
                    </p>
                  )
              )}
            </div>
            <TextArea
              gap="gap-3 md:gap-2"
              height="h-32"
              label="Description"
              labelFor="description"
              value={values.description}
              onChange={(e) => setFieldValue("description", e.target.value)}
              placeholder="Description"
              px="px-5"
              className="mt-10"
              py="py-5"
              labelClassName="w-1/4"
              labelTextSize="sm"
              // textAreaClassName="w-full md:w-1/5"
            />
            <div className="flex flex-col lg:flex-row gap-2">
              <Button
                px="px-6 md:px-10"
                height="h-12 md:h-42px"
                text="Save Tier"
                type="primary"
                className="mt-4 w-full lg:w-max"
              />
              <Button
                px="px-6 md:px-10"
                height="h-12 md:h-42px"
                text="Cancel"
                type="card1"
                onClick={() =>
                  setTiers(
                    [...tiers].map((item) =>
                      item.id === id ? { ...item, edit: false } : { ...item }
                    )
                  )
                }
                className="mt-4 w-full lg:w-max"
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  ) : (
    <article className="px-4 lg:px-6 py-4 bg-white border-xs border-opacity-20 border-gray3 w-full">
      <div className="flex">
        <div className=" flex flex-col items-start flex-1">
          <h3 className="text-base font-semibold text-black mb-1">{title}</h3>
          <p className="mb-4 flex gap-1 items-center">
            <span className="font-bold text-black uppercase text-sm">
              {price}
            </span>
            <span className="text-sm font-medium text-black text-opacity-60 uppercase">
              PER MONTH
            </span>
          </p>
          <div className="relative w-full h-24 mb-2 bg-gray7">
            <Image
              layout="fill"
              objectFit="cover"
              src={image ? image : "/placeholder.png"}
              alt=""
            />
          </div>
          <ul className="mb-2 self-start text-left mt-7">
            {benefits.split("|").map((item, index) => (
              <li
                className="text-xs font-semibold text-black mb-1 flex items-center"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs font-light text-black text-opacity-60 self-start text-left mb-6">
            {description}
          </p>
          <Button
            px="px-10 md:px-12"
            height="h-42px"
            onClick={() => {
              setTiers(
                [...tiers].map((item) =>
                  item.id === id
                    ? { ...item, edit: true }
                    : { ...item, edit: false }
                )
              );
            }}
            text="Edit Tier"
            type="card1"
            className="w-full"
          />
        </div>
        <button className="mb-5 text-red underline text-opacity-80 text-xs text-right font-light flex flex-col w-max ml-2">
          {published ? (
            <span
              className="text-right items-end"
              onClick={async () =>
                await subscriptionContract(library).setTierStatus(id, false)
              }
            >
              Unpublish
            </span>
          ) : (
            <span
              onClick={async () =>
                await subscriptionContract(library).setTierStatus(id, true)
              }
            >
              Publish
            </span>
          )}
        </button>
      </div>
    </article>
  );
};
