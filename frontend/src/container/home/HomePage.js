import React from 'react';
import Container from '@material-ui/core/Container';
import Main from './Main';


const mainFeaturedPost = {
    title: 'Welcome to My Website, Feel free to browse!',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://vincentturnier-webapp-bucket.s3.us-east-2.amazonaws.com/webapp-company-logos/0.jpg',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };

export default function HomePage(props){

    
    return(
        <div>
            <Container maxWidth="lg">
            <main>
            <Main post={mainFeaturedPost}/>
            </main>
            </Container>
        </div>
    )
}