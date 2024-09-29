import React, { useEffect } from 'react';
import Header from '../../adminpanel/component/Header';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_COMMAN_URL, headers } from "../../api/Api";

const Add_company = () => {

  const navigate = useNavigate();
  const [suc, setsuc] = useState('');
  const [err, seterr] = useState('');
  const [newUser, setNewUser] = useState(
    {
      company_name: '',
      email: '',
      phone: '',
      address: '',
      location: '',
      desc: '',
      photo: '',
      pdf: '',
    }
  );

  const handleSubmit = (e) => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
    if (!newUser.company_name || newUser.company_name === '') {
      e.preventDefault();
      seterr("Company Name Required.");
      setsuc('');
      document.getElementById('company_name').focus();
      return false;
    }
    else if (!newUser.email || newUser.email === '') {
      e.preventDefault();
      seterr("Email Required.");
      setsuc('');
      document.getElementById('email').focus();
      return false;
    }
    else if (!regex.test(newUser.email)) {
      e.preventDefault();
      seterr("Invalid Email.");
      setsuc('');
      document.getElementById('email').focus();
      return false;
    }
    else if (!newUser.phone || newUser.phone === '') {
      e.preventDefault();
      seterr("Phone No. Required.");
      setsuc('');
      document.getElementById('phone').focus();
      return false;
    }
    if (newUser.phone.length !== 10) {
      e.preventDefault();
      seterr("10 Character Required In Phone No.");
      setsuc('');
      document.getElementById('phone').focus();
      return false;
    }
    else if (!newUser.address || newUser.address === '') {
      e.preventDefault();
      seterr("Address Required.");
      setsuc('');
      document.getElementById('address').focus();
      return false;
    }
    else if (!newUser.location || newUser.location === '') {
      e.preventDefault();
      seterr("Location Required.");
      setsuc('');
      document.getElementById('location').focus();
      return false;
    }
    else if (!newUser.photo || newUser.photo === '') {
      e.preventDefault();
      seterr("Company Logo Required.");
      setsuc('');
      document.getElementById('photo').focus();
      return false;
    }
    else if (!newUser.desc || newUser.desc === '') {
      e.preventDefault();
      seterr("Description Required.");
      setsuc('');
      document.getElementById('desc').focus();
      return false;
    }
    else if (!newUser.pdf || newUser.pdf === '') {
      e.preventDefault();
      seterr("Pdf Required.");
      setsuc('');
      document.getElementById('pdf').focus();
      return false;
    }
    else {
      newUser.desc = newUser.desc.replace(/\s+/g, ' ').trim();
      newUser.location = newUser.location.replace(/\s+/g, ' ').trim();
      newUser.address = newUser.address.replace(/\s+/g, ' ').trim();
      e.preventDefault();
      const formData = new FormData();
      formData.append('photo', newUser.photo);
      formData.append('email', newUser.email);
      formData.append('phone', newUser.phone);
      formData.append('pdf', newUser.pdf);
      formData.append('company_name', newUser.company_name);
      formData.append('address', newUser.address);
      formData.append('location', newUser.location);
      formData.append('desc', newUser.desc);
      axios.post(BACKEND_COMMAN_URL + '/api/add_company', formData, headers)
        .then(res => {
          navigate('/View_talent');
        })
        .catch(err => {
          navigate('/Add_talent');
        });
      setNewUser({
        company_name: '',
        email: '',
        phone: '',
        address: '',
        location: '',
        desc: '',
        photo: '',
        pdf: '',
      });
      document.getElementById('pdf').value = '';
      document.getElementById('photo').value = '';
      seterr('');
      setsuc("Form Submitted.");
    }
  }

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  const handlePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  }
  const handlePdf = (e) => {
    setNewUser({ ...newUser, pdf: e.target.files[0] });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <><Header />
      <div className="ml-305 p-4 md:p-6 2xl:p-10">
        <div className="container">
          <form onSubmit={handleSubmit} method="post" encType="multipart/form-data" className='flex flex-wrap'>
            <div className="w-full">
              <h2 className="mb-4" style={{ letterSpacing: '3px', fontWeight: 600 }}>Add Talent </h2>
              {err ? <p className='error'>{err}</p> : ''}
              {suc ? <p className='success'>{suc}</p> : ''}
            </div>
            <div className="md:w-1/2 sm:w-1/2 w-full mb-4 px-3">
              <label>Enter Company Name:-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="company_name" id='company_name' onChange={handleChange} placeholder="Company Name" />
            </div><br />
            <div className="md:w-1/2 sm:w-1/2 w-full mb-4 px-3">
              <label>Enter Company Email :-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="email" id='email' onChange={handleChange} placeholder="Email" />
            </div><br />
            <div className="md:w-1/2 sm:w-1/2 w-full mb-4 px-3">
              <label>Enter Company Phone :-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="phone" name="phone" id='phone' onChange={handleChange} placeholder="Phone" />
            </div><br />
            <div className="md:w-1/2 sm:w-1/2 w-full mb-4 px-3">
              <label>Enter Company Address :-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="address" name="address" id='address' onChange={handleChange} placeholder="Address" />
            </div><br />
            <div className="md:w-1/2 sm:w-1/2 w-full mb-4 px-3">
              <label>Enter Company Location :-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="location" name="location" id='location' onChange={handleChange} placeholder="Location" />
            </div><br />
            <div className="md:w-1/2 sm:w-1/2 w-full mb-4 px-3">
              <label>Choose Company Logo :-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" accept="image/*" type="file" name="photo" id='photo' onChange={handlePhoto} style={{ padding: '13px' }} />
            </div><br />
            <div className="w-full mb-4 px-3">
              <label>Enter Company Description :-</label>
              <textarea className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" rows="6" name="desc" id='desc' onChange={handleChange} placeholder="Description"></textarea>
            </div><br />
            <div className="w-full mb-4 px-3">
              <label>Choose Pdf :-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" accept=".pdf" type="file" onChange={handlePdf} name="pdf" id='pdf' style={{ padding: '13px' }} />
            </div><br />
            <input type="submit" name="submit" value="Submit" className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Add_company;