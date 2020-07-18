import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia';

const CoffeeCard = (props) => {
  const { avatarUrl, title, subtitle, description, imageUrl } = props;
  return (
    <div>
      <Card>
        <CardHeader
          avatar={<Avatar src={avatarUrl}>R</Avatar>}
          action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
          }
          title={title}
          subheader={subtitle}
        />
        <CardMedia
          style={{ height: '160px' }}
          image={imageUrl}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Buy Now</Button>
          <Button size="small">Offer</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CoffeeCard;
