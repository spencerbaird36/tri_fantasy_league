import React from 'react';
import TextField from 'material-ui/TextField';

const InputTextField = ({
  input,
  label,
  meta: {touched, error},
  ...custom
}) => {
  return (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )
}

export default InputTextField
