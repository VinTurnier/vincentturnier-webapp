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
    title: 'Some Fun Facts About Me',
    description:(<p>
        <ul>
            <li><b>University: </b>University of Connecticut</li>
            <li><b>Graduated: </b>May 2019</li>
            <li><b>Interest: </b>Beekeeping & Music</li>
        </ul>
        </p>

    ),
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon, link: 'https://github.com/VinTurnier/' },
      { name: 'LinkedIn', icon: LinkedInIcon, link: 'https://www.linkedin.com/in/vincent-turnier/'},
    ],
  };

  const featuredPosts = [
    {
      title: 'Software Engineer | StrongArm Technology',
      date: 'August 2019 - Present',
      description:(<p style={{}}>
        <ul>
              <li>
                  Build the SAT ORM (StrongArm Technologies Object Relational Mappers) <br/>
                  python package, an internal tool to help manage database modifications<br/> 
                  by using python's <b>SQLAlchemy</b> and <b>Alembic</b> Libraries.
              </li>
              <br/>
              <li>
                  Modify API endpoints to use the SAT ORM package, which condenses<br/> 
                  scripts of about 150 lines of code to approximately 30 on average, <br/>
                  in order to make endpoints easier to read & maintain.
              </li>
              <br/>
              <li>
                Utilize <b>Pytest</b>, <b>Docker</b>, and <b>Jenkins</b> to test & automate the<br/>  
                SAT ORM package and the API’s to ensure bugs were not being<br/> 
                added with addition of new features.
              </li>
        </ul>
    </p>)
       ,
      image: 'https://vincentturnier-webapp-bucket.s3.us-east-2.amazonaws.com/webapp-company-logos/SHA-Portfolio-StrongArmTech.png',
      imageText: 'Image Text',
    },
    {
        title: 'Software Engineer Intern | Pratt & Whitney',
        date: 'May 2018 - August 2018',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
      },
      {
        title: 'Structural Engineer Intern | Pratt & Whitney',
        date: 'May 2017 - August 2017',
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