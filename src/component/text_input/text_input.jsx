import { Autocomplete, TextField, Typography } from "@mui/material";
import { useState } from "react";

import { style } from "../../styles";

export const TextInput = (props) => {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [optionValue, setOptionValue] = useState();
  const [focusCounter, setFocusCounter] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "430px",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={props.className}
    >
      {props.title && (
        <Typography
          variant="h6"
          align="right"
          noWrap
          className={props.titleClassName ?? "text-teal-600"}
          sx={{ fontFamily: "Cairo", fontSize: 17 }}
        >
          {props.title}
        </Typography>
      )}

      {props.list ? (
        <Autocomplete
          size="small"
          disablePortal
          aria-required={props.required ?? false}
          id="combo-box-demo"
          options={props.list}
          getOptionLabel={(option) => option.name || option.label || option}
          renderInput={(params) => <TextField {...params} />}
          value={props.value}
          style={style}
          onInputChange={(event, value) => {
            props.setValueOnChange(value);
          }}
        />
      ) : (
        <TextField
          size="small"
          InputProps={{
            inputProps: props.inputProps ?? { min: 0 },
            autoComplete: "disabled",
          }}
          id="outlined-select-user"
          select={props.list ? true : false}
          style={style}
          required={props.required ? props.required : false}
          {...props.registeration}
          dir="rtl"
          placeholder={props.placeholder ? props.placeholder : ""}
          onFocus={() => setFocusCounter(1)}
          type={props.type ? props.type : "string"}
          value={props.value}
          onChange={(event) => {
            setTextFieldValue(event.target.value);
            if (props.setValueOnChange)
              props.setValueOnChange(event.target.value);
          }}
          onChangeCapture={props.onChangeCapture}
          onKeyDown={
            props.reset
              ? (event) => {
                  if (event.key === "Enter") {
                    props.reset
                      ? props.reset()
                      : console.log("reset not worked");
                  }
                }
              : undefined
          }
          error={textFieldValue === "" && focusCounter === 1 && props.required}
          helperText={
            textFieldValue === "" && focusCounter === 1
              ? props.errorMessage
                ? props.errorMessage
                : props.required
                ? "برجاء إدخال هذا الحقل"
                : ""
              : ""
          }
          fullWidth
          disabled={props.disabled ? props.disabled : false}
        ></TextField>
      )}
    </div>
  );
};

// TODO handle dynamic properity name
