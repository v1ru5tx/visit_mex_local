import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import homeEs from '../../assets/data/homeSlider/es/index.json';
import homeEn from '../../assets/data/homeSlider/en/index.json';
import homeFr from '../../assets/data/homeSlider/fr/index.json';
import homeDe from '../../assets/data/homeSlider/de/index.json';
import homePt from '../../assets/data/homeSlider/pt/index.json';
import homeIt from '../../assets/data/homeSlider/it/index.json';
import homeJp from '../../assets/data/homeSlider/jp/index.json';
import homeCn from '../../assets/data/homeSlider/cn/index.json';

import HomeLoading from '../../components/homeLoading';
import HomeSlider from '../../components/homeSlider';
// import HomeFinder from '../../components/homeFinder';
import HomeKnow from '../../components/homeKnow';
import HomeTheMostViewed from '../../components/homeTheMostViewed';
import HomeSunBeachAndSand from '../../components/homeSunBeachAndSand';
import HomeTravelInspiration from '../../components/homeTravelInspiration';
import HomeSliderVideoCards from '../../components/homeSliderVideoCards';
// import HomeExperience360 from '../../components/homeExperience360';
import HomeRecentArticles from '../../components/homeRecentArticles';


const Home = () => {
  const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(homeEs);
 
useEffect(() => {
    isLanguage === 'ES' ? setLanguage(homeEs)
    : isLanguage === 'EN' ? setLanguage(homeEn)
    : isLanguage === 'FR' ? setLanguage(homeFr)
    : isLanguage === 'DE' ? setLanguage(homeDe)
    : isLanguage === 'PT' ? setLanguage(homePt)
    : isLanguage === 'IT' ? setLanguage(homeIt)
    : isLanguage === 'JP' ? setLanguage(homeJp)
    : isLanguage === 'CN' ? setLanguage(homeCn)
    : setLanguage(homeEs)
  }, [isLanguage]);
  
  const [loading, setLoading] = useState(false);

  window?.scroll({
    top: 0
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 3000);
  }, []);
  return (
    <>
    {loading ?
      <>
        <HomeSlider data={language}/>
        
        {/*<HomeFinder data={language}/>*/}
        <HomeKnow data={language}/>
        <HomeTheMostViewed data={language}/>
        <HomeSunBeachAndSand data={language}/>
        <HomeTravelInspiration data={language}/>
        <HomeSliderVideoCards data={language}/>
        {/* <HomeExperience360 /> */}
        <HomeRecentArticles data={language}/>
      </>
      :
      <>
        <HomeLoading />
      </>
    }
    </>
  );
};

export default Home;