import React from 'react'
import Header from './Header';
import HomeBody from './HomeBody';

const Home = () => {
  return (
    <div className="container home">
      <div className="home-inner">
        <Header />
        <HomeBody />
      </div>
    </div>
  )
}

export default Home
