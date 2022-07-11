import React from "react";
import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
  label,
  onChange,
  placeholder,
  gap,
  labelFor,
  height,
  className,
  px,
  value,
  onEnter,
  isRequired = true,
  labelTextSize = "lg",
}) => (
  <div
    className={`relative mb-4 flex flex-col md:flex-row ${gap} justify-between ${
      className || ""
    }`}
  >
    <label htmlFor={labelFor} className="flex flex-col gap-1 w-full md:w-1/4">
      <span
        className={`font-semibold text-black ${
          labelTextSize === "sm" ? "text-base" : "text-base md:text-lg"
        } block w-full`}
      >
        {label}
      </span>
      {isRequired ? (
        <span className="text-xs md:text-sm text-black text-opacity-60 font-light">
          Required
        </span>
      ) : null}
    </label>
    <input
      value={value}
      placeholder={placeholder}
      type="text"
      id={labelFor}
      name={labelFor}
      className={`w-full md:w-3/4 bg-gray7 border-xs border-gray4 focus:border-primary focus:ring-2 focus:ring-gray4 text-sm md:text-base outline-none text-black text-opacity-60 ${px} ${height}`}
      onChange={onChange}
      onKeyDown={(e) => {
        if (e.key === "Enter") onEnter && onEnter();
      }}
      required={isRequired}
    />
  </div>
);
