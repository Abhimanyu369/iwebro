import axios from "axios";
import React, { useState } from 'react';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BACKEND_COMMAN_URL, headers } from "../../../api/Api";

const Current = () => {

  const [job, setJob] = useState([]);
  const [marquee, setMarquee] = useState([]);

  const fetchData = async () => {
    try {
      let data = await axios.get(BACKEND_COMMAN_URL + '/api/view_job?limit=4', headers);
      if (data.status === 200) {
        setJob(data.data.data);
      }
      else {
        setJob([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const fetchData2 = async () => {
    try {
      let data = await axios.get(BACKEND_COMMAN_URL + '/api/view_marquee', headers);
      if (data.status === 200) {
        setMarquee(data.data.data);
      }
      else {
        setMarquee([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  return (
    <>
      {job.length !== 0 ?
        <div className="current pt-5">
          <div className="container">
            <div className="section_bg px-4  py-5">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <h6 className="sub-title wow fadeInDown" data-wow-delay='0.6s'>Requirement</h6>
                    <marquee scrollamount="12">
                      <div className="d-flex align-items-center">
                        {marquee.map((v) => {
                          return (
                            <div className="text-center px-1" key={v.title}><h5 className="mb-0 section-inner px-4 py-2 text-capitalize">{v.title}</h5></div>
                          )
                        })}
                      </div>
                    </marquee>
                    <p className="col-md-8 mx-auto mb-0 wow animated fadeInDown" data-wow-duration="1.5s">iWebro Talento have a thought to build talent pool that only work for you! Currently, we are hiring in 20+ technologies globally.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                {job.map((v) => {
                  return (
                    <div className="col-xxl-3 col-lg-4 col-md-6 px-1" key={v._id}>
                      <div className="current-inner py-3 mb-5 wow animated fadeInUp">
                        <div className="d-flex justify-content-between align-items-center px-3 mb-3">
                          <h5 className="text-capitalize mb-0">{v.jobName} </h5>
                          <Link className="py-2 px-3 text-white current-btn" style={{ borderRadius: '10px' }} to={'/developer?id=' + v._id + '&companyId=' + v.companyId + '&name=' + v.jobName} state={{ data: v.jobName }}>Apply</Link>
                        </div>
                        <div className="price px-3 mb-2 flex-wrap d-flex" style={{ backgroundColor: 'transparent' }}>
                          <span className="py-2 px-2 my-2 me-1 d-flex text-dark border-main"><img src="/assets/img/icon/21.png" alt="img" className="me-1" style={{ width: '20px', objectFit: 'cover', height: '20px' }} /> {v.salary} </span>
                          <span className="py-2 px-2 my-2 me-1 d-flex text-dark"><img src="/assets/img/icon/22.png" alt="img" className="me-2" style={{ width: '20px', objectFit: 'cover', height: '20px' }} /> {v.noResources} resources </span>
                          <span className="py-2 px-2 my-2 me-1 d-flex text-dark"><img src="/assets/img/icon/20.png" alt="img" className="me-2" style={{ width: '20px', objectFit: 'cover', height: '20px' }} /> {v.contractTime} month contract </span>
                        </div>
                        <p className="text-dark px-3 py-2 mb-0">Technology Requirement</p>
                        <div className="d-flex flex-wrap justify-content-between align-items-center ps-3 cat">
                          <div className="d-flex flex-wrap">
                            {v.technology.map((tec) => {
                              return (
                                <span className="py-2 px-3 text-dark border-main me-2 mb-2" key={tec}>{tec}</span>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="text-center">
                <Link to='/active-requirements' className="text-center btn btn-base page-scroll px-sm-5 wow animated fadeInLeft" style={{ borderRadius: '5px' }} href="#demo" data-wow-delay='1.2s'>Show More</Link>
              </div>
            </div>
          </div>
        </div >
        : ''}
    </>
  )
}

export default Current;