import React, { useEffect, useState } from 'react';
import { BACKEND_COMMAN_URL, headers } from '../../../api/Api';
import axios from 'axios';

const Remote = () => {
  const [remote, setRemote] = useState([]);

  const fetchData = async () => {
    try {
      let data = await axios.get(
        BACKEND_COMMAN_URL + '/api/view_remote_hiring',
        headers
      );
      if (data.status === 200) {
        setRemote(data.data.data);
      } else {
        setRemote([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {remote.length !== 0 ? (
        <div className="remote py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center wow animated fadeInUp">
                  <h6 className="sub-title">REMOTE HIRING</h6>
                  <h2 style={{ fontSize: '40px', fontWeight: '900' }}>
                    Lorem Ipsum Dummy <br />{' '}
                    <span className="text-primary">Simply</span> Hiring
                  </h2>
                  <p className="mb-0 lead">
                    Lorem Ipsum is simply dummy text of the Lorem Ipsum
                    Dummyindustry.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {remote.map((v, i) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 wow animated fadeInUp"
                    key={i}
                  >
                    <div className="single-blog-list style-2">
                      <div className="thumb">
                        <img
                          src={BACKEND_COMMAN_URL + v.img}
                          className="w-100"
                          alt="img"
                        />
                      </div>
                      <div className="details">
                        <h5 className="mb-3">{v.title}</h5>
                        <p>{v.desc}</p>
                        <a className="read-more-text" href=" ">
                          Read More{' '}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Remote;
