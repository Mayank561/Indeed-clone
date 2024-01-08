import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Dropdown = ({ label, id, value, handleChange, name, options, multiple, ...props }) => {
  // Ensure that value is an array when using multiple
  const adjustedValue = multiple ? (value || []) : value;

  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={adjustedValue}
        label={label}
        onChange={(e) => handleChange(name, e.target.value)}
        name={name}
        multiple={multiple}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
