import React from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import axios from "axios";
import { useState, useEffect } from "react";
import {BACKEND_COMMAN_URL, headers } from "../../api/Api";

const Developer_profile = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const [job,setJob] = useState([]);

  const fetchData = async ()=>{
    try {
      let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_job_name/'+id, headers);
      if(data.status === 200){
        setJob(data.data.data);
      }
      else{
        setJob([]);
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
          <h2 className="text-title-md2 font-bold text-black mb-0 text-capitalize"> Apply For {job.jobName} </h2>
        </div>
        <div className="rounded-sm border border-stroke bg-white px-4 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 mb-24">
          <div className="max-w-full overflow-x-auto">
          {job.length !== 0 ? 
            <table className="w-full table-auto">
              <thead>
                <tr className='text-dark'>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Company Name</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Resources</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Contract Time</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Salary</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Technology</th>
                </tr>
              </thead>
              <tbody>
                    {<tr key={job._id}>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{job.companyId.company_name}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{job.noResources}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{job.contractTime}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{job.salary}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{job.technology.join(', ')}</td>
                    </tr>}
              </tbody>
            </table>
            : <h3 className='mb-0 pb-4'>Data Not Found</h3>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Developer_profile;