import React from 'react';
import Header from '../component/Header';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL, headers } from "../../api/Api";

const Add_team1 = () => {

  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    username : '',
    position : '',
    img : ''
  });

  const fetchData = async (data)=>{
    const formData = new FormData();
    formData.append('img', data.img);
    formData.append('username', data.username);
    formData.append('position', data.position);
    let fdata = await axios.post(BACKEND_COMMAN_URL+'/api/addTeam1',formData, headers);
    if(fdata.status === 200){
      navigate('/View_team1');
    }
    else{
      navigate('/Add_team1');
    }
  }

  const formSubmit = (e)=>{
    if(!data.username || data.username === ''){
      e.preventDefault(); 
      seterr("User Name Required.");
      setsuc('');
      document.getElementById('username').focus();
      return false;
    }
    else if(!data.position || data.position === ''){
      e.preventDefault(); 
      seterr("User Position Required.");
      setsuc('');
      document.getElementById('position').focus();
      return false;
    }
    else if(!data.img || data.img === ''){
      e.preventDefault(); 
      seterr("Image Required.");
      setsuc('');
      document.getElementById('img').focus();
      return false;
    }
    else{
      fetchData(data);
      seterr('');
      setsuc("Form Submitted.");
      setData({
        username : '',
        position : '',
        img : ''
      })
      e.preventDefault(); 
    }
  }

  const formImg = (e)=>{
    setData({...data, img: e.target.files[0]});
  }

  return (
        <><Header />
    <div className="ml-305 p-4 md:p-6 2xl:p-10">
      <div className="container">
        <form onSubmit={formSubmit} method="post" encType="multipart/form-data" className='flex flex-wrap'>
          <div className="w-full">
            <h2 className="mb-4" style={{ letterSpacing: '3px', fontWeight: 600 }}>Add Team 1 </h2>
            {err ? <p className='error'>{err}</p> : ''}
            {suc ? <p className='success'>{suc}</p> : ''}
          </div>
          <div className="w-full mb-4 px-3">
            <label>Enter User Name:-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="username" id='username' onChange={(e)=> setData({...data,username : e.target.value})} placeholder="User Name" />
          </div><br />
          <div className="w-full mb-4 px-3">
            <label>Enter User Position:-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="position" id='position' onChange={(e)=> setData({...data,position : e.target.value})} placeholder="User Position" />
          </div><br />
          <div className="w-full mb-4 px-3">
            <label>Choose Image :-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="file" accept="image/*" onChange={formImg} id='img' name="img" style={{ padding: '13px' }} />
          </div><br />
          <input type="submit" name="submit" value="Submit" className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
        </form>
        </div>
      </div>
      </>
  )
}

export default Add_team1;