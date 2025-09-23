import { useEffect, useState } from "react";
import styled from "styled-components";
//OnDataChange: (data: string) => void;
type timeVariant = "date" | "datetime-local" | "";

interface DateInputProps {
  floatLabel: string;
  OnDataChange?: (data: Date) => void;
  height?: string;
  width?: string;
  min?: string; //"YYYY-MM-DD"
  max?: string; //"YYYY-MM-DD"
  inputTimeType: timeVariant;
  labelColor?: string;
  inputBorderStyle?: string;
  inputFocusBorderColor?: string;
  backgroundColor?: string;
  FocusLabelColor?: string;
  id?: string;
  name?: string;
}

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.3s ease all;
  z-index: 999;
  padding: 0 5px;
  background-color: transparent;
`;

const InputWrapper = styled.div<{
  $inputWidth?: string;
  $inputHeight?: string;
  $inputBorderStyling?: string;
  $inputBackGroundColor?: string;
  $inputFocusBorderColor?: string;
  $labelColor?: string;
  $FocusLabelColor?: string;
}>`
  position: relative;
  width: ${(props) => props.$inputWidth || "320px"};
  height: ${(props) => props.$inputHeight || "51px"};

  input {
    width: 100%;
    height: 100%;
    padding: 0.5rem 0.75rem;
    border: ${(props) => props.$inputBorderStyling || "2px solid #ccc"}; //works
    border-radius: 4px;
    box-sizing: border-box;
    z-index: 1;
    background-color: ${(props) => (props.$inputBackGroundColor !== null ? props.$inputBackGroundColor : "#FFFFFF")}; //this works

    &:focus {
      border-color: ${(props) => (props.$inputFocusBorderColor !== null ? props.$inputFocusBorderColor : "#4a90e2")};
      outline: none;
      background-color: ${(props) => (props.$inputBackGroundColor !== null ? props.$inputBackGroundColor : "#FFFFFF")};
    }

    &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
      top: 0;
      left: 10px;

      padding: 0 5px;
      color: ${(props) => props.$FocusLabelColor || "#4a90e2"};
      transform: translate(0%, -50%) scale(0.8);
      background: linear-gradient(to bottom, transparent 50%, ${(props) => (props.$inputBackGroundColor ? props.$inputBackGroundColor : "#FFFFFF")} 0%);
    }

    &:not(:focus) + ${Label} {
      color: ${(props) => props.$labelColor || "#ccc"};
    }
  }
`;

//needs to transform based on height of element
export const WavelengthDatePicker = ({
  id,
  name,
  inputBorderStyle,
  floatLabel,
  labelColor,
  inputFocusBorderColor,
  FocusLabelColor,
  backgroundColor,
  height,
  width,
  min,
  max,
  inputTimeType,
  OnDataChange,
}: DateInputProps) => {
  const [inputType, setInputType] = useState("");
  const [value, setValue] = useState("");
  const [minAdjusted, setMinAdjusted] = useState("");
  const [maxAdjusted, setMaxAdjusted] = useState("");

  const idName = id ? id : "WlDatePick";

  useEffect(() => {
    const minDate = new Date(min || "");
    const maxDate = new Date(max || "");

    if (inputTimeType === "datetime-local") {
      if (min !== undefined && max !== undefined) {
        const minCorrect = minDate.toISOString().slice(0, 16);
        const maxCorrect = maxDate.toISOString().slice(0, 16);
        setMinAdjusted(minCorrect || "");
        setMaxAdjusted(maxCorrect || "");
      } else if (min !== undefined) {
        //if min is defined but max is not defined
        const minCorrect = minDate.toISOString().slice(0, 16);
        setMinAdjusted(minCorrect || "");
        setMaxAdjusted("");
      } else if (max !== undefined) {
        const maxCorrect = maxDate.toISOString().slice(0, 16);
        setMaxAdjusted(maxCorrect || "");
        setMinAdjusted("");
      } else {
        setMinAdjusted("");
        setMaxAdjusted("");
      }
    } else if (inputTimeType === "date") {
      setMinAdjusted(min || "");
      setMaxAdjusted(max || "");
    }
  });

  const handleFocus = () => {
    setInputType(inputTimeType ?? "date");
  };

  const handleBlur = () => {
    if (!value) {
      setInputType("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = e.target.value;
    setValue(dateString);
    if (OnDataChange !== undefined) OnDataChange(new Date(dateString));
  };

  return (
    <InputWrapper
      id={`${idName}-inputWrapper`}
      $inputBorderStyling={inputBorderStyle}
      $inputWidth={width}
      $inputHeight={height}
      $inputFocusBorderColor={inputFocusBorderColor}
      $labelColor={labelColor}
      $FocusLabelColor={FocusLabelColor}
      $inputBackGroundColor={backgroundColor}
    >
      <input
        type={inputType}
        id={idName}
        name={name}
        data-testid="my_wl_date_input"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        //onKeyDown={handleKeyDown}
        value={value}
        placeholder=" " // Use an empty placeholder for styling purposes
        min={minAdjusted}
        max={maxAdjusted}
      />
      <Label id={`${idName}-label`} htmlFor={idName}>
        {floatLabel}
      </Label>
    </InputWrapper>
  );
};

WavelengthDatePicker.displayName = "WavelengthDatePicker";

export default WavelengthDatePicker;
