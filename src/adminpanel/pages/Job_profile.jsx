import React from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import axios from "axios";
import { useState, useEffect } from "react";
import {BACKEND_COMMAN_URL, headers } from "../../api/Api";
import { Link, useLocation } from 'react-router-dom';

const Job_profile = () => {

  const url = new URLSearchParams(window.location.search);
  const data = useLocation();
  const id = url.get('id');
  const company_name = data.state.company_name;
  const job_name = data.state.job_name;

  const [dev,setDev] = useState([]);

  const fetchData = async ()=>{
    try {
      let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_developer_job/'+id, headers);
      if(data.status === 200){
        setDev(data.data.data);
      }
      else{
        setDev([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <>
      <Header />
      <div className="ml-305 px-4 md:px-6 2xl:px-10">
        <div className="mb-12  flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-bold text-black mb-0 text-capitalize"> Apply For {job_name} </h2>
          <h2 className="text-title-md2 font-bold text-black mb-0 text-capitalize">{company_name} </h2>
        </div>
        <div className="rounded-sm border border-stroke bg-white px-4 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 mb-24">
          <div className="max-w-full overflow-x-auto">
          {dev.length !== 0 ? 
          <table className="table-auto" style={{width :'2200px'}}>
              <thead>
                <tr className='text-dark'>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Full Name</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Designation</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Expertise</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Technology</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Framework</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Programming Language</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Browser</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Database</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Web Server</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Operating System</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Email</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Rate</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Experience</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Availability</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Linkedin</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Resume</th> 
                </tr>
              </thead>
              <tbody>
                {dev.map((v)=>{
                  return (
                    <tr key={v._id}>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.full_name}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.designation}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.expertise}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.technology}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.framework}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.programming_language}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.browser}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.database}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.web_server}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.operating_system}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.email}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.rate} $/Month</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.experience} years</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.availability}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'><Link className='text-[#0d6efd]' to={v.linkedin} target="_blank">Linkedin</Link></td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'><Link className='text-[#0d6efd]' to={BACKEND_COMMAN_URL+v.cv}>Resume</Link></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            : <h3 className='mb-0 pb-4'>Not a Developer Has Applied.</h3>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Job_profile;