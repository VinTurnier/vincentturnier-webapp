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
    width: 350,
    height: 350,
    // justifyContent: 'center',
    // alignContent: 'center',
  },
});

export default function AboutMeCard(props) {
  const classes = useStyles();
  const { post } = props;
    return (
        <Grid item xs={12} md={12}>
        <Card className={classes.card} elevation={2}>
        <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
      
          </Hidden>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              {post.description}
            </CardContent>
          </div>
          
        </Card>
    </Grid>
    );
};