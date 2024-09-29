import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import jwt_decode from "jwt-decode";
import { BACKEND_COMMAN_URL, headers } from '../../api/Api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin_profile = () => {

  const navigate = useNavigate();
  const [suc,setsuc] = useState('');
  const [err,seterr] = useState('');
  const [admin,setAdmin] = useState({
    _id : '',
    username: '',
    email: '',
    password: '',
  });

  const fetchData = async (e)=>{
    let data = await axios.put(BACKEND_COMMAN_URL+'/api/editAdmin/'+admin._id, admin, headers);
    if(data.status === 200){
      sessionStorage.setItem('admin',JSON.stringify(data.data.data));
      navigate('/admin');
    }
    else{
      e.preventDefault();
    }
  }

  const fetchData2 = async ()=>{
    let data = jwt_decode(JSON.stringify(sessionStorage.getItem('admin'))).data;
    setAdmin({
      _id : data._id,
      username: data.username,
      email: data.email,
    })
  }

  const formSubmit = (e)=>{
    if(!admin.username || admin.username === ''){
      e.preventDefault(); 
      seterr("Admin Name Required.");
      setsuc('');
      document.getElementById('username').focus();
      return false;
    }
    else if(!admin.email || admin.email === ''){
      e.preventDefault(); 
      seterr("Email Required.");
      setsuc('');
      document.getElementById('email').focus();
      return false;
    }
    else{
      fetchData();
      seterr('');
      setsuc("Form Submitted.");
      e.preventDefault(); 
    }
  }

  const handleChange = (e) => {
    setAdmin({...admin, [e.target.name]: e.target.value});
  }

  useEffect(()=>{
    fetchData2();
  },[]);
  
  return (
    <>
      <Header />
      <div className="ml-305 p-4 md:p-6 2xl:p-10">
        <div className='container'>
        <form className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark" onSubmit={formSubmit}>
            <div className="relative z-20 h-72 md:h-65">
              <img src="/assets/img/bg/4.png" alt="profile cover" className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center" />
              <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
              </div>
            </div>
            <div className="relative px-4 pb-6 lg:pb-8 xl:pb-11.5">
              <div className="mt-28">
              {err ? <p className='error'>{err}</p> : ''}
              {suc ? <p className='success'>{suc}</p> : ''}
                <div className="mx-auto max-w-180 mb-3">
                  <h5>Admin Name</h5>
                  <input type="text" onChange={handleChange} name="username" id='username' className="mt-4.5 w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" value={admin.username} placeholder="Enter Your Company Address"/>
                </div>
                <div className="mx-auto max-w-180 mb-3">
                  <h5>Email Id</h5>
                  <input type="text" onChange={handleChange} name="email" id='email' className="mt-4.5 w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" value={admin.email} placeholder="Enter Your Company Address"/>
                </div>
                <div className="mx-auto max-w-180 mb-4">
                  <h5>Password</h5>
                  <input type="password" onChange={handleChange} name="password" id='password' className="mt-4.5 w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" placeholder="Enter New Password"/>
                </div>
                <input type="submit" name="submit" value="Edit Profile" className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Admin_profile;