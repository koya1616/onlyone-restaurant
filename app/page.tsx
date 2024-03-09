import React from 'react';
import Header from '../components/header';
import Logo from '../components/logo';
import WhatABeautifulDay from '../components/whatABeautifulDay';
import { getRecommendRestaurants, getNotableRestaurants, getPopularRestaurants, getNewRestaurants } from '../utils/prisma';
// import { Carousel } from 'antd';

const Home = async () => {
  const [recommendRestaurants, notableRestaurants, popularRestaurants, newRestaurants] = await Promise.all([
    getRecommendRestaurants(),
    getNotableRestaurants(),
    getPopularRestaurants(),
    getNewRestaurants(),
  ]);
  return (
    <>
      <Header />
      <Logo />
      <WhatABeautifulDay
        recommend={recommendRestaurants}
        notable={notableRestaurants}
        popular={popularRestaurants}
        neeeeeeeeew={newRestaurants}
      />
    </>
  )
}

export default Home;
