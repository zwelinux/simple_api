import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

const ActionAreaCard = ({title, link, content, date_posted, author}) => {
  return (
    <>
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
          <br />
          <Button variant="contained" href={link} size='small'>Go To Link</Button>
          <br /><br /> 
          by {author} on {date_posted}
        </CardContent>
      </CardActionArea>
    </Card>
    <br />
    </>
  );
}

export default ActionAreaCard
