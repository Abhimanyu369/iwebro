import React, { useEffect, useState } from 'react';
import Header from '../../talentpanel/components/Header';
import jwt_decode from "jwt-decode";
import { BACKEND_COMMAN_URL, headers } from '../../api/Api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Talent_profile = () => {

  const navigate = useNavigate();
  const ldata = JSON.parse(sessionStorage.getItem('talent'));
  const [isLoggedIn] = useState(ldata);
  const [suc, setsuc] = useState('');
  const [err, seterr] = useState('');
  const [file, setFile] = useState();
  const [talent, setTalent] = useState({
    company_name: '',
    email: '',
    phone: '',
    address: '',
    location: '',
    desc: '',
    photo: '',
    pdf: '',
  });

  const handleSubmit = (e) => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
    if (!talent.company_name || talent.company_name === '') {
      e.preventDefault();
      seterr("Company Name Required.");
      setsuc('');
      document.getElementById('company_name').focus();
      return false;
    }
    else if (!talent.email || talent.email === '') {
      e.preventDefault();
      seterr("Email Required.");
      setsuc('');
      document.getElementById('email').focus();
      return false;
    }
    if (!regex.test(talent.email)) {
      e.preventDefault();
      seterr("Invalid Email.");
      setsuc('');
      document.getElementById('email').focus();
      return false;
    }
    else if (!talent.phone || talent.phone === '') {
      e.preventDefault();
      seterr("Phone No. Required.");
      setsuc('');
      document.getElementById('phone').focus();
      return false;
    }
    if (talent.phone.length !== 10) {
      e.preventDefault();
      seterr("10 Character Required In Phone No.");
      setsuc('');
      document.getElementById('phone').focus();
      return false;
    }
    else if (!talent.desc || talent.desc === '') {
      e.preventDefault();
      seterr("Description Required.");
      setsuc('');
      document.getElementById('desc').focus();
      return false;
    }
    else if (!talent.address || talent.address === '') {
      e.preventDefault();
      seterr("Address Required.");
      setsuc('');
      document.getElementById('address').focus();
      return false;
    }
    else if (!talent.location || talent.location === '') {
      e.preventDefault();
      seterr("Location Required.");
      setsuc('');
      document.getElementById('location').focus();
      return false;
    }
    else if (!talent.photo || talent.photo === '') {
      e.preventDefault();
      seterr("Company Logo Required.");
      setsuc('');
      document.getElementById('photo').focus();
      return false;
    }
    else {
      // var a = [];
      // a[0] = talent.photo;
      // a[1] = talent.password;

      talent.desc = talent.desc.replace(/\s+/g, ' ').trim();
      talent.location = talent.location.replace(/\s+/g, ' ').trim();
      talent.address = talent.address.replace(/\s+/g, ' ').trim();

      e.preventDefault();

      const formData = new FormData();
      formData.append('photo', talent.photo);
      formData.append('email', talent.email);
      formData.append('phone', talent.phone);
      formData.append('password', talent.password);
      formData.append('company_name', talent.company_name);
      formData.append('address', talent.address);
      formData.append('location', talent.location);
      formData.append('desc', talent.desc);
      axios.put(BACKEND_COMMAN_URL + '/api/editCompany/' + talent._id, formData, headers)
        .then(res => {
          if (res.status === 200) {
            sessionStorage.setItem('talent', JSON.stringify(res.data.data));
            navigate('/talent_dashboard');
          }
          else {
            e.preventDefault();
          }
        })
        .catch(err => {
          console.log(err);
        });
      setTalent({
        company_name: '',
        email: '',
        phone: '',
        address: '',
        location: '',
        desc: '',
        photo: '',
        password: '',
      });
      document.getElementById('UploadedImage').classList.remove('d-block');
      seterr('');
      setFile('');
      setsuc("Form Submitted.");
    }
  }

  const fetchData = async () => {
    let fdata = jwt_decode(JSON.stringify(sessionStorage.getItem('talent'))).data;
    setTalent({
      _id: fdata._id,
      company_name: fdata.company_name,
      email: fdata.email,
      phone: fdata.phone,
      address: fdata.address,
      location: fdata.location,
      desc: fdata.desc,
      photo: fdata.photo,
      password: fdata.password
    });
    setFile(BACKEND_COMMAN_URL + "/" + jwt_decode(JSON.stringify(sessionStorage.getItem('talent'))).data.photo);
  }

  const handleChange = (e) => {
    setTalent({ ...talent, [e.target.name]: e.target.value });
  }

  const handlePhoto = (e) => {
    if (e.target.files) {
      document.getElementById('UploadedImage').classList.add('d-block');
    }
    setFile(URL.createObjectURL(e.target.files[0]));
    setTalent({ ...talent, photo: e.target.files[0] });
  }

  useEffect(() => {
    if (isLoggedIn === null) {
      navigate("/talent");
    } else {
      navigate("/talent_profile");
      fetchData();
    }
  }, [navigate, isLoggedIn]);

  return (
    <>
      <Header />
      <div className="ml-305 p-2 md:p-6 2xl:p-10 bg-color">
        <br /><br /><br /><br />
        <div className='container'>
          <form className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark" encType='multipart/form-data' onSubmit={handleSubmit}>
            <div className="relative z-20 h-72 md:h-65">
              <img src="/assets/img/bg/4.png" alt="profile cover" className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center" />
              <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
              </div>
            </div>
            <div className="relative px-4 pb-6 lg:pb-8 xl:pb-11.5">
              <div className="absolute -top-48 -translate-x-2/4 left-1/2 z-30 mx-auto mt-22 p-3 max-w-30 rounded-full bg-white/20 backdrop-blur sm:max-w-44 sm:p-3">
                <div className="relative drop-shadow-2">
                  <img src={file} id="UploadedImage" alt="profile" className='profile_img rounded-full' />
                  <label htmlFor="profile" className="w-8 h-8 absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2">
                    <svg className="fill-current" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z" />
                    </svg>
                    <input type="file" name="profile" id="profile" className="sr-only" onChange={handlePhoto} />
                  </label>
                </div>
              </div>
              <div className="mt-28">
                {err ? <p className='error'>{err}</p> : ''}
                {suc ? <p className='success'>{suc}</p> : ''}
                <div className="mx-auto max-w-180 mb-3">
                  <h5>Company Name</h5>
                  <input type="text" onChange={handleChange} name="company_name" id='company_name' className="mt-4.5 w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" value={talent.company_name} placeholder="Enter Your Company Address" />
                </div>
                <div className="mx-auto max-w-180 mb-3">
                  <h5>Email Id</h5>
                  <input type="text" onChange={handleChange} name="email" id='email' className="mt-4.5 w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" value={talent.email} placeholder="Enter Your Company Address" />
                </div>
                <div className="mx-auto max-w-180 mb-3">
                  <h5>Password</h5>
                  <input type="password" onChange={handleChange} name="password" id='password' className="mt-4.5 w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" placeholder="Enter New Password" />
                </div>
                <div className="mx-auto max-w-180 mb-3">
                  <h5>Phone No.</h5>
                  <input type="text" onChange={handleChange} name="phone" id='phone' className="mt-4.5 w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" value={talent.phone} placeholder="Enter Your Company Address" />
                </div>
                <div className="mx-auto max-w-180 mb-3">
                  <h5>Description</h5>
                  <textarea onChange={handleChange} name="desc" id='desc' rows='6' className="mt-4.5 w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" value={talent.desc} placeholder="Enter Your Company Address"></textarea>
                </div>
                <div className="mx-auto max-w-180 mb-4">
                  <h5>Address</h5>
                  <input type="text" onChange={handleChange} name="address" id='address' className="mt-4.5 w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" value={talent.address} placeholder="Enter Your Company Address" />
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

export default Talent_profile;