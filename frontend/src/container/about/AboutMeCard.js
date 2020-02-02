import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    margin: '20px',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 175,
    // height: 175,
    // justifyContent: 'center',
    // alignContent: 'center',
  },
});

export default function AboutMeCard(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={12}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              {post.description}
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
            {/* <img src={post.image} width={'250px'} height='62.5px' style={{padding:'10px'}} /> */}
          </Hidden>
        </Card>
    </Grid>
  );
}

AboutMeCard.propTypes = {
  post: PropTypes.object,
};