// import { useState } from "react";
// import { Link } from "react-router-dom";

import React, { useEffect, useState } from 'react';

const BackTop = () => {

  // const Top = ()=>{
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  // }

  // const [visible, setVisible] = useState(false)

  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 300){
  //     setVisible(true);
  //   } 
  //   else if (scrolled <= 300){
  //     setVisible(false);
  //   }
  // };

  // window.addEventListener('scroll', toggleVisible);





  // var Tawk_API= Tawk_API||{}, Tawk_LoadStart=new Date();
  // (function(){

  //   var s1 = document.createElement("script"),
  //   s0 = document.getElementsByTagName("script")[0];
  //   s1.async=true;
  //   s1.src='https://embed.tawk.to/64ec4baea91e863a5c102f72/1h8tgf8vv';
  //   s1.charset='UTF-8';
  //   s1.setAttribute('crossorigin','*');
  //   s0.parentNode.insertBefore(s1,s0);

  // })();


  const tawkTo = require("tawkto-react");
  const tawkToPropertyId = "650d8551b1aaa13b7a785167";
  const tawkToKey = "1haud1hup";
  // const [tawkWidgetToggle] = useState

  const tawkWidgetToggle = (show) => {
    // Ensure the Tawk object has initalized
    if (window.$_Tawk && window.$_Tawk.init) {
      show ? showWidget() : hideWidget();
    } else {
      // If the Tawk object didn't initilize, use a differnt method of loading
      if (window.Tawk_API) {
        window.Tawk_API.onLoad = function () {
          show ? showWidget() : hideWidget();
        };
      }
    }
  };
  function showWidget() {
    window.Tawk_API.showWidget();
  }
  function hideWidget() {
    window.Tawk_API.hideWidget();
  }



  useEffect(() => {
    new tawkTo(tawkToPropertyId, tawkToKey);
    tawkWidgetToggle(true);
    return () => {
      tawkWidgetToggle(false);
    };
  }, [tawkTo]);

  return (
    <>
      {/* <a href="# " className="back-to-top align-items-center justify-content-center" id="backTop" onClick={Top} style={{display: visible ? 'flex' : 'none'}}>
          <span className="back-top text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16"><path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg></span>
      </a> */}
    </>
  )
}

export default BackTop;