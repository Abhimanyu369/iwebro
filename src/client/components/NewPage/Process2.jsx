import axios from "axios";
import React, { useEffect, useState } from 'react';
import { BACKEND_COMMAN_URL, headers } from "../../../api/Api";

const Process = () => {

  const [process, setProcess] = useState([]);

  const fetchData = async () => {
    try {
      let data = await axios.get(BACKEND_COMMAN_URL + '/api/view_benefit', headers);
      if (data.status === 200) {
        setProcess(data.data.data);
      }
      else {
        setProcess([]);
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
      {process.length !== 0 ?
        <div className="work-process-area">
          <div className="container">
            <div className="section_bg px-md-5 px-4 pt-5 pb-4 mb-5">
              <div className="section-title text-center wow animated fadeInUp">
                <h6 className="sub-title">OUR SIMPLE PROCESS</h6>
                <h2 className="title">Why Choose <span>Iwebro?</span></h2>
              </div>
              <div className="work-process-area-inner border-radius-20">
                <div className="row">
                  {process.map((v, i) => {
                    return (
                      <div className="col-lg-3 col-md-6 wow animated fadeInUp" key={v._id}>
                        <>
                          <div className="single-work-process-inner-2 text-center">
                            <div className="thumb">
                              <img src={BACKEND_COMMAN_URL + v.img} alt="img" style={{ borderRadius: '10px' }} />
                              <p className="process-count">{i + 1}</p>
                            </div>
                            <div className="details">
                              <h5 className="mb-3" style={{ textTransform: 'capitalize' }}>{v.title}</h5>
                              <p className="content">{v.desc}</p>
                            </div>
                          </div>
                        </>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        : ''}
    </>
  )
}

export default Process;