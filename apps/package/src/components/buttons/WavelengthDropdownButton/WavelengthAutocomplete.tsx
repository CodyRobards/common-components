import { Autocomplete, TextField, TextFieldVariants } from "@mui/material";
import { useState } from "react";

interface WavelengthAutocompleteProps {
  id?: string;
  label: string;
  items?: any;
  variant?: TextFieldVariants;
  width?: number;
  borderColor?: string;
  hoverColor?: string;
  textColor?: string;
  onChange?: (selectedValue: string) => void;
}
/**
 * Returns the Best Matching String from a List; Defaults to the first item if no good match is found
 * @param searchString - the string we want to look for
 * @param choices - the list of strings we get to choose from (must be greater than 0)
 * @returns - a string with the "best" match, or "" if no match is found
 */
export function findBestStringMatch(searchString: string, choices: string[]): string {
  for (const item of choices) {
    if (item.toUpperCase() === searchString.toUpperCase()) {
      return item;
    } else if (item.toUpperCase().includes(searchString.toUpperCase())) {
      return item;
    }
  }

  // Default:  Return the first item in the list
  if (choices.length > 0) {
    return choices[0];
  }
  // Returns "" if no good match is found
  return "";
}
export function WavelengthAutocomplete({ label, width = 300, variant = "outlined", items = [], onChange, borderColor, textColor, hoverColor, id }: WavelengthAutocompleteProps) {
  const defaultItem = items.length > 0 ? items.sort()[0] : "";
  const [selectedValue, setSelectedValue] = useState(defaultItem);
  borderColor = borderColor ? borderColor : "#FFFFFF";
  hoverColor = hoverColor ? hoverColor : "blue";
  textColor = textColor ? textColor : "#FFFFFF";
  return (
    <>
      <Autocomplete
        id={id}
        sx={{
          width: { width },
          "& .MuiAutocomplete-popupIndicator": { color: borderColor },
          "& .MuiAutocomplete-clearIndicator": { color: borderColor },
        }}
        value={selectedValue}
        options={items.sort()}
        autoComplete={true}
        openOnFocus
        onChange={(event, value) => {
          if (value) {
            const bestMatch = findBestStringMatch(value, items);
            setSelectedValue(bestMatch);
            if (onChange) {
              onChange(bestMatch);
            }
          }
        }}
        onClose={(event: any, reason: string) => {
          if (reason === "blur") {
            const bestMatch = findBestStringMatch(event.target.value, items);
            setSelectedValue(bestMatch);
            if (onChange) {
              onChange(bestMatch);
            }
          }
        }}
        renderInput={(params) => (
          <TextField
            variant={variant}
            label={label}
            {...params}
            sx={{
              "&.MuiTextField-root": {
                "& label": { color: `${textColor}` },
                "& label.Mui-focused": {
                  color: `${hoverColor}`,
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: `${borderColor}`,
                  },
                  "&:hover fieldset": {
                    borderColor: `${hoverColor}`,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: `${hoverColor}`,
                  },
                },
              },
            }}
            InputProps={{ ...params.InputProps, style: { color: textColor } }}
          />
        )}
      />
    </>
  );
}

export default WavelengthAutocomplete;
