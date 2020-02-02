import React from 'react';

//Material Ui Core
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

// Material Ui Icons
import GitHubIcon from '@material-ui/icons/GitHub';
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
            <li><b>Language: </b>English, French, Haitian Creole</li>
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
      description:(<p style={{fontFamily: 'Times New Roman, sans-serif'}}>
        <ul>
              <li>
                  Build the SAT ORM (StrongArm Technologies Object Relational Mappers) <br/>
                  python package, an internal tool to help manage database modifications<br/> 
                  by using python's <b>SQLAlchemy</b> and <b>Alembic</b> Libraries.
              </li>
              <br/>
              <li>
                  Modify API endpoints to use the SAT ORM package, which condenses<br/> 
                  scripts of about <b>150 lines of code to approximately 30</b> on average, <br/>
                  in order to make endpoints easier to <b>read, test & maintain</b>.
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
        description:(<p style={{fontFamily: 'Times New Roman, sans-serif'}}>
            <ul>
              <li>
                Accelerate the certification process of the PW1500G/PW1900G by<br/> 
                creating and running <b>python</b> scripts through Failure Mode Effect<br/>  
                Analysis (FMEA) documents to identify errors and redundancies.
              </li>
              <br/>
              <li>
                Support the creation of a new Failure Mode Effect Critical Analysis<br/> 
                (FMECA) <b>database</b> made up of probable failure modes, which is<br/> 
                critical to the standardization of the FMEA process.
              </li>
        </ul>
        </p>
        ),
        image: 'https://vincentturnier-webapp-bucket.s3.us-east-2.amazonaws.com/webapp-company-logos/Pratt_%26_Whitney_UTC_logo.svg.png',
        imageText: 'Image Text',
      },
      {
        title: 'Structural Engineer Intern | Pratt & Whitney',
        date: 'May 2017 - August 2017',
        description:(<p style={{fontFamily: 'Times New Roman, sans-serif'}}>
            <ul>
                <li>
                    Over see quality control of jet engine blade and vein inventories<br/> 
                    to ensure compliance with PW standards for compression systems.
                </li>
                <br/>
                <li>
                    Visit outsourced production plants to advise the qualitystandards<br/> 
                    for the fabrication of jet engine blades and veins.
                </li>
                <br/>
                <li>
                    Propose new solutions for frequent part defects and production<br/> 
                    errors to management.
                </li>
            </ul>
        </p>
        ),
        image: 'https://vincentturnier-webapp-bucket.s3.us-east-2.amazonaws.com/webapp-company-logos/Pratt_%26_Whitney_UTC_logo.svg.png',
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
                <div style={{margin:'00px'}}>
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