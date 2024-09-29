import axios from "axios";
import React, { useState } from 'react';
import { useEffect } from "react";
import { BACKEND_COMMAN_URL, headers } from "../../../api/Api";
import { Link } from "react-router-dom";

const Current = () => {

  const [job, setJob] = useState([]);

  const fetchData = async () => {
    try {
      let data = await axios.get(BACKEND_COMMAN_URL + '/api/view_job', headers);
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {job.length !== 0 ?
        <div className="current py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h6 className="sub-title wow animated fadeInDown" data-wow-delay='0.6s'>Requirement</h6>
                  <h2 style={{ letterSpacing: '2px', fontSize: '40px', fontWeight: '900' }} className="wow animated fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.3s">Lorem  Ipsum <span className="text-primary">Our d ak h sas</span></h2>
                  <p className="mb-0 wow animated fadeInDown" data-wow-duration="1.5s">We thought hiring 100+ engineers would be extremely hard, but the team at Supersourcing was able to deliver on time with no hiccups. All of the Top.</p>
                </div>
              </div>
            </div>
            <div className="row job overflow-auto">
              <div className="col-lg-4 col-md-6 d-md-block d-none">
                <img src="/assets/img/bg/1.png" alt="img" className="p_sticky wow animated fadeInLeft" />
              </div>
              <ul className="col-lg-8 col-md-6 mx-auto mb-0 job-box">
                {job.map((v) => {
                  return (
                    <li className="d-grid job-inner" key={v._id}>
                      <>
                        <div className="current-inner py-4 mb-4 wow animated fadeInRight">
                          <div className="d-flex justify-content-between align-items-center px-4 mb-3">
                            <h4 className="mb-0 text-capitalize">{v.jobName}</h4>
                            <Link className="py-2 px-3 text-white current-btn" style={{ borderRadius: '10px' }} to={'/developer?id=' + v._id + '&companyId=' + v.companyId + '&name=' + v.jobName} state={{ data: v.jobName }}>Apply</Link>
                          </div>
                          <div className="price px-3 mb-2 flex-wrap d-flex" style={{ backgroundColor: 'transparent' }}>
                            <span className="py-2 px-xl-2 px-1 m-2 d-flex text-dark border-main"><img src="/assets/img/icon/21.png" alt="img" className="me-1" style={{ width: '20px', objectFit: 'cover', height: '20px' }} /> {v.salary} </span>
                            <span className="py-2 px-xl-2 px-1 m-2 d-flex text-dark"><img src="/assets/img/icon/22.png" alt="img" className="me-2" style={{ width: '20px', objectFit: 'cover', height: '20px' }} /> {v.noResources} resources </span>
                            <span className="py-2 px-xl-2 px-1 m-2 d-flex text-dark"><img src="/assets/img/icon/20.png" alt="img" className="me-2" style={{ width: '20px', objectFit: 'cover', height: '20px' }} /> {v.contractTime} month contract </span>
                          </div>
                          <p className="text-dark px-3 py-2 mb-0">Technology Requirement</p>
                          <div className="d-flex flex-wrap justify-content-between align-items-center px-3 cat">
                            <div className="d-flex flex-wrap">
                              {v.technology.map((tec) => {
                                return (
                                  <span className="py-2 px-3 text-dark me-3 mb-2 border-main" key={tec}>{tec}</span>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        : <div className='container py-5 d-flex align-items-center justify-content-center' style={{ height: '800px' }} ><h2>Please Wait..</h2></div>}
    </>
  )
}

export default Current;