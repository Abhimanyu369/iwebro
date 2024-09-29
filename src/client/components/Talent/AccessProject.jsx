import axios from "axios";
import React, { useEffect, useState } from 'react';
import { BACKEND_COMMAN_URL, headers } from "../../../api/Api";

const AccessProject = () => {

    const [access_project, setAccessProject] = useState([]);

    const fetchData = async () => {
        try {
            let data = await axios.get(BACKEND_COMMAN_URL + '/api/view_access_project', headers);
            if (data.status === 200) {
                setAccessProject(data.data.data);
            }
            else {
                setAccessProject([]);
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
            {access_project.length !== 0 ?
                <div className="service-area bg-cover pd-bottom-90 pd-top-110 pd-bottom-90" style={{ backgroundImage: `url('./assets/img/bg/3.png')` }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center wow animated fadeInUp">
                                    <h6 className="sub-title">ACCESS PROJECTS</h6>
                                    <h2 style={{ fontSize: '40px', fontWeight: '900' }}>Hooray! Now You've Access to  <br /> <span className="text-primary">Vetted Projects</span></h2>
                                    <p className="mb-0 lead">"There is no one who loves pa insee ks itlo ves self, who seeks."</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {access_project.map((v, i) => {
                                return (
                                    <div className="col-xl-3 col-md-6 wow animated fadeInLeft" key={i}>
                                        <div className="single-work-process-inner">
                                            <div className="thumb mb-4">
                                                <img src={BACKEND_COMMAN_URL + v.img} alt="img" />
                                            </div>
                                            <div className="details">
                                                <h5 className="mb-3">{v.title}</h5>
                                                <p className="content">{v.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                : ''}
        </>
    )
}

export default AccessProject;