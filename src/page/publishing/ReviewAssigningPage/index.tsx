import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';


const ReviewAssigningPage = () => {
  const [value, setValue] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      label="Basic example"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
    </LocalizationProvider>    
  )
}

export default ReviewAssigningPage;