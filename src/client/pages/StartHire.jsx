import React from 'react';
import Header from '../components/NewPage/Header';
import Footer from '../components/NewPage/Footer';
import Skill from '../components/StartHire/Skill';
import BackTop from '../components/NewPage/BackTop';
import HireForm from '../components/StartHire/HireForm';

const StartHire = () => {
  return (
    <>
      {/* <Header /> */}
      <HireForm />
      <Skill />
      <Footer />
      <BackTop />
    </>
  );
};

export default StartHire;
