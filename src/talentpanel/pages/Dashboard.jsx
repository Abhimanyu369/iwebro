import React, { useEffect, useState } from 'react';
import Header from '../../talentpanel/components/Header';
import Footer from '../../talentpanel/components/Footer';
import { BACKEND_COMMAN_URL, headers } from '../../api/Api';
import axios from 'axios';
import Chart from 'react-google-charts';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const Dashboard = () => {

    const navigate = useNavigate();
    const ldata = JSON.parse(sessionStorage.getItem('talent'));
    const [isLoggedIn] = useState(ldata);
    const [data, setData] = useState({});
    const [data2, setData2] = useState({});
    const [data3, setData3] = useState({});
    const LineChartOptions1 = {
      hAxis: {
        title: 'Month',
      },
      vAxis: {
        title: 'No. of job requirements',
      },
      series: {
        1: { curveType: 'function' },
      },
    };
    const LineChartOptions2 = {
      hAxis: {
        title: 'Month',
      },
      vAxis: {
        title: 'No. of developers',
      },
      series: {
        1: { curveType: 'function' },
      },
    };
    
    const fetchData1 = async ()=>{
      let data = await axios.get(BACKEND_COMMAN_URL+'/api/fetch_data4/'+jwt_decode(JSON.stringify(sessionStorage.getItem('talent'))).data._id, headers);
      if(data.status === 200){
        setData(data.data.data);
      }
    }
  
    const fetchData2 = async ()=>{
      let data = await axios.get(BACKEND_COMMAN_URL+'/api/fetch_data5/'+jwt_decode(JSON.stringify(sessionStorage.getItem('talent'))).data._id, headers);
      if(data.status === 200){
        setData2(data.data.data);
      }
    }
  
    const fetchData3 = async ()=>{
      let data = await axios.get(BACKEND_COMMAN_URL+'/api/fetch_data6/'+jwt_decode(JSON.stringify(sessionStorage.getItem('talent'))).data._id, headers);
      if(data.status === 200){
        setData3(data.data);
      }
    }

    useEffect(()=>{
      if (isLoggedIn === null) {
        navigate("/talent");
      } else {
        navigate("/talent_dashboard");
        fetchData1();
        fetchData2();
        fetchData3();
      }
    },[navigate,isLoggedIn]);

  return (
    <>
    <Header />
    <div className='flex flex-col flex-1 relative overflow-x-hidden overflow-y-auto bg-color h-screen'>
        <br /><br /><br /><br />
        <main>
          <div className="ml-305 p-4 md:p-6 2xl:p-10">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
              <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark px-3">
                <div className="h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                  <svg className="fill-primary" width="22" height="16" viewBox="0 0 22 16" fill="#000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"/>
                    <path d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"/>
                  </svg>
                </div>
                <div className="mt-4">
                  <div className='mb-4'>
                    <h4 className="text-title-md font-bold text-black mb-0">
                      {data3.data4 ? data3.data4+' Developers' : '0 Developers' } 
                    </h4>
                  </div>
                  <span className="flex justify-end gap-1 text-sm font-medium text-meta-3">Total Developers</span>
                </div>
              </div>
              <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark px-3">
                <div className="h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="22" height="22" viewBox="0 0 100 100"><rect x="43.93" y="68.27" width="36.07" height="7.99" rx="2" ry="2"/><path d="M33.82,76.26h-4a2,2,0,0,1-2-2v-4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v4A1.9,1.9,0,0,1,33.82,76.26Z" fillRule="evenodd"/><path d="M33.82,58.41h-4a2,2,0,0,1-2-2v-4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v4A1.9,1.9,0,0,1,33.82,58.41Z" fillRule="evenodd"/><rect x="43.93" y="50.42" width="36.07" height="7.99" rx="2" ry="2"/><rect x="49.92" y="32.57" width="30.08" height="7.99" rx="2" ry="2"/><path d="M47.55,26.33l-2.12-2.12a1.44,1.44,0,0,0-2.12,0L30.08,37.32l-5.37-5.24a1.44,1.44,0,0,0-2.12,0L20.47,34.2a1.44,1.44,0,0,0,0,2.12l7.36,7.36a3,3,0,0,0,4.24,0L47.55,28.46A1.69,1.69,0,0,0,47.55,26.33Z" fillRule="evenodd"/></svg>
                </div>
                <div className="mt-4">
                  <div className='mb-4'>
                    <h4 className="text-title-md font-bold text-black mb-0">
                    {data3.data1 ? data3.data1+' Requirements' : '0 Requirements' }
                    </h4>
                  </div>
                  <span className="flex justify-end gap-1 text-sm font-medium text-meta-3">Total Requirements</span>
                </div>
              </div>
              <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark px-3">
                <div className="h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                  <svg className="fill-primary" width="22" height="22" viewBox="0 0 22 22" fill="#000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.3813 3.85003 21.3813H18.1157C18.975 21.3813 19.8 21.0031 20.35 20.3844C20.9 19.7656 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3531C18.9407 19.6625 18.5625 19.8344 18.15 19.8344H3.85003C3.43753 19.8344 3.05941 19.6625 2.78441 19.3531C2.50941 19.0438 2.37191 18.6313 2.44066 18.2188L4.12503 3.43751C4.19378 2.71563 4.81253 2.16563 5.56878 2.16563H16.4313C17.1532 2.16563 17.7719 2.71563 17.875 3.43751L19.5938 18.2531C19.6282 18.6656 19.4907 19.0438 19.2157 19.3531Z"/>
                    <path d="M14.3345 5.29375C13.922 5.39688 13.647 5.80938 13.7501 6.22188C13.7845 6.42813 13.8189 6.63438 13.8189 6.80625C13.8189 8.35313 12.547 9.625 11.0001 9.625C9.45327 9.625 8.1814 8.35313 8.1814 6.80625C8.1814 6.6 8.21577 6.42813 8.25015 6.22188C8.35327 5.80938 8.07827 5.39688 7.66577 5.29375C7.25327 5.19063 6.84077 5.46563 6.73765 5.87813C6.6689 6.1875 6.63452 6.49688 6.63452 6.80625C6.63452 9.2125 8.5939 11.1719 11.0001 11.1719C13.4064 11.1719 15.3658 9.2125 15.3658 6.80625C15.3658 6.49688 15.3314 6.1875 15.2626 5.87813C15.1595 5.46563 14.747 5.225 14.3345 5.29375Z"/>
                  </svg>
                </div>
                <div className="mt-4">
                  <div className='mb-4'>
                    <h4 className="text-title-md font-bold text-black mb-0">
                    {data3.data2 ? data3.data2+' Approval Jobs' : '0 Approval Jobs' } 
                    </h4>
                  </div>
                  <span className="flex justify-end gap-1 text-sm font-medium text-meta-3">Total Approval Jobs</span>
                </div>
              </div>
              <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark px-3">
                <div className="h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                   <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" width="22" height="18" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 502 511.82"><path fillRule="nonzero" d="M279.75 471.21c14.34-1.9 25.67 12.12 20.81 25.75-2.54 6.91-8.44 11.76-15.76 12.73a260.727 260.727 0 0 1-50.81 1.54c-62.52-4.21-118.77-31.3-160.44-72.97C28.11 392.82 0 330.04 0 260.71 0 191.37 28.11 128.6 73.55 83.16S181.76 9.61 251.1 9.61c24.04 0 47.47 3.46 69.8 9.91a249.124 249.124 0 0 1 52.61 21.97l-4.95-12.96c-4.13-10.86 1.32-23.01 12.17-27.15 10.86-4.13 23.01 1.32 27.15 12.18L428.8 68.3a21.39 21.39 0 0 1 1.36 6.5c1.64 10.2-4.47 20.31-14.63 23.39l-56.03 17.14c-11.09 3.36-22.8-2.9-26.16-13.98-3.36-11.08 2.9-22.8 13.98-26.16l4.61-1.41a210.71 210.71 0 0 0-41.8-17.12c-18.57-5.36-38.37-8.24-59.03-8.24-58.62 0-111.7 23.76-150.11 62.18-38.42 38.41-62.18 91.48-62.18 150.11 0 58.62 23.76 111.69 62.18 150.11 34.81 34.81 81.66 57.59 133.77 61.55 14.9 1.13 30.23.76 44.99-1.16zm-67.09-312.63c0-10.71 8.69-19.4 19.41-19.4 10.71 0 19.4 8.69 19.4 19.4V276.7l80.85 35.54c9.8 4.31 14.24 15.75 9.93 25.55-4.31 9.79-15.75 14.24-25.55 9.93l-91.46-40.2c-7.35-2.77-12.58-9.86-12.58-18.17V158.58zm134.7 291.89c-15.62 7.99-13.54 30.9 3.29 35.93 4.87 1.38 9.72.96 14.26-1.31 12.52-6.29 24.54-13.7 35.81-22.02 5.5-4.1 8.36-10.56 7.77-17.39-1.5-15.09-18.68-22.74-30.89-13.78a208.144 208.144 0 0 1-30.24 18.57zm79.16-69.55c-8.84 13.18 1.09 30.9 16.97 30.2 6.21-.33 11.77-3.37 15.25-8.57 7.86-11.66 14.65-23.87 20.47-36.67 5.61-12.64-3.13-26.8-16.96-27.39-7.93-.26-15.11 4.17-18.41 11.4-4.93 10.85-10.66 21.15-17.32 31.03zm35.66-99.52c-.7 7.62 3 14.76 9.59 18.63 12.36 7.02 27.6-.84 29.05-14.97 1.33-14.02 1.54-27.9.58-41.95-.48-6.75-4.38-12.7-10.38-15.85-13.46-6.98-29.41 3.46-28.34 18.57.82 11.92.63 23.67-.5 35.57zM446.1 177.02c4.35 10.03 16.02 14.54 25.95 9.96 9.57-4.4 13.86-15.61 9.71-25.29-5.5-12.89-12.12-25.28-19.69-37.08-9.51-14.62-31.89-10.36-35.35 6.75-.95 5.03-.05 9.94 2.72 14.27 6.42 10.02 12 20.44 16.66 31.39z"/></svg>
                </div>
                <div className="mt-4">
                  <div className='mb-4'>
                    <h4 className="text-title-md font-bold text-black mb-0">
                      {data3.data3 ? data3.data3+' Pending Jobs' : '0 Pending Jobs' }
                    </h4>
                  </div>
                  <span className="flex justify-end gap-1 text-sm font-medium text-meta-5">Total Pending Jobs</span>
                </div>
              </div>
            </div>
            <div className='grid gap-4 md:grid-cols-1 lg:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5'>
              <div className='text-center border border-stroke mt-4 px-1 bg-white'>
                <Chart height="410px" chartType="LineChart" loader={<div className='my-4'>Loading Chart</div>} data={data} options={LineChartOptions1}/>
                <h4 className='mb-4'>Job Requirements Graph</h4>
              </div>
              <div className='text-center border border-stroke mt-4 px-1 bg-white'>
                <Chart height="410px" chartType="LineChart" loader={<div className='my-4'>Loading Chart</div>} data={data2} options={LineChartOptions2}/>
                <h4 className='mb-4'>Developers Graph</h4>
              </div>
            </div>
            {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 mb-20">
              <div className="col-span-12 xl:col-span-8">
                <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                  <h4 className="mb-6 text-xl font-bold text-black"> Top Channels </h4>
                  <div className="flex flex-col">
                    <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
                      <div className="p-2.5 xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">Source</h5>
                      </div>
                      <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">Visitors</h5>
                      </div>
                      <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">Revenues</h5>
                      </div>
                      <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">Sales</h5>
                      </div>
                      <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">Conversion</h5>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
                      <div className="flex items-center gap-3 p-2.5 xl:p-5">
                        <div className="flex-shrink-0">
                          <img src="/assets/img/brand/brand-01.svg" alt="Brand" />
                        </div>
                        <p className="hidden font-medium text-black sm:block">
                          Google
                        </p>
                      </div>
                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="font-medium text-black">3.5K</p>
                      </div>

                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="font-medium text-meta-3">$5,768</p>
                      </div>

                      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="font-medium text-black">590</p>
                      </div>

                      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="font-medium text-meta-5">4.8%</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
                      <div className="flex items-center gap-3 p-2.5 xl:p-5">
                        <div className="flex-shrink-0">
                          <img src="/assets/img/brand/brand-02.svg" alt="Brand" />
                        </div>
                        <p className="font-medium hidden text-black sm:block">Twitter</p>
                      </div>

                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="font-medium text-black">2.2K</p>
                      </div>

                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="font-medium text-meta-3">$4,635</p>
                      </div>

                      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="font-medium text-black">467</p>
                      </div>

                      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="font-medium text-meta-5">4.3%</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
                      <div className="flex items-center gap-3 p-2.5 xl:p-5">
                        <div className="flex-shrink-0">
                          <img src="/assets/img/brand/brand-03.svg" alt="Brand" />
                        </div>
                        <p className="hidden font-medium text-black sm:block">Github</p>
                      </div>

                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="font-medium text-black">2.1K</p>
                      </div>

                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="font-medium text-meta-3">$4,290</p>
                      </div>

                      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="font-medium text-black">420</p>
                      </div>

                      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="font-medium text-meta-5">3.7%</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-5">
                      <div className="flex items-center gap-3 p-2.5 xl:p-5">
                        <div className="flex-shrink-0">
                          <img src="/assets/img/brand/brand-05.svg" alt="Brand" />
                        </div>
                        <p className="hidden font-medium text-black sm:block">Facebook</p>
                      </div>

                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="font-medium text-black">1.2K</p>
                      </div>

                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="font-medium text-meta-3">$2,740</p>
                      </div>

                      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="font-medium text-black">230</p>
                      </div>

                      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="font-medium text-meta-5">1.9%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
              <div className="col-span-12 rounded-sm border border-stroke bg-white py-3 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4 px-3">
                <h4 className="mb-6 px-7.5 text-xl font-bold text-black"> Chats </h4>
                <div>
                  <span className="flex items-center gap-5 pb-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4">
                    <div className="relative h-14 w-14 rounded-full">
                      <img src="/assets/img/user/user-02.png" alt="User" />
                      <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                      <div>
                        <h5 className="font-medium text-black mb-0">Devid Heilo</h5>
                        <p className='mb-0'>
                          <span className="text-sm font-medium">Hello, how are you?</span>
                          <span className="text-xs"> . 12 min</span>
                        </p>
                      </div>
                    </div>
                  </span>
                  <span className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4">
                    <div className="relative h-14 w-14 rounded-full">
                      <img src="/assets/img/user/user-03.png" alt="User" />
                      <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                      <div>
                        <h5 className="font-medium text-black mb-0">Jubin Jack</h5>
                        <p className='mb-0'>
                          <span className="text-sm font-medium text-black">I really love that!</span>
                          <span className="text-xs"> . Oct 23</span>
                        </p>
                      </div>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                        <span className="text-sm font-medium text-white">3</span>
                      </div>
                    </div>
                  </span>
                  <span className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4">
                    <div className="relative h-14 w-14 rounded-full">
                      <img src="/assets/img/user/user-05.png" alt="User" />
                      <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-6"></span>
                    </div>
          
                    <div className="flex flex-1 items-center justify-between">
                      <div>
                        <h5 className="font-medium mb-0">Wilium Smith</h5>
                        <p className='mb-0'>
                          <span className="text-sm font-medium">Where are you now?</span>
                          <span className="text-xs"> . 10:12 PM</span>
                        </p>
                      </div>
                    </div>
                  </span>
                  <span className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4">
                    <div className="relative h-14 w-14 rounded-full">
                      <img src="/assets/img/user/user-01.png" alt="User" />
                      <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                      <div>
                        <h5 className="font-medium text-black mb-0">
                          Henry Deco
                        </h5>
                        <p className='mb-0'>
                          <span className="text-sm font-medium text-black">Thank you so much!</span>
                          <span className="text-xs"> . Sun</span>
                        </p>
                      </div>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                        <span className="text-sm font-medium text-white">2</span>
                      </div>
                    </div>
                  </span>
                  <span className="flex items-center gap-5 pt-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4">
                    <div className="relative h-14 w-14 rounded-full">
                      <img src="/assets/img/user/user-07.png" alt="User" />
                      <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-6"></span>
                    </div>
          
                    <div className="flex flex-1 items-center justify-between">
                      <div>
                        <h5 className="font-medium mb-0">Luie Smith</h5>
                        <p className='mb-0'>
                          <span className="text-sm font-medium">I am fine!</span>
                          <span className="text-xs"> . Sep 20</span>
                        </p>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </main>
      </div>
   <Footer />
    </>
  )
}

export default Dashboard;