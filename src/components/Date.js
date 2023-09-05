import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';

import { Container, Grid, Typography } from '@mui/material';


const DateSelector = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <Container>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Button variant="contained" color="primary"
          style = {{
            position: 'absolute', top:'2%', left: '90%', transform: 'translate(-50%, -50%)'
          }}>
            Save
          </Button>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
            label="Start Date"
            value={startDate}
            onChange={handleStartDateChange}
            renderInput={(params) => <input {...params.inputProps} />}
            
            />
          </LocalizationProvider>
        </Grid>
       
        <Grid item xs={12} md={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={handleEndDateChange}
            renderInput={(params) => <input {...params.inputProps} />}
            
          />

        </LocalizationProvider> 
        </Grid>
      </Grid>
    </Container>
  );
};

export default DateSelector;
