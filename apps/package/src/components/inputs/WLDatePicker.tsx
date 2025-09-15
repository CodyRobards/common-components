import { ChangeEvent, useEffect, useRef, useState, KeyboardEvent } from "react";
import styled from "styled-components";
//onDataChange: (data: string) => void;
type timeVariant = "date" | "datetime-local" | "";

interface DateInputProps {
  labelVariant: string;
  height?: string;
  width?: string;
  min?: string; //"YYYY-MM-DD"
  max?: string; //"YYYY-MM-DD"
  inputTimeType: timeVariant;
  OnDataChange: (data: Date) => void;
  labelColor?: string;
  borderColor?: string;
  FocusBorderColor?: string;
  backgroundColor?: string;
  FocusLabelColor?: string;
}

const FloatLabel = styled.label<{ $height?: string; $width?: string }>`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  z-index: 99;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
  padding-left: 4px;
  padding-right: 4px;

  &:active {
    transform: translateY(-100%) scale(0.75);
  }
`;

const FloatLabelContainer = styled.div<{ $height?: string; $width?: string; $labelColor?: string; $borderInpCol?: string; $focusBordCol?: string; $inputBackground?: string; $focuslabel?: string }>`
  position: absolute;
  height: ${(props) => (props.$height !== null ? props.$height : "40px")};
  width: ${(props) => (props.$width !== null ? props.$width : "150px")};
  border: 10px solid ${(props) => (props.$inputBackground !== null && props.$inputBackground !== undefined && props.$inputBackground !== "" ? props.$inputBackground : "#FFFFFF")};
  border-radius: 4px;
  background-color: ${(props) => (props.$inputBackground !== null && props.$inputBackground !== undefined && props.$inputBackground !== "" ? props.$inputBackground : "#FFFFFF")};
  color: ${(props) => (props.$labelColor !== null && props.$labelColor !== undefined && props.$labelColor !== "" ? props.$labelColor : "#000000")};
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid ${(props) => (props.$borderInpCol !== null && props.$borderInpCol !== undefined && props.$borderInpCol !== "" ? props.$borderInpCol : "#ccc")};
    border-radius: 4px;
    outline: none;
    z-index: 1;
    background-color: ${(props) => (props.$inputBackground !== null && props.$inputBackground !== undefined && props.$inputBackground !== "" ? props.$inputBackground : "#FFFFFF")};

    &:focus {
      border: 1px solid ${(props) => (props.$focusBordCol !== null && props.$focusBordCol !== undefined && props.$focusBordCol !== "" ? props.$focusBordCol : "#CCFFFF")};
    }

    &::-webkit-calendar-picker-indicator {
      background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2218%22%20height%3D%2221%22%20viewBox%3D%220%200%2018%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.5%2016.5C10.8%2016.5%2010.2083%2016.2583%209.725%2015.775C9.24167%2015.2917%209%2014.7%209%2014C9%2013.3%209.24167%2012.7083%209.725%2012.225C10.2083%2011.7417%2010.8%2011.5%2011.5%2011.5C12.2%2011.5%2012.7917%2011.7417%2013.275%2012.225C13.7583%2012.7083%2014%2013.3%2014%2014C14%2014.7%2013.7583%2015.2917%2013.275%2015.775C12.7917%2016.2583%2012.2%2016.5%2011.5%2016.5ZM2%2020.5C1.45%2020.5%200.979167%2020.3042%200.5875%2019.9125C0.195833%2019.5208%200%2019.05%200%2018.5V4.5C0%203.95%200.195833%203.47917%200.5875%203.0875C0.979167%202.69583%201.45%202.5%202%202.5H3V0.5H5V2.5H13V0.5H15V2.5H16C16.55%202.5%2017.0208%202.69583%2017.4125%203.0875C17.8042%203.47917%2018%203.95%2018%204.5V18.5C18%2019.05%2017.8042%2019.5208%2017.4125%2019.9125C17.0208%2020.3042%2016.55%2020.5%2016%2020.5H2ZM2%2018.5H16V8.5H2V18.5ZM2%206.5H16V4.5H2V6.5Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E%0A");
      cursor: pointer;
    }
  }

  input:focus + ${FloatLabel}, input:not(:placeholder-shown) + ${FloatLabel} {
    top: 0%;
    left: 20%;
    transform: translate(-50%, -50%) scale(0.75);
    color: ${(props) => (props.$focuslabel !== null && props.$focuslabel !== undefined && props.$focuslabel !== "" ? props.$focuslabel : "#0047AB")}; /* Example active color */
    background-color: ${(props) => (props.$inputBackground !== null && props.$inputBackground !== undefined && props.$inputBackground !== "" ? props.$inputBackground : "#FFFFFF")};
  }
`;

//nneeds to transform based on height of element
export const WLDatePicker = ({ labelVariant, labelColor, borderColor, FocusBorderColor, FocusLabelColor, backgroundColor, height, width, min, max, inputTimeType, OnDataChange }: DateInputProps) => {
  const [inputType, setInputType] = useState("");
  const [value, setValue] = useState("");
  const [minAdjusted, setMinAdjusted] = useState("");
  const [maxAdjusted, setMaxAdjusted] = useState("");

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
    OnDataChange(new Date(dateString));
  };

  return (
    <FloatLabelContainer
      $height={height}
      $width={width}
      $labelColor={labelColor}
      $borderInpCol={borderColor}
      $focusBordCol={FocusBorderColor}
      $inputBackground={backgroundColor}
      $focuslabel={FocusLabelColor}
    >
      <input
        type={inputType}
        id="Wl_date_picker_input"
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
      <FloatLabel $height={height} $width={width} htmlFor="Wl_date_picker_input">
        {labelVariant}
      </FloatLabel>
    </FloatLabelContainer>
  );
};

WLDatePicker.displayName = "WLDatePicker";

export default WLDatePicker;
