import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';
import Text from './Text';

function CustomCard({ data }) {
  const NotVoteids = [];
  data.randomText.forEach((item,index) => {
    if (item.yesNo === "-") {
      NotVoteids.push(item.Proposalid);
    }
  });
  
  return (
    <Card variant="outlined" style={{ width: "550px", margin: '8px', borderRadius:"15px" , padding:"0px" }}>
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
        <Box mt={2}>
          {data.randomText.map((item, index) => (
            item.yesNo==="-"?null:<Text key={index} item={item} />
          ))}
        </Box>
        <Grid>
        {NotVoteids.length > 0 ? (
            <p>{NotVoteids.join(',')} is/are not voted</p>
          ) : (
            <p>All proposals have been voted</p>
          )}
      
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
