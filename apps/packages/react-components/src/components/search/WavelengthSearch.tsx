import React from "react";
import { ReactNode } from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import { getPalette } from "../../themes/Palette";
import { useRef } from "react";

import ListItem from "@mui/material/ListItem";
import Popper from "@mui/material/Popper";
import Autocomplete from "@mui/material/Autocomplete";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";

export interface SearchResult {
  id: number | string;
  title: string;
  subtitle?: string;
}

export interface SearchProps {
  id?: string;
  mode: "automatic" | "manual";
  type?: "text-box" | "search-bar";
  iconPos?: "start" | "end";
  clearIconMarginRight?: string;
  borderRadius?: number | string;
  label?: string;
  width?: string;
  height?: string | number;
  children?: ReactNode;
  borderColor?: string;
  hoverColor?: string;
  textColor?: string;
  backgroundColor?: string;
  placeholder?: string;
  onEnter?: (arg0?: any) => any;
  size?: "small" | "medium";
  fontSize?: string;
  options: SearchResult[];
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSearchItemSelected?: (selectedItem: SearchResult | string) => void;
}

const CustomPopper = (props: any) => {
  return (
    <Popper
      sx={{
        "&.MuiAutocomplete-popper": {
          zIndex: 5,
        },
      }}
      {...props}
      placement="bottom"
      disablePortal={true}
      modifiers={[
        {
          name: "flip",
          enabled: true,
          options: {
            altBoundary: true,
            rootBoundary: "document",
            padding: 8,
          },
        },
        {
          name: "preventOverflow",
          enabled: true,
          options: {
            altAxis: false,
            altBoundary: true,
            tether: true,
            rootBoundary: "document",
            padding: 8,
          },
        },
      ]}
    />
  );
};

const AutocompleteCustomEndAdornment = styled("div")({
  position: "absolute",
  right: "12px",
  top: "50%",
  transform: "translate(0, -50%)",
});

