import React from 'react';
import Header from '../component/Header';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_COMMAN_URL, headers } from "../../api/Api";

const Add_service = () => {

  const navigate = useNavigate();
  const [err, seterr] = useState('');
  const [suc, setsuc] = useState('');
  const [data, setData] = useState({
    title: '',
    desc: '',
    img: ''
  });

  const fetchData = async (data) => {
    const formData = new FormData();
    formData.append('img', data.img);
    formData.append('title', data.title);
    formData.append('desc', data.desc);
    let fdata = await axios.post(BACKEND_COMMAN_URL + '/api/addService', formData, headers);
    if (fdata.status === 200) {
      navigate('/View_service');
    }
    else {
      navigate('/Add_service');
    }
  }

  const formSubmit = (e) => {
    if (!data.title || data.title === '') {
      e.preventDefault();
      seterr("Title Required.");
      setsuc('');
      document.getElementById('title').focus();
      return false;
    }
    else if (!data.img || data.img === '') {
      e.preventDefault();
      seterr("Image Required.");
      setsuc('');
      document.getElementById('img').focus();
      return false;
    }
    else if (!data.desc || data.desc === '') {
      e.preventDefault();
      seterr("Description Required.");
      setsuc('');
      document.getElementById('desc').focus();
      return false;
    }
    else {
      fetchData(data);
      seterr('');
      setsuc("Form Submitted.");
      setData({
        title: '',
        desc: '',
        img: ''
      })
      e.preventDefault();
    }
  }

  const formImg = (e) => {
    setData({ ...data, img: e.target.files[0] });
  }

  return (
    <><Header />
      <div className="ml-305 p-4 md:p-6 2xl:p-10">
        <div className="container">
          <form onSubmit={formSubmit} method="post" encType="multipart/form-data" className='flex flex-wrap'>
            <div className="w-full">
              <h2 className="mb-4" style={{ letterSpacing: '3px', fontWeight: 600 }}>Add Service </h2>
              {err ? <p className='error'>{err}</p> : ''}
              {suc ? <p className='success'>{suc}</p> : ''}
            </div>
            <div className="md:w-1/2 sm:w-1/2 w-full mb-4 px-3">
              <label>Enter Title:-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="title" id='title' onChange={(e) => setData({ ...data, title: e.target.value })} placeholder="Title" />
            </div><br />
            <div className="md:w-1/2 sm:w-1/2 w-full mb-4 px-3">
              <label>Choose Image :-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="file" onChange={formImg} id='img' name="img" accept="image/*" style={{ padding: '13px' }} />
            </div><br />
            <div className="w-full mb-4 px-3">
              <label>Enter Description :-</label>
              <textarea name="desc" id="desc" className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" rows="5" onChange={(e) => setData({ ...data, desc: e.target.value })} placeholder="Description"></textarea>
            </div><br />
            <input type="submit" name="submit" value="Submit" className=" w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Add_service;