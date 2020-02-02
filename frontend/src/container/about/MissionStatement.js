import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));


export default function MissionStatement(props){
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
          <Container maxWidth="sm" >
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            "Do not follow where the path may lead. Go instead where there is no path and leave a trail."
            </Typography>
            <Typography variant="h6" color="textSecondary" paragraph style={{fontWeight:"bold"}}>
                - Ralph Waldo Emerson
            </Typography>
          </Container>
        </div>
    )
}