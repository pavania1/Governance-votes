import { Box, Typography, Avatar, Grid } from '@mui/material';
import logo from '../assessts/7m8p1eY__400x400.jpg'




function TopSection({ startDate, endDate }) {
  const formattedStartDate = startDate ? startDate.toLocaleString() : '';
  const formattedEndDate = endDate ? endDate.toLocaleString() : '';

  return (
    <div>
      <Box
        style={{
          width: '100%',
          margin: "10px auto 20px auto",
          background: "transparent",
          border: "2px solid blank",
        }}
      >
        <Grid container alignItems="center" justifyContent="center" spacing={2} >
          <Grid item style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Avatar alt="LOGO" src={logo} style={{ width: "80px", height: "80px", padding: '0', margin: '0' }} />
          </Grid>
          <Grid item>
            <Typography variant="h4">|</Typography>
          </Grid>
          <Grid item>
            <Typography style={{ fontSize: "2.5rem", fontFamily: "Arial, sans-serif", fontWeight: 'bold' }}>Witval Governance Report</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">|</Typography>
          </Grid>
          <Grid item>
            <Typography style={{ fontSize: "2.5rem", fontFamily: "Arial, sans-serif", fontWeight: 'bold' }}>
              {formattedStartDate}-{formattedEndDate}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}




export default TopSection;