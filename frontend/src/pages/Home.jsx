import React from 'react'
import Header from '../components/Header';
import Landing from '../components/Landing';
import Features from '../components/Features';
import Team from '../components/Team';

function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Features />
      <Team />
    </div>
  );
}

export default Home