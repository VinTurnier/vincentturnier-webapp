import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 6),
    }
  }));


export default function MissionStatement(props){
    const classes = useStyles();
    const {text, author} = props
    return (
        <div className={classes.heroContent}>
          <Container maxWidth="sm" >
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {text}
            </Typography>
            <Typography variant="h6" color="textSecondary" paragraph style={{fontWeight:"bold"}}>
                - {author}
            </Typography>
          </Container>
        </div>
    )
}