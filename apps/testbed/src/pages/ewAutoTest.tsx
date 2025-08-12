import { ChangeEvent, useEffect, useRef, useState, KeyboardEvent } from "react";
import styled from "styled-components";

interface AutocompleteProps {
  data: string[]; //must somehow make this an array filled a requirement
  floatLabel: string;
  onDataChange: (data: string) => void;
  height?: string;
  width?: string;
  inputBorderStyle?: string;
  inputFocusBorderColor?: string;
  autoBackGroundColor?: string;
  labelColor?: string;
  FocusedlabelColor?: string;
  id?: string;
  name?: string;
}

const OuterContainer = styled.div<{ $primary?: string; $inputwidth?: string; $inputheight?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const AutoContainer = styled.div<{ $primary?: string }>`
  position: absolute;
  border-radius: 6px;
`;

const InputWrapper = styled.div<{ $inputwidth?: string; $inputheight?: string }>`
  position: relative;
  width: ${(props) => props.$inputwidth || "320px"};
  height: ${(props) => props.$inputheight || "51px"};
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
  width: inherit;
  height: inherit;
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
    background: linear-gradient(to bottom, transparent 50%, white 0%);
  }

  &:not(:focus) + ${Label} {
    color: ${(props) => props.$defaultLabelColor || "#ccc"};
  }
`;

const DropDownList = styled.ul<{ $inputwidth?: string }>`
  position: absolute;
  width: ${(props) => props.$inputwidth || "320px"};
  background-color: white;
  border: 1px solid #ccc;
  margin-top: 0px;
  color: black;
  list-style: none;
  padding: 0;
  border-radius: 8px;
  overflow: scroll; //neccesary for limiting scroll options
  max-height: 390px; //neccesary for limiting scroll options, limit to 10 per view
`;

const ActiveListItem = styled.li<{ $highlighted: boolean }>`
  position: relative;
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

export const WLAutoCompleteTest = ({
  floatLabel,
  data,
  height,
  width,
  inputBorderStyle,
  inputFocusBorderColor,
  onDataChange,
  autoBackGroundColor,
  labelColor,
  FocusedlabelColor,
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

  const idName = id ? id : "WlAutoComp";

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
            onDataChange(inputValue);
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
      <OuterContainer id={`${idName}-outercontain`} $primary={autoBackGroundColor} $inputheight={height} $inputwidth={width}>
        <AutoContainer id={`${idName}-autocontain`} $primary={autoBackGroundColor}>
          <InputWrapper id={`${idName}-inputwrapper`} $inputheight={height} $inputwidth={width}>
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
              $focusedLabelColor={FocusedlabelColor}
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
            <DropDownList id={`${idName}-droplist`} ref={listRef} $inputwidth={width} data-testid="InputSearchOptionsList">
              {suggestHasItems ? ( //suggestions length controls showing the suggestions
                suggestions.map((item, index) => (
                  <ActiveListItem
                    data-testid={`${idName}-inputSearchList-${index + 1}`}
                    id={`${idName}-activelistemitem-${index + 1}`}
                    key={`ActivelistItem-${item}-${index}`}
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
      </OuterContainer>
    </>
  );
};

//export default WLAutoCompleteTest;

function PageAutoTest() {
  const data: string[] = [
    "leo and his hideout",
    "donald",
    "rian",
    "ceoryan",
    "adrian",
    "bat",
    "bruce",
    "wayne",
    "super",
    "Mr.terrifc",
    "noah and the whale",
    "sun",
    "moon",
    "angel",
    "time",
    "apples",
    "kale",
    "Dale",
    "mission",
    "cristian",
    "zebra",
    "taco",
    "noah",
    "whale",
    "lex",
    "lois",
    "nishant",
  ];

  const handleDataFromChild = (data: string) => {
    alert(data);
  };

  function validateForm(event) {
    event.preventDefault();
    //get value by name
    // const formData = new FormData(event.target);
    // const name = formData.get('name');
    // console.log('name: ', name);

    //get value by id
    // const formData = document.getElementById('name') as HTMLInputElement;
    // const inputValue = formData.value;
    // console.log('formData: ', inputValue);
  }

  return (
    <div>
      {/* <p>test : {selectedDate?.toISOString()}</p> */}
      <form onSubmit={validateForm}>
        <WLAutoCompleteTest
          data={data}
          onDataChange={handleDataFromChild}
          floatLabel="name"
          height="51px"
          width="350px"
          inputBorderStyle="2px solid #ccc"
          inputFocusBorderColor="#4a90e2"
          labelColor="#ccc"
          autoBackGroundColor="#FFFFFF"
          FocusedlabelColor="#4a90e2"
          id="name"
          name="name"
        />
        <br />
        <h1>this is a test</h1>
        <br />
        <WLAutoCompleteTest
          data={data}
          onDataChange={handleDataFromChild}
          floatLabel="name"
          height="51px"
          width="350px"
          inputBorderStyle="2px solid #ccc"
          inputFocusBorderColor="#4a90e2"
          labelColor="#ccc"
          autoBackGroundColor="#FFFFFF"
          FocusedlabelColor="#4a90e2"
          id="name"
          name="name"
        />
        <br />
        <h1>this is a test</h1>
        <br />
        <WLAutoCompleteTest
          data={data}
          onDataChange={handleDataFromChild}
          floatLabel="name"
          height="51px"
          width="350px"
          inputBorderStyle="2px solid #ccc"
          inputFocusBorderColor="#4a90e2"
          labelColor="#ccc"
          autoBackGroundColor="#FFFFFF"
          FocusedlabelColor="#4a90e2"
          id="name"
          name="name"
        />
        <br />
        <h1>this is a test</h1>
        <br />
        <button type="submit">Test</button>
      </form>
      <br />
      <br />
    </div>
  );
}

export default PageAutoTest;

// data: data,
//     onDataChange: handleDataFromChild,
//     floatLabel: "name",
//     height: "51px",
//     width: "350px",
//     inputBorderStyle: "2px solid #ccc",
//     inputFocusBorderColor: "#4a90e2",
//     labelColor: "#ccc",
//     autoBackGroundColor: "#FFFFFF",
//     FocusedlabelColor: "#4a90e2",
//     id: "name",

//creating cut-out or partial borders
//use clip path or linear-griadent or psuedo-elements ::before, ::after
// border: 2px solid black;
//   clip-path: polygon(
//     10px 0, 100% 0, 100% calc(100% - 10px),
//     calc(100% - 10px) 100%, 0 100%, 0 10px
//   );

//https://academind.com/tutorials/avoid-usestate
//https://hollybourneville.medium.com/creating-border-lines-using-pseudo-elements-in-css-a460396299e8
