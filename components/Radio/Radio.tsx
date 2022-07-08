import { RadioGroup } from "@headlessui/react";
import { RadioProps } from "./Radio.types";

const Radio: React.FC<RadioProps> = ({
  disabled = false,
  options,
  setValue,
  value,
  label = "",
}) => {
  return (
    <RadioGroup
      disabled={disabled}
      className=""
      value={value}
      onChange={setValue}
    >
      <div className="flex flex-col justify-center">
        {options.map(({ component, value }, index) => (
          <RadioGroup.Option value={value} key={index}>
            {({ checked }) => (
              <div
                className={`flex items-center cursor-pointer ${
                  index !== 0 && " mt-3"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-xs border-opacity-50 items-center flex justify-center mr-2  ${
                    checked
                      ? " border-primary bg-primary"
                      : " border-gray4 bg-gray4"
                  }`}
                >
                  {checked && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                {component}
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default Radio;
