import React from 'react'
import Banner from '../components/Home/Banner/Banner.jsx';
import AboutUs from '../components/Home/AboutUs/AboutUs.jsx';
import HomeOwner from '../components/Home/HomeOwner/HomeOwner.jsx';
import ChooseUs from '../components/Home/ChoosingUs/ChooseUs.jsx';
import Faq from '../components/Home/FAQ/Faq.jsx';
import GetStarted from '../components/Home/GetStarted/GetStarted.jsx';
const Home = () => {
  return (
    <div id='home'>
      <Banner />
      <AboutUs />
      <HomeOwner />
      <ChooseUs />
      <Faq/>
      <GetStarted />
    </div>
  )
}
export default Home