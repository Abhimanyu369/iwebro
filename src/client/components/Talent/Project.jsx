import React, { useEffect, useState } from 'react';
import { BACKEND_COMMAN_URL, headers } from '../../../api/Api';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Project = () => {
  const [project, setProject] = useState([]);

  const fetchData = async () => {
    try {
      let data = await axios.get(
        BACKEND_COMMAN_URL + '/api/view_project',
        headers
      );
      if (data.status === 200) {
        setProject(data.data.data);
      } else {
        setProject([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(project);
  return (
    <>
      {project.length !== 0 ? (
        <div className="project pt-5">
          <div className="container">
            <div className="section_bg px-5 py-5 mb-5">
              <div className="row align-items-center">
                <div
                  className="col-md-7 section-title project-content wow animated fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <h6 className="sub-title">GET IN TOUCH</h6>
                  <h2
                    className="mb-4 display-lg-5 display-6"
                    style={{ fontWeight: '900' }}
                  >
                    {project[0].title}
                  </h2>
                  {/* <h2 className="mb-4 display-lg-5 display-6" style={{ fontWeight: '900' }}>Ipusm long Lorem fact that <span className="text-primary" style={{ fontSize: '40px', fontWeight: '900' }}>reader dummy be </span>fact that</h2> */}
                  <p className="mb-4">{project[0].desc}</p>
                  <Link
                    to="/company"
                    className="btn btn-border-base px-sm-5 me-4 mt-0"
                    style={{ borderRadius: '5px' }}
                  >
                    Become Talent Partner
                  </Link>
                </div>
                <div
                  className="col-md-5 wow animated fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <img
                    src={BACKEND_COMMAN_URL + project[0].img}
                    alt="img"
                    className="img-fluid mb-md-0 mb-5"
                    style={{ borderRadius: '20px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Project;
