import React from 'react';
import Container from '@material-ui/core/Container';
import Main from './Main';
import QuoteCard from '../../components/QuoteCard';


const mainFeaturedPost = {
    title: 'Welcome to My Website, Feel free to browse!',
    description:
      "",
    image: 'https://vincentturnier-webapp-bucket.s3.us-east-2.amazonaws.com/webapp-company-logos/0.jpg',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };

const quote = {
  text: "\"Leadership and learning are indispensable to each other.\"",
  author:"John F. Kennedy",
}

export default function HomePage(props){

    
    return(
        <div>
            <Container maxWidth="lg">
            <main>
            <Main post={mainFeaturedPost}/>
            </main>
            </Container>
            <QuoteCard text={quote.text} author={quote.author}/>
        </div>
    )
}