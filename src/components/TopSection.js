import { Box, Typography, Avatar, Grid } from '@mui/material';
import logo from '../assessts/g3z57SXv_400x400.jpg'
function TopSection() {
  return (
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
          <Avatar alt="LOGO" src={logo} style={{ width: "100px", height: "100px", padding: '0', margin: '0' }} />
        </Grid>
        <Grid item>
          <Typography variant="h4">|</Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "2rem", fontFamily: "Arial, sans-serif", fontWeight: 'bold' }}>Weekly Governance Votes</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">|</Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "2rem", fontFamily: "Arial, sans-serif" , fontWeight: 'bold'}}>14-20/June</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}




export default TopSection;