import axios from "axios";
import React, { useEffect, useState } from 'react';
import {BACKEND_COMMAN_URL, headers} from "../../../api/Api";

const Skill = () => {

    const [skill,setSkill] = useState([]);

    const fetchData = async ()=>{
      try {
        let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_skill', headers);
        if(data.status === 200){
          setSkill(data.data.data);
        }
        else{
          setSkill([]);
        }
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      fetchData();
    },[]);

  return (
    <>
      {skill.length !== 0 ? 
        <div className="work-skill-area pt-5">
            <div className="container">
              <div className="section_bg px-5 pt-5 mb-5">
                <div className="section-title text-center wow animated fadeInUp">
                    <h6 className="sub-title">SKILLS</h6>
                    <h2 className="title">Lorem Epsum Your Best <span>Skills</span></h2>
                </div>
                <div className="work-skill-area-inner border-radius-20">
                    <ul className="row ps-0 mb-0">
                        {skill.map((v)=>{
                          return (
                            <li className="col-lg-3 col-md-6 wow animated fadeInUp" key={v._id}>
                              <>
                                  <div className="single-skill-inner-2 text-center mb-5">
                                      <div className="thumb mb-4">
                                          <img src={BACKEND_COMMAN_URL+v.img} alt="img" width="150px" style={{borderRadius : '10px'}}/>
                                      </div>
                                      <div className="details">
                                          <h5 className="mb-0" style={{textTransform:'capitalize',letterSpacing:'2px'}}>{v.skill_name}</h5>
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
        </div>
      : ''}
    </>
  )
}

export default Skill;