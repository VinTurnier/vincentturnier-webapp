import React from 'react';
import './App.css';
import Routes from './service/Routes';

import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Footer from './components/Footer';


const sections = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Projects', url: '/projects' },
  { title: 'Blog', url: '/blog' },
  { title: 'Contact', url:'/contact'},
];

export default function App() {

  const appProps={}



  return (
    <div>
      <Container maxWidth="lg">
        <Header title="Vincent Turnier" sections={sections} />
        </Container>
       <Routes appProps={appProps}/>
       <Footer/>
       </div>
  );
}
