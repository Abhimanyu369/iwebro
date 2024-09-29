import React from 'react';
import Header from '../../adminpanel/component/Header';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_COMMAN_URL, headers } from "../../api/Api";

const Add_developer = () => {

  const navigate = useNavigate();
  const [err, seterr] = useState('');
  const [suc, setsuc] = useState('');
  const [data, setData] = useState({
    jobName: '',
    first_name: '',
    last_name: '',
    designation: '',
    email: '',
    framework: '',
    database: '',
    operating_system: '',
    web_server: '',
    programming_language: '',
    browser: '',
    linkedin: '',
    expertise: '',
    experience: '',
    rate: '',
    technology: '',
    availability: '',
    cv: ''
  });

  const fetchData = async (data) => {

    const formData = new FormData();
    formData.append('jobName', data.jobName);
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    formData.append('designation', data.designation);
    formData.append('email', data.email);
    formData.append('framework', data.framework);
    formData.append('database', data.database);
    formData.append('operating_system', data.operating_system);
    formData.append('web_server', data.web_server);
    formData.append('programming_language', data.programming_language);
    formData.append('browser', data.browser);
    formData.append('linkedin', data.linkedin);
    formData.append('expertise', data.expertise);
    formData.append('experience', data.experience);
    formData.append('rate', data.rate);
    formData.append('technology', data.technology);
    formData.append('availability', data.availability);
    formData.append('cv', data.cv);

    let fdata = await axios.post(BACKEND_COMMAN_URL + '/api/add_apply_developer', formData, headers);
    if (fdata.status === 200) {
      navigate('/View_apply_developer');
    }
    else {
      navigate('/add_developer');
    }
  }

  const formSubmit = (e) => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (!data.first_name || data.first_name === '') {
      e.preventDefault();
      seterr("First Name Required.");
      setsuc('');
      document.getElementById('first_name').focus();
      return false;
    }
    else if (!data.last_name || data.last_name === '') {
      e.preventDefault();
      seterr("Last Name Required.");
      setsuc('');
      document.getElementById('last_name').focus();
      return false;
    }
    else if (!data.designation || data.designation === '') {
      e.preventDefault();
      seterr("Designation Required.");
      setsuc('');
      document.getElementById('designation').focus();
      return false;
    }
    else if (!data.expertise || data.expertise === '') {
      e.preventDefault();
      seterr("Expertise Required.");
      setsuc('');
      document.getElementById('expertise').focus();
      return false;
    }
    else if (!data.email || data.email === '') {
      e.preventDefault();
      seterr("Email Required.");
      setsuc('');
      document.getElementById('email').focus();
      return false;
    }
    else if (!regex.test(data.email)) {
      e.preventDefault();
      seterr("Invalid Email.");
      setsuc('');
      document.getElementById('email').focus();
      return false;
    }
    else if (!data.email || data.email === '') {
      e.preventDefault();
      seterr("Email Required.");
      setsuc('');
      document.getElementById('email').focus();
      return false;
    }
    else if (!data.technology || data.technology === '') {
      e.preventDefault();
      seterr("Technology Required.");
      setsuc('');
      document.getElementById('technology').focus();
      return false;
    }
    else if (!data.framework || data.framework === '') {
      e.preventDefault();
      seterr("Framework Required.");
      setsuc('');
      document.getElementById('framework').focus();
      return false;
    }
    else if (!data.programming_language || data.programming_language === '') {
      e.preventDefault();
      seterr("Programming Language Required.");
      setsuc('');
      document.getElementById('programming_language').focus();
      return false;
    }
    else if (!data.browser || data.browser === '') {
      e.preventDefault();
      seterr("Browser Required.");
      setsuc('');
      document.getElementById('browser').focus();
      return false;
    }
    else if (!data.database || data.database === '') {
      e.preventDefault();
      seterr("Database Required.");
      setsuc('');
      document.getElementById('database').focus();
      return false;
    }
    else if (!data.web_server || data.web_server === '') {
      e.preventDefault();
      seterr("Web Server Required.");
      setsuc('');
      document.getElementById('web_server').focus();
      return false;
    }
    else if (!data.operating_system || data.operating_system === '') {
      e.preventDefault();
      seterr("Operting System Required.");
      setsuc('');
      document.getElementById('operating_system').focus();
      return false;
    }
    else if (!data.linkedin || data.linkedin === '') {
      e.preventDefault();
      seterr("LinkedIn Link Required.");
      setsuc('');
      document.getElementById('linkedin').focus();
      return false;
    }
    else if (!data.rate || data.rate === '') {
      e.preventDefault();
      seterr("Rate Required.");
      setsuc('');
      document.getElementById('rate').focus();
      return false;
    }
    else if (!data.experience || data.experience === '') {
      e.preventDefault();
      seterr("Experience Required.");
      setsuc('');
      document.getElementById('experience').focus();
      return false;
    }
    else if (!data.cv || data.cv === '') {
      e.preventDefault();
      seterr("Upload Your Resume.");
      setsuc('');
      document.getElementById('cv').focus();
      return false;
    }
    else if (!data.availability || data.availability === '') {
      e.preventDefault();
      seterr("Availability Required.");
      setsuc('');
      return false;
    }
    else {
      fetchData(data);
      seterr('');
      setsuc("Form Submitted.");
      setData({
        jobName: '',
        first_name: '',
        last_name: '',
        designation: '',
        email: '',
        framework: '',
        database: '',
        operating_system: '',
        web_server: '',
        programming_language: '',
        browser: '',
        linkedin: '',
        expertise: '',
        experience: '',
        rate: '',
        technology: '',
        availability: '',
        cv: ''
      })
      e.preventDefault();
    }
  }

  const handlePdf = (e) => {
    setData({ ...data, cv: e.target.files[0] });
  };

  return (
    <><Header />
      <div className="ml-305 p-4 md:p-6 2xl:p-10">
        <div className="container">
          <form method="post" onSubmit={formSubmit} encType="multipart/form-data" className='flex flex-wrap'>
            <div className="w-full">
              <h2 className="mb-4" style={{ letterSpacing: '3px', fontWeight: 600 }}>Add Apply Developer </h2>
              {err ? <p style={{ color: 'red' }}>{err}</p> : ''}
              {suc ? <p style={{ color: 'green' }}>{suc}</p> : ''}
            </div>
            <div className="w-full px-3 mb-4">
              <label>Apply Job:-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="jobName" id='jobName' placeholder="Job Name" onChange={(e) => setData({ ...data, jobName: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4">
              <label>Enter First Name:-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="first_name" id='first_name' placeholder="First Name" onChange={(e) => setData({ ...data, first_name: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4">
              <label>Enter Last Name:-</label>
              <input type="text" name="last_name" id='last_name' className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" placeholder="Last Name" onChange={(e) => setData({ ...data, last_name: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4">
              <label>Designation:-</label>
              <input type="text" name="designation" id='designation' className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" placeholder="Designation" onChange={(e) => setData({ ...data, designation: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4">
              <label>Expertise:-</label>
              <input type="text" name="expertise" id='expertise' className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" placeholder="Expertise" onChange={(e) => setData({ ...data, expertise: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4">
              <label>Enter Email :-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="email" id='email' placeholder="Email" onChange={(e) => setData({ ...data, email: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4">
              <label>Enter Rate :-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="number" name="rate" id='rate' placeholder="Rate" onChange={(e) => setData({ ...data, rate: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4">
              <label>Technology:-</label>
              <input type="text" name="technology" id='technology' className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" placeholder="Technology" onChange={(e) => setData({ ...data, technology: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4">
              <label>Framework:-</label>
              <input type="text" name="framework" id='framework' className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" placeholder="Framework" onChange={(e) => setData({ ...data, framework: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4">
              <label>Programming Language:-</label>
              <input type="text" name="programming_language" id='programming_language' className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" placeholder="Programming Language" onChange={(e) => setData({ ...data, programming_language: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4">
              <label>Browser:-</label>
              <input type="text" name="browser" id='browser' className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" placeholder="Browser" onChange={(e) => setData({ ...data, browser: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4">
              <label>Database:-</label>
              <input type="text" name="database" id='database' className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" placeholder="Database" onChange={(e) => setData({ ...data, database: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4">
              <label>Web Server:-</label>
              <input type="text" name="web_server" id='web_server' className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" placeholder="Web Server" onChange={(e) => setData({ ...data, web_server: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4">
              <label>Operating System:-</label>
              <input type="text" name="operating_system" id='operating_system' className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" placeholder="Operating System" onChange={(e) => setData({ ...data, operating_system: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4">
              <label>Enter Years of Experience :-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="number" name="experience" id='experience' min="0" placeholder="Years of Experience" onChange={(e) => setData({ ...data, experience: e.target.value })} />
            </div><br />
            <div className="md:w-1/3 w-full px-3 mb-4" id="tec">
              <label>Enter Linkedin URL :-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="linkedin" id='linkedin' placeholder="Linkedin URL" onChange={(e) => setData({ ...data, linkedin: e.target.value })} />
            </div>
            <div className="w-full px-3 mb-4" id="tec">
              <label>Upload Your CV :-</label>
              <input type="file" accept=".pdf" name='cv' id='cv' className="form-control pad" onChange={handlePdf} />
            </div>
            <div className="w-full px-3 mb-4" id="tec">
              <label>Choose Availability :-</label>
              <div className="flex flex-wrap justify-content-between">
                <div style={{ fontSize: '16px' }}><input className="me-2" value={'Immediately'} id='Immediately' type="radio" name="availability" onChange={(e) => setData({ ...data, availability: e.target.value })} /><label htmlFor='Immediately'>Immediately</label></div>
                <div style={{ fontSize: '16px' }}><input className="me-2" value={'Less Than 2 Weeks'} id='Less Than 2 Weeks' type="radio" name="availability" onChange={(e) => setData({ ...data, availability: e.target.value })} /><label htmlFor='Less Than 2 Weeks'>Less Than 2 Weeks</label></div>
                <div style={{ fontSize: '16px' }}><input className="me-2" value={'More Than 2 Weeks'} id='More Than 2 Weeks' type="radio" name="availability" onChange={(e) => setData({ ...data, availability: e.target.value })} /><label htmlFor='More Than 2 Weeks'>More Than 2 Weeks</label></div>
                <div style={{ fontSize: '16px' }}><input className="me-2" value={'Max 4 Weeks'} id='Max 4 Weeks' type="radio" name="availability" onChange={(e) => setData({ ...data, availability: e.target.value })} /><label htmlFor='Max 4 Weeks'>Max 4 Weeks</label></div>
              </div>
            </div>
            <input type="submit" name="submit" value="Submit" className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Add_developer;