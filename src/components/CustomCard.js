import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';
import Text from './Text';
import NotVoted from './NotVoted';

function CustomCard({ data }) {
  
  return (
    <Card variant="outlined" style={{ width: "800px", margin: '8px', borderRadius:"15px" , padding:"0px" }}>
      <CardContent>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={2} >
            <Avatar alt={data.title} src={data.logoSrc} />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6" component="div" style={{fontSize:"2rem", fontFamily: "Arial, sans-serif", fontWeight:'bold'}}>
              {data.title}
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          {data.randomText.map((item, index) => (
            
            item.yesNo==="-"?null:<Text key={index} item={item} />
          ))}
        </Box>
        <Grid>
          <NotVoted data = {data}/>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
