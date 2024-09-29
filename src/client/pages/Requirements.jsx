import React from 'react';
import Header from '../components/NewPage/Header';
import Footer from '../components/NewPage/Footer';
import BackTop from '../components/NewPage/BackTop';
import Current from '../components/RequireMent/Current';
// import Developer from '../components/Talent/Developer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Requirements = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Current />
      {/* <Developer /> */}
      <Footer />
      <BackTop />
    </>
  );
};

export default Requirements;
