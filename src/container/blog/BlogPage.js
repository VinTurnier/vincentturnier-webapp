import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const mainFeaturedPost = {
  title: 'Welcome to my Blog',
  description:
    "Welcome, read more to learn about me!",
  image: 'https://vincentturnier-webapp-bucket.s3.us-east-2.amazonaws.com/webapp-company-logos/0.jpg',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Gas Monitoring System',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://vincentturnier-webapp-bucket.s3.us-east-2.amazonaws.com/webapp-company-logos/gms-inventory-screen-shot.png',
    imageText: 'Image Text',
    link: "/blog#Gas-Monitoring-System",
  },
  {
    title: 'IPT',
    date: 'Dec 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://vincentturnier-webapp-bucket.s3.us-east-2.amazonaws.com/webapp-company-logos/ipt-twilio-api-for-whatsapp.png',
    imageText: 'Image Text',
    link: "/blog#IPT",
  }
  
];

const sidebar = {
  title: 'Some Comman Fact',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'December 2019', url: '#' },
    { title: 'November 2019', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, link: "http://www.github.com/vinTurnier" },
  ],
};

export default function BlogPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose"/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    </React.Fragment>
  );
}