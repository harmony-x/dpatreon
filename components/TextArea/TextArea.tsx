import React from "react";
import { TextAreaProps } from "./TextArea.types";

export const TextArea : React.FC<TextAreaProps> = ({label, onChange, placeholder, gap, labelFor, height, className, px, value, py, labelClassName = 'w-full md:w-1/4', textAreaClassName ='w-full md:w-3/4', labelTextSize = 'lg'}) => (
  <div className={`relative mb-4 flex flex-col md:flex-row ${gap} justify-between ${className || ''}`}>
    <label htmlFor={labelFor} className={`flex flex-col gap-1 ${labelClassName}`}>
      <span className={`font-semibold text-black ${labelTextSize === 'sm' ? 'text-base' : 'text-base md:text-lg' } block w-full`}>{label}</span>
      <span className="text-xs md:text-sm text-black text-opacity-60 font-light">Required</span>
    </label>
    <textarea value={value} placeholder={placeholder} id={labelFor} name={labelFor} className={`${textAreaClassName} bg-gray7 border-xs border-gray4 focus:border-primary focus:ring-2 focus:ring-gray4 text-sm md:text-base outline-none text-black text-opacity-60 ${px} ${py} ${height}`} 
    onChange={onChange} required></textarea>
  </div>
)