export function WavelengthSearch({
  id,
  mode,
  type,
  width,
  height,
  label,
  size,
  borderRadius,
  children,
  placeholder,
  onEnter,
  onSearchItemSelected,
  options,
  onChange,
  borderColor,
  hoverColor,
  textColor,
  fontSize,
  backgroundColor,
  iconPos = "end",
  clearIconMarginRight,
}: SearchProps) {
  const palette = getPalette();

  borderColor = borderColor ? borderColor : "#2D3140";
  hoverColor = hoverColor ? hoverColor : palette.primary;

  if (type === "search-bar" || type === undefined) {
    if (mode === "automatic" && iconPos === "end") {
      return (
        <>
          <Autocomplete
            id={id}
            filterOptions={(x) => x}
            loading={true}
            disableListWrap={true}
            freeSolo
            onChange={(e, value) => {
              if (value !== null) {
                if (typeof value !== "string") {
                  if (onSearchItemSelected) onSearchItemSelected(value);
                }
              }
            }}
            disableCloseOnSelect={false}
            getOptionLabel={(options) => {
              const returnVal = typeof options === "string" ? options : options.title;
              return returnVal;
            }}
            options={options}
            sx={{
              width: width,
              "&.MuiAutocomplete-hasClearIcon .MuiOutlinedInput-root": {
                paddingRight: clearIconMarginRight ? clearIconMarginRight : "45px",
              },
            }}
            renderOption={(props, options) => (
              <ListItem {...props} key={options.id as string}>
                <ListItemText primary={options.title} secondary={options.subtitle} />
              </ListItem>
            )}
            renderInput={(params) => (
              <TextField
                placeholder={placeholder}
                {...params}
                size={size}
                InputProps={{
                  ...params.InputProps,
                  style: { borderRadius: borderRadius, color: textColor, backgroundColor: backgroundColor, height: height, fontSize: fontSize },
                  type: "search",

                  endAdornment: (
                    <AutocompleteCustomEndAdornment>
                      <IconButton sx={{ color: "white" }}>{children}</IconButton>
                    </AutocompleteCustomEndAdornment>
                  ),
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: height,
                  },
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
                label={label}
                onChange={onChange}
              />
            )}
            PopperComponent={CustomPopper}
          />
        </>
      );
    } else if (mode === "automatic" && iconPos === "start") {
      return (
        <>
          <Autocomplete
            id={id}
            filterOptions={(x) => x}
            loading={true}
            disableListWrap={true}
            freeSolo
            onChange={(e, value) => {
              if (value !== null) {
                if (typeof value !== "string") {
                  if (onSearchItemSelected) onSearchItemSelected(value);
                }
              }
            }}
            disableCloseOnSelect={false}
            getOptionLabel={(options) => {
              const returnVal = typeof options === "string" ? options : options.title;
              return returnVal;
            }}
            options={options}
            sx={{
              width: width,
              "&.MuiAutocomplete-hasClearIcon .MuiOutlinedInput-root": {
                paddingRight: clearIconMarginRight ? clearIconMarginRight : "15px",
              },
            }}
            renderOption={(props, results) => (
              <ListItem {...props} key={results.id as string}>
                <ListItemText primary={results.title} secondary={results.subtitle} />
              </ListItem>
            )}
            renderInput={(params) => (
              <TextField
                placeholder={placeholder}
                {...params}
                size={size}
                InputProps={{
                  ...params.InputProps,
                  style: { borderRadius: borderRadius, color: textColor, backgroundColor: backgroundColor, height: height, fontSize: fontSize },
                  type: "search",
                  endAdornment: null,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon sx={{ color: textColor, paddingRight: "0px" }}>{children}</Icon>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: height,
                  },
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
                label={label}
                onChange={onChange}
              />
            )}
            PopperComponent={CustomPopper}
          />
        </>
      );
    } else if (mode === "manual" && iconPos === "end") {
      const textRef = useRef<HTMLInputElement>();
      return (
        <>
          <Autocomplete
            id={id}
            filterOptions={(x) => x}
            loading={true}
            freeSolo
            onChange={(e, value) => {
              if (value !== null) {
                if (typeof value !== "string") {
                  if (onSearchItemSelected) onSearchItemSelected(value);
                }
              }
            }}
            disableCloseOnSelect={false}
            //value={text1}
            getOptionLabel={(options) => {
              const returnVal = typeof options === "string" ? options : options.title;
              return returnVal;
            }}
            options={options}
            sx={{
              width: width,
              "&.MuiAutocomplete-hasClearIcon .MuiOutlinedInput-root": {
                paddingRight: clearIconMarginRight ? clearIconMarginRight : "50px",
              },
            }}
            renderOption={(props, options) => (
              <ListItem {...props} key={options.id as string}>
                <ListItemText primary={options.title} secondary={options.subtitle} />
              </ListItem>
            )}
            renderInput={(params) => (
              <TextField
                inputRef={textRef}
                placeholder={placeholder}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (textRef.current && onEnter) {
                      onEnter(textRef.current.value);
                    }
                  }
                }}
                {...params}
                size={size}
                InputProps={{
                  ...params.InputProps,
                  style: { borderRadius: borderRadius, color: textColor, fontSize: fontSize },
                  type: "search",
                  endAdornment: (
                    <AutocompleteCustomEndAdornment>
                      <IconButton
                        sx={{ color: textColor }}
                        onClick={() => {
                          if (textRef.current && onEnter) {
                            onEnter(textRef.current.value);
                          }
                        }}
                      >
                        {children}
                      </IconButton>
                    </AutocompleteCustomEndAdornment>
                  ),
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: height,
                  },
                  "&.MuiTextField-root": {
                    "& label": { color: `${textColor}`, verticalAlign: "bottom" },
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
                label={label}
              />
            )}
          />
        </>
      );
    } else if (mode === "manual" && iconPos === "start") {
      const textRef = useRef<HTMLInputElement>();
      return (
        <>
          <Autocomplete
            id={id}
            filterOptions={(x) => x}
            loading={true}
            freeSolo
            onChange={(e, value) => {
              if (value !== null) {
                if (typeof value !== "string") {
                  if (onSearchItemSelected) onSearchItemSelected(value);
                }
              }
            }}
            disableCloseOnSelect={false}
            //value={text1}
            getOptionLabel={(options) => {
              const returnVal = typeof options === "string" ? options : options.title;
              return returnVal;
            }}
            options={options}
            sx={{
              width: width,
              "&.MuiAutocomplete-hasClearIcon .MuiOutlinedInput-root": {
                paddingRight: clearIconMarginRight ? clearIconMarginRight : "15px",
              },
            }}
            renderOption={(props, options) => (
              <ListItem {...props} key={options.id as string}>
                <ListItemText primary={options.title} secondary={options.subtitle} />
              </ListItem>
            )}
            renderInput={(params) => (
              <TextField
                inputRef={textRef}
                placeholder={placeholder}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (textRef.current && onEnter) {
                      onEnter(textRef.current.value);
                    }
                  }
                }}
                {...params}
                size={size}
                InputProps={{
                  ...params.InputProps,
                  style: { borderRadius: borderRadius, color: textColor, fontSize: fontSize },
                  type: "search",
                  endAdornment: null,
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        sx={{ color: textColor, paddingRight: "0px" }}
                        onClick={() => {
                          if (textRef.current && onEnter) {
                            onEnter(textRef.current.value);
                          }
                        }}
                      >
                        {children}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: height,
                  },
                  "&.MuiTextField-root": {
                    "& label": { color: `${textColor}`, verticalAlign: "bottom" },
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
                label={label}
              />
            )}
          />
        </>
      );
    }
  } else if (type === "text-box") {
    if (mode === "automatic") {
      return (
        <>
          <Autocomplete
            id={id}
            filterOptions={(x) => x}
            loading={true}
            disableListWrap={true}
            freeSolo
            disableClearable
            onChange={(e, value) => {
              if (value !== null) {
                if (typeof value !== "string") {
                  if (onSearchItemSelected) onSearchItemSelected(value);
                }
              }
            }}
            disableCloseOnSelect={false}
            getOptionLabel={(options) => {
              const returnVal = typeof options === "string" ? options : options.title;
              return returnVal;
            }}
            options={options}
            sx={{
              width: width,
              "&.MuiAutocomplete-hasClearIcon .MuiOutlinedInput-root": {
                paddingRight: clearIconMarginRight ? clearIconMarginRight : "15px",
              },
            }}
            renderOption={(props, results) => (
              <ListItem {...props} key={results.id as string}>
                <ListItemText primary={results.title} secondary={results.subtitle} />
              </ListItem>
            )}
            renderInput={(params) => (
              <TextField
                placeholder={placeholder}
                {...params}
                size={size}
                InputProps={{
                  ...params.InputProps,
                  style: { borderRadius: borderRadius, color: textColor, backgroundColor: backgroundColor, height: height, fontSize: fontSize },
                  type: "search",
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: height,
                  },
                  "& .MuiAutocomplete-endAdornment": {
                    display: "none",
                  },
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
                label={label}
                onChange={onChange}
              />
            )}
            PopperComponent={CustomPopper}
          />
        </>
      );
    } else if (mode === "manual") {
      const textRef = useRef<HTMLInputElement>();

      return (
        <>
          <Autocomplete
            id={id}
            filterOptions={(x) => x}
            loading={true}
            freeSolo
            onChange={(e, value) => {
              if (value !== null) {
                if (typeof value !== "string") {
                  if (onSearchItemSelected) onSearchItemSelected(value);
                }
              }
            }}
            disableCloseOnSelect={false}
            //value={text1}
            getOptionLabel={(options) => {
              const returnVal = typeof options === "string" ? options : options.title;
              return returnVal;
            }}
            options={options}
            sx={{
              width: width,
              "&.MuiAutocomplete-hasClearIcon .MuiOutlinedInput-root": {
                paddingRight: clearIconMarginRight ? clearIconMarginRight : "15px",
              },
            }}
            renderOption={(props, options) => (
              <ListItem {...props} key={options.id as string}>
                <ListItemText primary={options.title} secondary={options.subtitle} />
              </ListItem>
            )}
            renderInput={(params) => (
              <TextField
                placeholder={placeholder}
                inputRef={textRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (textRef.current && onEnter) {
                      onEnter(textRef.current.value);
                    }
                  }
                }}
                {...params}
                size={size}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: null,
                  style: { borderRadius: borderRadius, color: textColor, fontSize: fontSize },
                  type: "search",
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: height,
                  },
                  "&.MuiTextField-root": {
                    "& label": { color: `${textColor}`, verticalAlign: "bottom" },
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
                label={label}
              />
            )}
          />
        </>
      );
    }
  }

  return undefined;
}

WavelengthSearch.displayName = "WavelengthSearch";

export default WavelengthSearch;
