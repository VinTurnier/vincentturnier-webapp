import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import QuoteCard from '../../components/QuoteCard';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

const quote = {
  text: "\"One of the tests of leadership is the ability to recognize a problem before it becomes an emergency.\"",
  author: "Arnold Glasow",
}
const projects = [
  {
    header: "IPT",
    text: "Information for all or IPT, helps people identify old images used for propaganda using twilio.",
    githubLink: "https://github.com/VinTurnier/ipt-api",
    blogLink: "/blog#IPT",
    imageLink: "https://vincentturnier-webapp-bucket.s3.us-east-2.amazonaws.com/webapp-company-logos/ipt-twilio-api-for-whatsapp.png"
  },
  {
    header: "GMS",
    text: "Gas Monitoring System or GMS is a inventory management system for gas stations.",
    githubLink: "https://app.gmsdashboard.com",
    blogLink: "/blog#Gas-Monitoring-System",
    imageLink: "https://vincentturnier-webapp-bucket.s3.us-east-2.amazonaws.com/webapp-company-logos/gms-inventory-screen-shot.png"
  },
  {
    header: "FinScrap",
    text: "FinScrap is an api used to webscrape data of websites such as yahoo finance.",
    githubLink: "",
    blogLink: "",
    imageLink: "https://vincentturnier-webapp-bucket.s3.us-east-2.amazonaws.com/webapp-company-logos/FinScrap-picture-holder.png"
  },
  {
    header: "Snipit",
    text: "A Music discovery application to help people discover new music faster.",
    githubLink: "",
    blogLink: "",
    imageLink: "https://vincentturnier-webapp-bucket.s3.us-east-2.amazonaws.com/webapp-company-logos/Vinny+T+Black+Circle.jpg"
  },
  {
    header: "Event Management",
    text: "A Music discovery application to help people discover new music faster.",
    githubLink: "",
    blogLink: "",
    imageLink: ""
  },
  {
    header: "Django Framework",
    text: "Learned to use django framework on a simple recipe project.",
    githubLink: "https://github.com/VinTurnier/Learn-Django_Recipe-Project",
    blogLink: "",
    imageLink: "https://vincentturnier-webapp-bucket.s3.us-east-2.amazonaws.com/webapp-company-logos/python-django-logo.jpg"
  },
  
]
export default function ProjectPage() {
  const classes = useStyles();

  const goToGithub=(url)=>{
    window.open(url)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projects.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.imageLink}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.header}
                    </Typography>
                    <Typography>
                      {card.text}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={()=>goToGithub(card.githubLink)}>
                      View
                    </Button>
                    
                    <Button size="small" color="primary">
                    <Link href={card.blogLink}>
                      Blog
                    </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <QuoteCard text={quote.text} author={quote.author}/>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}