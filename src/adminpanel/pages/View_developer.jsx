import React from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BACKEND_COMMAN_URL, headers } from "../../api/Api";
import { Link } from 'react-router-dom';

export const View_developer = () => {

  const [dev, setDev] = useState([]);
  const [other, setOther] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [addClass, setAddClass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageLimit, setPageLimit] = useState(5);

  const fetchData = async (page, search, limit) => {
    try {
      if (page === undefined || page === 1) {
        setAddClass(true);
      }
      else {
        setAddClass(false);
      }
      let credit = {
        search: search,
        page: page,
        per_page: limit
      };
      let data = await axios.post(BACKEND_COMMAN_URL + '/api/view_developer', credit, headers);
      if (data.status === 200) {
        setLoading(true);
        setOther(data.data);
        setDev(data.data.data);
      }
      else {
        setDev([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const Delete = async (id) => {
    let data = await axios.delete(`${BACKEND_COMMAN_URL}/api/deleteDeveloper/${id}`, headers);
    if (data.status === 200) {
      fetchData();
    }
    else {
      alert("something wrong");
    }
  }

  const Pagination = (page) => {
    setPage(page);
    fetchData(page, search, pageLimit);
  }

  const Search = (e) => {
    setSearch(e.target.value);
    setPage(1);
    fetchData(1, e.target.value, pageLimit);
  }

  const setLimit = (e) => {
    setPage(1);
    setPageLimit(e.target.value);
    fetchData(1, search, e.target.value);
  }

  useEffect(() => {
    fetchData(1, '', 5);
  }, []);
  console.log(dev);
  return (
    <><Header />
      <div className="ml-305 px-4 md:px-6 2xl:px-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-3">
          <h2 className="text-title-md2 font-bold text-black">Talent Developers </h2>
          <input type="text" placeholder="Search Developer" className="rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark md:w-2/4" onChange={Search} id='search' name='search' />
          {/* <Link to="/Add_developer" className="inline-flex items-center justify-center bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 cursor-pointer">Add Developer</Link> */}
        </div>
        {loading ?
          <div>
            <div className="rounded-sm border border-stroke bg-white px-4 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
              <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto" style={{ minWidth: '2500px' }}>
                  <thead>
                    <tr className='text-dark'>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Full Name</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Apply Job</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Company Name</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Designation</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Expertise</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Technology</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Framework</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Programming Language</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Browser</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Database</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Web Server</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Operating System</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Email</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Rate</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Experience</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Linkedin</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Availability</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Resume</th>
                      <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dev.length !== 0 ? dev.map((v) => {
                      // if (v.companyId) {
                      return (
                        <tr key={v._id}>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.full_name}</td>
                          {/* <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'><Link className='text-[#0d6efd]' to={v.jobId ? "/developer_profile?id=" + v.jobId._id : ''}>{v.jobName}</Link></td> */}
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.jobName}</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.companyId.company_name}</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.designation}</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.expertise}</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.technology}</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.framework}</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.programming_language}</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.browser}</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.database}</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.web_server}</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.operating_system}</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.email}</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.rate} $/Month</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.experience} years</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'><Link to={v.linkedin} target="_blank">Linkedin</Link></td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'>{v.availability}</td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'><Link className='text-[#0d6efd]' to={BACKEND_COMMAN_URL + v.cv}>Resume</Link></td>
                          <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark text-capitalize'><div className="flex items-center">
                            <Link to={"/Update_developer?id=" + v._id}><svg className="feather feather-edit" fill="#fff" height="24" stroke="#0d6efd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg></Link>
                            <Link className="ps-2" onClick={(e) => { e.preventDefault(); Delete(v._id) }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="30" height="30" fill='#0d6efd'><path d="M 46 13 C 44.35503 13 43 14.35503 43 16 L 43 18 L 32.265625 18 C 30.510922 18 28.879517 18.922811 27.976562 20.427734 L 26.433594 23 L 23 23 C 20.802666 23 19 24.802666 19 27 C 19 29.197334 20.802666 31 23 31 L 24.074219 31 L 27.648438 77.458984 C 27.88773 80.575775 30.504529 83 33.630859 83 L 66.369141 83 C 69.495471 83 72.11227 80.575775 72.351562 77.458984 L 75.925781 31 L 77 31 C 79.197334 31 81 29.197334 81 27 C 81 24.802666 79.197334 23 77 23 L 73.566406 23 L 72.023438 20.427734 C 71.120481 18.922811 69.489078 18 67.734375 18 L 57 18 L 57 16 C 57 14.35503 55.64497 13 54 13 L 46 13 z M 46 15 L 54 15 C 54.56503 15 55 15.43497 55 16 L 55 18 L 45 18 L 45 16 C 45 15.43497 45.43497 15 46 15 z M 32.265625 20 L 43.832031 20 A 1.0001 1.0001 0 0 0 44.158203 20 L 55.832031 20 A 1.0001 1.0001 0 0 0 56.158203 20 L 67.734375 20 C 68.789672 20 69.763595 20.551955 70.306641 21.457031 L 71.833984 24 L 68.5 24 A 0.50005 0.50005 0 1 0 68.5 25 L 73.5 25 L 77 25 C 78.116666 25 79 25.883334 79 27 C 79 28.116666 78.116666 29 77 29 L 23 29 C 21.883334 29 21 28.116666 21 27 C 21 25.883334 21.883334 25 23 25 L 27 25 L 61.5 25 A 0.50005 0.50005 0 1 0 61.5 24 L 28.166016 24 L 29.693359 21.457031 C 30.236405 20.551955 31.210328 20 32.265625 20 z M 64.5 24 A 0.50005 0.50005 0 1 0 64.5 25 L 66.5 25 A 0.50005 0.50005 0 1 0 66.5 24 L 64.5 24 z M 26.078125 31 L 73.921875 31 L 70.357422 77.306641 C 70.196715 79.39985 68.46881 81 66.369141 81 L 33.630859 81 C 31.53119 81 29.803285 79.39985 29.642578 77.306641 L 26.078125 31 z M 38 35 C 36.348906 35 35 36.348906 35 38 L 35 73 C 35 74.651094 36.348906 76 38 76 C 39.651094 76 41 74.651094 41 73 L 41 38 C 41 36.348906 39.651094 35 38 35 z M 50 35 C 48.348906 35 47 36.348906 47 38 L 47 73 C 47 74.651094 48.348906 76 50 76 C 51.651094 76 53 74.651094 53 73 L 53 69.5 A 0.50005 0.50005 0 1 0 52 69.5 L 52 73 C 52 74.110906 51.110906 75 50 75 C 48.889094 75 48 74.110906 48 73 L 48 38 C 48 36.889094 48.889094 36 50 36 C 51.110906 36 52 36.889094 52 38 L 52 63.5 A 0.50005 0.50005 0 1 0 53 63.5 L 53 38 C 53 36.348906 51.651094 35 50 35 z M 62 35 C 60.348906 35 59 36.348906 59 38 L 59 39.5 A 0.50005 0.50005 0 1 0 60 39.5 L 60 38 C 60 36.889094 60.889094 36 62 36 C 63.110906 36 64 36.889094 64 38 L 64 73 C 64 74.110906 63.110906 75 62 75 C 60.889094 75 60 74.110906 60 73 L 60 47.5 A 0.50005 0.50005 0 1 0 59 47.5 L 59 73 C 59 74.651094 60.348906 76 62 76 C 63.651094 76 65 74.651094 65 73 L 65 38 C 65 36.348906 63.651094 35 62 35 z M 38 36 C 39.110906 36 40 36.889094 40 38 L 40 73 C 40 74.110906 39.110906 75 38 75 C 36.889094 75 36 74.110906 36 73 L 36 38 C 36 36.889094 36.889094 36 38 36 z M 59.492188 41.992188 A 0.50005 0.50005 0 0 0 59 42.5 L 59 44.5 A 0.50005 0.50005 0 1 0 60 44.5 L 60 42.5 A 0.50005 0.50005 0 0 0 59.492188 41.992188 z" /></svg></Link>
                          </div></td>
                        </tr>
                      )
                      // }
                    }) : <tr><td><h3 className='mb-0 py-4'>Data Not Found</h3></td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-paginator p-component p-paginator-bottom py-4 flex flex-wrap justify-between items-center mb-20">
              <div className='sm:mb-0 mb-3'>
                <button type="button" className={addClass ? 'disabled p-paginator-prev p-paginator-element p-link mx-2' : "p-paginator-prev p-paginator-element p-link mx-2"} onClick={(e) => Pagination(1)}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-icon p-paginator-icon mx-auto" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z" fill="currentColor"></path></svg>
                </button>
                <button type="button" className={addClass ? 'disabled p-paginator-prev p-paginator-element p-link mx-2' : "p-paginator-prev p-paginator-element p-link mx-2"} onClick={(e) => Pagination(page - 1)}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-icon p-paginator-icon mx-auto" aria-hidden="true"><path d="M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z" fill="currentColor"></path></svg>
                </button>
                <span className="p-paginator-pages">
                  <button type="button" className="p-link-page mx-2">{page}
                  </button>
                </span>
                <button type="button" className={other.total <= other.cur ? "disabled p-paginator-next p-paginator-element p-link mx-2" : "p-paginator-next p-paginator-element p-link mx-2"} onClick={(e) => Pagination(page + 1)}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-icon p-paginator-icon mx-auto" aria-hidden="true"><path d="M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z" fill="currentColor"></path></svg>
                </button>
                <button type="button" className={other.total <= other.cur ? "disabled p-paginator-next p-paginator-element p-link mx-2" : "p-paginator-next p-paginator-element p-link mx-2"} onClick={(e) => Pagination(other.total)}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-icon p-paginator-icon mx-auto" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z" fill="currentColor"></path></svg>
                </button>
              </div>
              <div className='sm:mb-0 mb-3'>
                <label className='pe-2 ps-auto'>Developers per page: </label>
                <select className='w-16 rounded-lg border-[1.5px] border-stroke p-2 text-dark bg-white' onChange={setLimit}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>
          </div>
          : <h3 className='mb-0 p-4'>Loading...</h3>}
      </div>
      <Footer />
    </>
  )
}
export default View_developer;