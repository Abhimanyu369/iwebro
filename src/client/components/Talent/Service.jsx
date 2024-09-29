import axios from "axios";
import React, { useEffect, useState } from 'react';
import { BACKEND_COMMAN_URL, headers } from "../../../api/Api";

const Service = () => {

    const [service, setService] = useState([]);

    const fetchData = async () => {
        try {
            let data = await axios.get(BACKEND_COMMAN_URL + '/api/view_Service', headers);
            if (data.status === 200) {
                setService(data.data.data);
            }
            else {
                setService([]);
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
            {service.length !== 0 ?
                <div className="service-area bg-relative pt-5">
                    <img className="position-bottom-left top_image_bounce" src="assets/img/icon/4.png" alt="img" />
                    <div className="container">
                        <div className="section_bg px-sm-5 px-4 py-5 mb-5">
                            <div className="section-title text-center wow animated fadeInUp">
                                <h6 className="sub-title">SERVICES</h6>
                                <h2 className="title mb-2">Why Choose <span>Iwebro?</span></h2>
                                <p className="mb-0 lead">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."</p>
                            </div>
                            <div className="row">
                                {service.map((v, i) => {
                                    return (
                                        <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                                            <div className="single-service-inner text-center d-flex flex-column align-items-center justify-content-center">
                                                <div className="thumb">
                                                    <img src={BACKEND_COMMAN_URL + v.img} alt="img" />
                                                </div>
                                                <div className="details">
                                                    <h5>{v.title}</h5>
                                                    <p>{v.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                : ''}
        </>
    )
}

export default Service;