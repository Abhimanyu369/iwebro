import axios from "axios";
import React, { useEffect, useState } from 'react';
import { BACKEND_COMMAN_URL, headers } from "../../../api/Api";
import Sliders from "react-slick";

const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([]);

    const fetchData = async () => {
        try {
            let data = await axios.get(BACKEND_COMMAN_URL + '/api/view_testimonial', headers);
            if (data.status === 200) {
                setTestimonial(data.data.data);
            }
            else {
                setTestimonial([]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            }
        ]
    };

    return (
        <>
            {testimonial.length !== 0 ?
                <div className="testimonial-area">
                    <div className="container">
                        <div className="section_bg px-sm-5 py-5 mb-5">
                            <div className="row justify-content-center">
                                <div className="col-xl-7 col-lg-9">
                                    <div className="section-title text-center wow animated fadeInUp">
                                        <h6 className="sub-title">CLIENT TALK</h6>
                                        <h2 className="title">Our Only Aim Is To Create The <span>Best</span> For You</h2>
                                    </div>
                                </div>
                            </div>
                            <Sliders {...settings}>
                                {testimonial.map((v) => {
                                    return (
                                        <div className="item wow animated fadeInLeft" key={v._id}>
                                            <div className="single-testimonial-inner style-2">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="icon mb-2">
                                                            <img src="/assets/img/icon/25.png" alt="img" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-9 col-xl-8">
                                                        <p className="designation mb-0">{v.desc}</p>
                                                    </div>
                                                    <div className="col-xxl-3 col-xl-4 align-self-center text-sm-end mt-4 mt-sm-0">
                                                        <div className="thumb d-inline-block">
                                                            <img src={BACKEND_COMMAN_URL + v.img} alt="img" style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-8 mt-4">
                                                        <h5 className="mb-0" style={{ textTransform: 'capitalize' }}>{v.name}</h5>
                                                    </div>
                                                    <div className="col-4 mt-4">
                                                        <div className="ratting-inner d-flex justify-content-end align-items-center">
                                                            <span className="pe-2">Rating:</span>
                                                            <div className="d-flex justify-content-end">
                                                                {Array(v.rating).fill().map((r, m) => {
                                                                    return (
                                                                        <svg key={m + 1} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Sliders>
                        </div>
                    </div>
                </div>
                : ''}
        </>
    )
}

export default Testimonial;