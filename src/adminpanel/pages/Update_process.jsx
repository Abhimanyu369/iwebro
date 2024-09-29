import React, { useEffect } from 'react';
import Header from '../component/Header';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL, headers } from "../../api/Api";

const Update_process = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    title : '',
    desc : ''
  });
  
  const fetchData = async (e)=>{
    let Fdata = await axios.put(BACKEND_COMMAN_URL+'/api/editProcess/'+id,data, headers);
    if(Fdata.status === 200){
      navigate('/View_process');
    }
    else{
      e.preventDefault(); 
    }
  }

  const fetchData2 = async ()=>{
    const data = await axios.get(`${BACKEND_COMMAN_URL}/api/singleProcess/${id}`, headers);
    if(data.status === 200){
      let fdata = data.data.data;
      setData({
        title : fdata.title,
        desc : fdata.desc,
      });
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
    else if(!data.desc || data.desc === ''){
      e.preventDefault(); 
      seterr("Description Required.");
      setsuc('');
      document.getElementById('desc').focus();
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
  },[]);

  return (
    <><Header />
      <div className="ml-305 p-4 md:p-6 2xl:p-10">
        <div className="container">
          <form onSubmit={formSubmit} method="post" className="flex flex-wrap">
            <div className="w-full">
              <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Process </h2>
              {err ? <p className='error'>{err}</p> : ''}
              {suc ? <p className='success'>{suc}</p> : ''}
            </div>
            <div className="w-full mb-4 px-3">
              <label>Enter Title:-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="title" id='title' placeholder="Title" onChange={(e)=> setData({...data,title : e.target.value})} value={ data.title } />
            </div><br />
            <div className="w-full mb-4 px-3">
              <label>Enter Description:-</label>
              <textarea name="desc" id="desc" className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" rows="5" onChange={(e)=> setData({...data,desc : e.target.value})} value={ data.desc } placeholder="Description"></textarea>
            </div><br />
            <input type="submit" value="Edit" className="mb-5 w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Update_process;