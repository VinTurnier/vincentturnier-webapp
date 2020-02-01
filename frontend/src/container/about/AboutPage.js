import React from 'react';

//Material Ui Core
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

// Material Ui Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// About Page
import MissionStatement from './MissionStatement';
import FactsSideBar from './FactsSideBar';
import AboutMeCard from './AboutMeCard';

const useStyles = makeStyles(theme => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));
  

const sidebar = {
    title: 'Some Facts About Me',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'LinkedIn', icon: LinkedInIcon},
    ],
  };

  const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
      },
      {
        title: 'Featured post',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
      },
]

export default function AboutPage(props){
    const classes = useStyles();

    return(
        <div>
            <main>
                <MissionStatement/>
                <Grid container spacing={5} className={classes.mainGrid}>
                <div style={{margin:'20px'}}>
                    {featuredPosts.map(post=>{
                        return <AboutMeCard post={post}/>
                    })}
                </div>
                <FactsSideBar
                    title={sidebar.title}
                    description={sidebar.description}
                    archives={sidebar.archives}
                    social={sidebar.social}
                />
            </Grid>
            </main>
        </div>
    )
}