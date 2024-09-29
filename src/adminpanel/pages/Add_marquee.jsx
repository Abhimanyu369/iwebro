
import React from 'react';
import Header from '../component/Header';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL, headers } from "../../api/Api";

const Add_marquee = () => {

  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    title : ''
  });
  
  const fetchData = async ()=>{
    try {
      let fdata = await axios.post(BACKEND_COMMAN_URL+'/api/addMarquee',data, headers);
      if(fdata.status === 200){
        navigate('/View_marquee');
      }
      else{
        navigate('/Add_marquee');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const formSubmit = (e)=>{
    if(!data.title || data.title === ''){
      e.preventDefault(); 
      seterr("Title Required.");
      setsuc('');
      document.getElementById('title').focus();
      return false;
    }
    else{
      fetchData();
      seterr('');
      setsuc("Form Submitted.");
      setData({
        title : '',
      })
      e.preventDefault(); 
    }
  }

  return (
    <>
    <Header />
    <div className="ml-305 p-4 md:p-6 2xl:p-10">
      <div className="container">
        <form onSubmit={formSubmit} method="post" className='flex flex-wrap'>
          <div className="w-full">
            <h2 className="mb-4" style={{ letterSpacing: '3px', fontWeight: 600 }}>Add Marquees </h2>
            {err ? <p style={{color : 'red'}}>{err}</p> : ''}
            {suc ? <p style={{color : 'green'}}>{suc}</p> : ''}
          </div>
          <div className="w-full mb-4 px-3">
            <label>Enter Title:-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="title" id='title' onChange={(e)=> setData({...data,title : e.target.value})} placeholder="Title" />
          </div><br />
          <input type="submit" name="submit" value="Submit" className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
        </form>
      </div>
    </div>
      </>
  )
}

export default Add_marquee;