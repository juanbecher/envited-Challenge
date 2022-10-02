import * as React from 'react';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function BasicDateTimePicker({name,labelText, setValues}) {
  const [value, setValue] = useState(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        name={name}
        label={labelText}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          console.log(newValue.$d.toLocaleString())
          setValues((values) => {return(
            {...values, [name]: newValue.$d.toLocaleString()}
          )})
        }}
      />
    </LocalizationProvider>
  );
}