import { ChangeEvent, useEffect, useRef, useState, KeyboardEvent } from "react";
import styled from "styled-components";

interface AutocompleteProps {
  data: string[]; //must somehow make this an array filled a requirement
  floatLabel: string;
  onDataChange?: (data: string) => void;
  height?: string;
  width?: string;
  inputBorderStyle?: string;
  inputFocusBorderColor?: string;
  autoBackGroundColor?: string;
  labelColor?: string;
  focusedLabelColor?: string;
  id?: string;
  name?: string;
}

const AutoContainer = styled.div<{ $inputWidth?: string; $inputHeight?: string }>`
  //position: relative;
  position: relative;
  width: ${(props) => props.$inputWidth || "320px"};
  height: ${(props) => props.$inputHeight || "51px"};
`;

const InputWrapper = styled.div<{ $inputWidth?: string; $inputHeight?: string }>`
  width: 100%;
  height: 100%;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.3s ease all;
  z-index: 2;
  padding: 0 5px;
  background-color: transparent;
`;

const Input = styled.input<{
  $primary?: string;
  $inputBorderStyling?: string;
  $focusBorderColor?: string;
  autoBackGroundColor?: string;
  $suggestBoolean: boolean;
  $dropDownVisible: boolean;
  $focusedLabelColor?: string;
  $defaultLabelColor?: string;
}>`
  width: 100%; //this must be 100%, as width inherit inherits the literal expression, not the value
  height: 100%;
  padding: 0.5rem 0.75rem;
  border: ${(props) => props.$inputBorderStyling || "2px solid #ccc"};
  border-radius: 4px;
  box-sizing: border-box;
  z-index: 1;
  background-color: ${(props) => (props.$primary !== null ? props.$primary : "#FFFFFF")};

  &:focus {
    border-color: ${(props) => {
      const { $focusBorderColor, $dropDownVisible, $suggestBoolean } = props;
      if (!$focusBorderColor) return "#4a90e2";
      if (!$dropDownVisible) return $focusBorderColor;
      if (!$suggestBoolean) return "#FF0000";
      return $focusBorderColor;
    }};
    outline: none;
    background-color: ${(props) => (props.$primary !== null ? props.$primary : "#FFFFFF")};
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    top: 0;
    left: 10px;

    padding: 0 5px;
    color: ${(props) => {
      const { $focusedLabelColor, $dropDownVisible, $suggestBoolean } = props;
      if (!$focusedLabelColor) return "#4a90e2";
      if (!$dropDownVisible) return $focusedLabelColor;
      if (!$suggestBoolean) return "#FF0000";
      return $focusedLabelColor;
    }};
    transform: translate(0%, -50%) scale(0.8);
    background: linear-gradient(to bottom, transparent 50%, ${(props) => (props.$primary ? props.$primary : "#FFFFFF")} 0%);
  }

  &:not(:focus) + ${Label} {
    color: ${(props) => props.$defaultLabelColor || "#ccc"};
  }
`;

const DropDownList = styled.ul<{ $inputWidth?: string }>`
  position: absolute;
  z-index: 5;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  margin-top: 0px;
  color: black;
  list-style: none;
  padding: 0;
  border-radius: 8px;
  overflow: scroll; //necessary for limiting scroll options
  max-height: 390px; //necessary for limiting scroll options, limit to 10 per view
`;

const ActiveListItem = styled.li<{ $highlighted: boolean }>`
  position: relative;
  width: 100%;
  z-index: 9999;
  padding: 10px;
  border-radius: 8px;
  background-color: ${(props) => (props.$highlighted ? "#eee" : "white")};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #d8d8d8;
  }
`;

const NoHoverListItem = styled.li`
  position: relative;
  z-index: 9999;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  color: #d8d8d8;
  border-radius: 8px;

  &:hover {
    background-color: white;
  }

  &:active {
    background-color: white;
  }
`;

