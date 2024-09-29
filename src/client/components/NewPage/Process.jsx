import React, { useEffect, useState } from 'react';
import { BACKEND_COMMAN_URL, headers } from '../../../api/Api';
import axios from 'axios';

const Process = () => {
  const [process, setProcess] = useState([]);
  const [process_img, setProcessImg] = useState({});

  const fetchData = async () => {
    try {
      let data = await axios.get(
        BACKEND_COMMAN_URL + '/api/view_process',
        headers
      );
      if (data.status === 200) {
        setProcess(data.data.data);
      } else {
        setProcess([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData2 = async () => {
    try {
      let data = await axios.get(
        BACKEND_COMMAN_URL + '/api/view_process_img',
        headers
      );
      if (data.status === 200) {
        setProcessImg(data.data.data);
      } else {
        setProcessImg([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  return (
    <>
      {process.length !== 0 ? (
        <section className="pt-5 process">
          <div className="container">
            <div className="price-process-area pd-top-120 process">
              <div className="contact-inner-1 contact-inner-2">
                <div className="row justify-content-around">
                  <div
                    className="col-lg-6 wow animated fadeInLeft"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.6s"
                  >
                    <img
                      className="w-100 mb-lg-0 mb-5"
                      src={BACKEND_COMMAN_URL + process_img?.img}
                      alt="img"
                      style={{ borderRadius: '30px' }}
                    />
                  </div>
                  <div
                    className="col-lg-5 wow animated fadeInRight"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.6s"
                  >
                    <div className="section-title p-md-5 p-3 mb-0 text-lg-start text-center">
                      {/* <h6 className="sub-title">GET IN TOUCH</h6> */}
                      <h2 className="title mb-4">
                        Let's Build Your <span>Team</span>
                      </h2>
                      {process.map((v) => {
                        return (
                          <div className="media mb-3 text-start" key={v._id}>
                            <div className="media-left me-3">
                              <img src="/assets/img/icon/26.svg" alt="img" />
                            </div>
                            <div className="media-body">
                              <h5>{v.title} </h5>
                              <p className="mb-0">{v.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ''
      )}
    </>
  );
};

export default Process;
