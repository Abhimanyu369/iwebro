import React, { useEffect } from 'react';
import Header from '../component/Header';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL, headers } from "../../api/Api";

const Update_team1 = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    username : '',
    position : '',
    img : ''
  });
  
  const fetchData = async (e)=>{
    const formData = new FormData();
    formData.append('img', data.img);
    formData.append('username', data.username);
    formData.append('position', data.position);
    let Fdata = await axios.put(BACKEND_COMMAN_URL+'/api/editTeam1/'+id,formData, headers);
    if(Fdata.status === 200){
      navigate('/View_team1');
    }
    else{
      e.preventDefault(); 
    }
  }

  const fetchData2 = async ()=>{
    const data = await axios.get(`${BACKEND_COMMAN_URL}/api/singleTeam1/${id}`, headers);
    if(data.status === 200){
      let fdata = data.data.data;
      setData({
        username : fdata.username,
        position : fdata.position,
        img : fdata.img
      });
    }
  }

  const formSubmit = (e)=>{
    if(!data.username || data.username === ''){
      e.preventDefault(); 
      seterr("Skill Name Required.");
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
      fetchData();
      seterr('');
      setsuc("Form Submitted.");
      e.preventDefault(); 
    }
  }

  useEffect(()=>{
    fetchData2();
    let img = document.getElementById('img');
    let con = document.getElementById('con');
    let nImg = document.getElementById('nImg');
    img.addEventListener('click', ()=>{
      nImg.classList.add('d-block');
      img.classList.add('d-none');
    });
    img.addEventListener('mouseover', ()=>{
      con.classList.add('d-inline-block');
    });
    img.addEventListener('mouseout', ()=>{
      con.classList.remove('d-inline-block');
    });
  },[]);

  const formImg = (e)=>{
    setData({...data, img: e.target.files[0]});
  }

  return (
    <><Header />
      <div className="ml-305 p-4 md:p-6 2xl:p-10">
        <div className="container">
    <form onSubmit={formSubmit} method="post" encType="multipart/form-data" className="flex flex-wrap">
     <div className="w-full">
      <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Team 1 </h2>
      {err ? <p className='error'>{err}</p> : ''}
      {suc ? <p className='success'>{suc}</p> : ''}
     </div>
     <div className="w-full">
      <div className="option mb-4">
        <img src={BACKEND_COMMAN_URL+data.img || ''} alt="img" className="Eimg shadow-lg" id="img" />
        <span id="con" className="px-3 py-2 text-dark">Click Image and Upload New Image.</span> 
      </div>
     </div>
      <div className="w-full px-3 mb-4">
        <label>Enter User Name:-</label>
        <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="username" id='username' placeholder="User Name" onChange={(e)=> setData({...data,username : e.target.value})} required value={data.username} />
      </div><br />
      <div className="w-full px-3 mb-4">
        <label>Enter User Position:-</label>
        <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="position" id='position' placeholder="User Name" onChange={(e)=> setData({...data,position : e.target.value})} required value={data.position} />
      </div><br />
      <div className="w-full px-3 mb-4" id="nImg">
        <label>Choose Company Image :-</label>
        <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="file" id='img' accept="image/*" name="img" onChange={formImg} style={{padding: '13px'}}  />
      </div><br />
      <input type="submit" value="Edit" className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
    </form>
  </div>
  </div>
    {/* <Footer /> */}
    </>
  )
}

export default Update_team1;