export const WavelengthAutoComplete = ({
  floatLabel,
  data,
  height,
  width,
  inputBorderStyle,
  inputFocusBorderColor,
  onDataChange,
  autoBackGroundColor,
  labelColor,
  focusedLabelColor,
  id,
  name,
}: AutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null); //html input ref
  const listRef = useRef<HTMLUListElement>(null); //html list ref for data
  const noItemListRef = useRef<HTMLLIElement>(null); //for no item

  const [inputValue, setInputValue] = useState(""); //for handling event changes
  const [suggestions, setSuggestions] = useState<string[]>([]); // for storing data array object suggestions
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const suggestHasItems: boolean = suggestions.length > 0; //for suggestions
  const arrayLength: number = suggestions.length;

  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const idName = id ? id : "auto-comp";

  useEffect(() => {
    const handleClickOutsideList = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideList);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideList);
    };
  }, [focusedIndex]);

  const handleBlur = () => {
    const exactMatch = data.find((item) => item === inputValue);
    if (inputRef.current && inputValue === "") {
      inputRef.current.blur();
    } else if (inputRef.current && exactMatch === undefined) {
      inputRef.current.blur();
      setInputValue("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filtered = data.filter((option) => option.toLowerCase().includes(value.toLowerCase()));
      if (filtered.length > 0) {
        setSuggestions(filtered);
        setIsDropdownVisible(true);
      } else {
        setSuggestions([]);
        setIsDropdownVisible(true);
      }
    } else {
      setIsDropdownVisible(false);
    }
  };

  const handleInputClick = () => {
    setSuggestions(data);
    setIsDropdownVisible(true);
  };

  const handleListClick = (suggestValue: string) => {
    setInputValue(suggestValue);
    setIsDropdownVisible(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const testMove = focusedIndex + 1;
    switch (event.key) {
      case "Enter":
        if (isDropdownVisible) {
          setInputValue(suggestions[focusedIndex]);
          setIsDropdownVisible(false);
        } else {
          if (data.includes(inputValue)) {
            //if there is an input that matches the data suggestions
            if (onDataChange !== undefined) onDataChange(inputValue);
          } else {
            handleBlur;
          }
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        if (listRef.current && focusedIndex < arrayLength - 9) {
          listRef.current.scrollTop -= 40;
        }
        break;
      case "ArrowDown":
        event.preventDefault();
        setFocusedIndex((prevIndex) => Math.min(prevIndex + 1, suggestions.length - 1));
        if (listRef.current && testMove > 9) {
          listRef.current.scrollTop += 40;
        }
        break;
    }
  };

  return (
    <>
      <AutoContainer $inputHeight={height} $inputWidth={width}>
        <InputWrapper id={`${idName}-input-wrapper`} $inputHeight={height} $inputWidth={width}>
          <Input
            id={idName}
            name={name}
            data-testid="InputSearchBar"
            type="text"
            $primary={autoBackGroundColor}
            $inputBorderStyling={inputBorderStyle}
            $focusBorderColor={inputFocusBorderColor}
            $suggestBoolean={suggestHasItems}
            $dropDownVisible={isDropdownVisible}
            $focusedLabelColor={focusedLabelColor}
            $defaultLabelColor={labelColor}
            value={inputValue}
            ref={inputRef}
            onClick={handleInputClick}
            onInput={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            placeholder=""
            autoComplete="off"
          />
          <Label id={`${idName}-label`} htmlFor={idName}>
            {floatLabel}
          </Label>
        </InputWrapper>
        {isDropdownVisible && (
          <DropDownList id={`${idName}-drop-list`} ref={listRef} $inputWidth={width} data-testid="InputSearchOptionsList">
            {suggestHasItems ? ( //suggestions length controls showing the suggestions
              suggestions.map((item, index) => (
                <ActiveListItem
                  data-testid={`${idName}-input-search-list-${index + 1}`}
                  id={`${idName}-active-list-item-${index + 1}`}
                  key={`active-list-item-${item}-${index}`}
                  $highlighted={index === focusedIndex ? true : false}
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseOver={() => setFocusedIndex(index)}
                  onClick={() => handleListClick(item)}
                >
                  {item}
                </ActiveListItem>
              ))
            ) : (
              <NoHoverListItem data-testid="NoOptionsListitem" ref={noItemListRef} id="No-Option-List-item" onMouseDown={(e) => e.preventDefault()}>
                No Options found
              </NoHoverListItem>
            )}
          </DropDownList>
        )}
      </AutoContainer>
    </>
  );
};

WavelengthAutoComplete.displayName = "WavelengthAutoComplete";

export default WavelengthAutoComplete;
