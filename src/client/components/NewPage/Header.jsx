import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../assets/css/index.css';
import '../../../assets/css/responsive.css';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  const toggleMenu = () => {
    document.getElementById('itech_main_menu').classList.toggle('d-block');
    // document.getElementById('toggle').innerHTML = '<img src="/assets/img/icon/24.svg" onClick={removeClose} alt="img" width="20px" />';
  };

  return (
    <>
      <div className="topbar position-absolute top-0 z-1 w-100 bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between pt-2 pb-5 px-md-2">
            <div className="d-flex align-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#f7962f"
                className="mt-1 bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              <span
                className="mb-0 pe-3 ps-2 text-white d-md-block d-none"
                style={{ fontWeight: 800 }}
              >
                Mail Us
              </span>
              <span className="text-white ps-md-0 ps-2">
                connect@iwebro.com
              </span>
            </div>
            <div className="d-flex align-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#f7962f"
                className="mt-1 bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              <span
                className="mb-0 pe-3 ps-2 text-white d-md-block d-none"
                style={{ fontWeight: 800 }}
              >
                Call to Our Experts
              </span>
              <span className="text-white ps-md-0 ps-2">+91 87655 55888</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-area navbar-expand-lg">
        <div className="container nav-container navbar-bg p-lg-0 p-3">
          <div className="responsive-mobile-menu">
            <button
              className="menu toggle-btn d-block d-lg-none"
              id="toggle"
              onClick={toggleMenu}
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left"></span>
              <span className="icon-right"></span>
            </button>
          </div>
          <div className="logo ps-lg-4 ps-2">
            <Link to="/">
              <img src="/assets/img/logo.png" alt="img" />
            </Link>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <Link className="search-bar-btn" to="/">
              <i className="fa fa-search"></i>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="itech_main_menu">
            <ul className="navbar-nav menu-open text-lg-end items-center justify-center">
              <li className="px-xl-3 px-2 me-0 ms-auto d-flex align-center justify-center">
                <Link
                  id="nav"
                  to="/"
                  className={
                    splitLocation[1] === ''
                      ? 'activate d-flex align-center justify-center'
                      : 'd-flex align-center justify-center'
                  }
                >
                  {/* <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill={splitLocation[1] === "" ? '#f7962f' : 'black'}><path d="M240-200h133.847v-237.692h212.306V-200H720v-360L480-740.769 240-560v360Zm-59.999 59.999v-449.998L480-815.767l299.999 225.768v449.998H526.154v-237.693h-92.308v237.693H180.001ZM480-470.385Z"/></svg> */}
                  <span style={{ lineHeight: '23px' }} className="ps-1">
                    Home
                  </span>
                </Link>
              </li>
              <li className="px-xl-3 px-2 mx-0 d-flex align-center justify-center">
                <Link
                  id="nav"
                  to="/talent-partner"
                  className={
                    splitLocation[1] === 'talent-partner'
                      ? 'activate d-flex align-center justify-center'
                      : 'd-flex align-center justify-center'
                  }
                >
                  {/* <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill={splitLocation[1] === "talent-partner" ? '#f7962f' : 'black'}> 
                                    <path d="M471.538-161.154q5.923 0 12.039-2.769 6.116-2.77 9.654-6.308l319.923-319.923q13.538-13.538 20.384-28.923 6.847-15.384 6.847-32.308 0-17.538-6.847-33.769-6.846-16.231-20.384-29.154l-160-159.999q-12.923-13.539-28-19.808-15.077-6.27-32.615-6.27-16.924 0-32.501 6.27-15.577 6.269-28.731 19.808l-22.923 22.923 74 74.616q13.461 12.846 19.884 29.307 6.423 16.462 6.423 34.154 0 36.615-24.461 61.076t-61.076 24.461q-17.693 0-34.269-5.846-16.577-5.846-29.423-18.692l-75.769-75.154-173.847 173.846q-4.538 4.539-6.807 10.154-2.27 5.616-2.27 11.539 0 11.077 7.539 18.924 7.538 7.846 18.616 7.846 5.923 0 12.038-2.769 6.116-2.77 9.654-6.308l131.385-131.385 42.153 42.153-130.769 131.384q-4.539 4.539-6.808 10.155-2.27 5.615-2.27 11.538 0 10.693 7.731 18.424t18.424 7.731q5.923 0 12.039-2.77 6.115-2.769 9.654-6.307l136-135.385 42.152 42.153-135.384 136q-4.154 3.538-6.616 9.654-2.461 6.115-2.461 12.039 0 10.692 7.731 18.423 7.73 7.731 18.423 7.731 5.923 0 11.539-2.269 5.615-2.27 10.154-6.808l136-135.385 42.153 42.153-136 136q-4.539 4.538-6.808 10.539-2.269 6-2.269 11.538 0 11.078 8.23 18.424 8.231 7.346 18.539 7.346Zm-.615 59.999q-33.923 0-59.154-23.539-25.23-23.538-26.384-58.615-34-2.307-56.807-24.154-22.808-21.846-24.731-57.384-35.538-2.308-57.461-24.846-21.923-22.538-23.462-56.692-35.692-2.308-58.923-25.884-23.23-23.577-23.23-59.654 0-17.692 6.73-34.653 6.731-16.962 19.577-29.808l216.615-215.999L500.845-595.23q3.539 4.154 9.27 6.616 5.731 2.461 12.423 2.461 10.923 0 18.847-7.231 7.923-7.231 7.923-18.923 0-6.693-2.462-12.424-2.461-5.73-6.615-9.269L399.923-774.307Q387-787.846 371.731-794.115q-15.27-6.27-32.808-6.27-16.923 0-32.116 6.27-15.192 6.269-28.731 19.808L146.693-642.308q-10.924 10.923-17.885 25.808-6.962 14.885-8.193 30.346-1.23 12.77 1.154 25.27 2.385 12.5 8.385 23.5l-44.153 44.153Q72.463-512.77 65.617-537 58.77-561.231 60-586.154q1.231-27.615 12.462-53.346 11.23-25.73 31.461-45.961l131-130.999q22.461-21.846 48.884-32.885 26.423-11.038 55.499-11.038 29.077 0 55.308 11.038 26.23 11.039 48.076 32.885l22.924 22.924 22.924-22.924q22.462-21.846 48.692-32.885 26.231-11.038 55.308-11.038 29.076 0 55.499 11.038 26.423 11.039 48.269 32.885l158.999 158.999q21.846 21.846 33.462 49.73 11.615 27.885 11.615 56.962 0 29.076-11.615 55.307-11.616 26.231-33.462 48.077L535.384-128.078q-13.231 13.23-29.808 20.077-16.576 6.846-34.653 6.846ZM357.306-633.461Z"/>
                                </svg> */}
                  <span style={{ lineHeight: '23px' }} className="ps-1">
                    Talent partner
                  </span>
                </Link>
              </li>
              <li className="px-xl-3 px-2 mx-0 d-flex align-center justify-center">
                <Link
                  id="nav"
                  to="/active-requirements"
                  className={
                    splitLocation[1] === 'active-requirements'
                      ? 'activate d-flex align-center justify-center'
                      : 'd-flex align-center justify-center'
                  }
                >
                  {/* <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-200v-440V-212.309v-4.037V-200Zm12.309 59.999q-30.308 0-51.308-21t-21-51.308v-415.382q0-30.308 21-51.308t51.308-21h167.692v-67.691q0-30.307 21-51.307 21-21 51.308-21h135.382q30.308 0 51.308 21t21 51.307v67.691h167.692q30.308 0 51.308 21t21 51.308v169.461q-13.769-9.538-28.577-16.538-14.807-7-31.422-12.461v-140.462q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H172.309q-5.385 0-8.847 3.462-3.462 3.462-3.462 8.847v415.382q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462h290.692q2.616 16 6.885 30.807 4.269 14.807 10.577 29.192H172.309ZM400-699.999h160v-67.691q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H412.309q-5.385 0-8.847 3.462Q400-773.075 400-767.69v67.691ZM720-60.001q-74.922 0-127.461-52.538Q540.001-165.078 540.001-240t52.538-127.461Q645.078-419.999 720-419.999t127.461 52.538Q899.999-314.922 899.999-240t-52.538 127.461Q794.922-60.001 720-60.001Zm17.692-187.23v-110.461h-35.384v124.923L786-149.077 810.923-174l-73.231-73.231Z"/></svg> */}
                  <span style={{ lineHeight: '23px' }} className="ps-1">
                    Active jobs
                  </span>
                </Link>
              </li>
              <li className="px-xl-3 px-2 mx-0 d-flex align-center justify-center">
                <Link
                  id="nav"
                  to="/reviews"
                  className={
                    splitLocation[1] === 'reviews'
                      ? 'activate d-flex align-center justify-center'
                      : 'd-flex align-center justify-center'
                  }
                >
                  {/* <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M371.847-401.539 480-467.154l108.153 65.615-28.692-123 95.923-82.691-126.23-10.616L480-733.845l-49.154 115.999-126.23 10.616 95.923 82.691-28.692 123ZM100.001-118.464v-669.227q0-30.308 21-51.308t51.308-21h615.382q30.308 0 51.308 21t21 51.308v455.382q0 30.308-21 51.308t-51.308 21H241.539L100.001-118.464Zm116-201.536h571.69q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-455.382q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H172.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v523.076L216.001-320ZM160-320v-480V-320Z"/></svg> */}
                  <span style={{ lineHeight: '23px' }} className="ps-1">
                    Reviews
                  </span>
                </Link>
              </li>
              <li className="px-xl-3 px-2 mx-0 d-flex align-center justify-center">
                <Link
                  id="nav"
                  to="/event"
                  className={
                    splitLocation[1] === 'event'
                      ? 'activate d-flex align-center justify-center'
                      : 'd-flex align-center justify-center'
                  }
                >
                  {/* <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M587.693-240q-38.538 0-65.423-26.884-26.884-26.885-26.884-65.423t26.884-65.423q26.885-26.884 65.423-26.884t65.423 26.884Q680-370.845 680-332.307t-26.884 65.423Q626.231-240 587.693-240ZM212.309-100.001q-30.308 0-51.308-21t-21-51.308v-535.382q0-30.308 21-51.308t51.308-21h55.385v-84.615h61.537v84.615h303.076v-84.615h59.999v84.615h55.385q30.308 0 51.308 21t21 51.308v535.382q0 30.308-21 51.308t-51.308 21H212.309Zm0-59.999h535.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-375.382H200v375.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846ZM200-607.69h560v-100.001q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H212.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v100.001Zm0 0V-720v112.31Z"/></svg> */}
                  <span style={{ lineHeight: '23px' }} className="ps-1">
                    Events
                  </span>
                </Link>
              </li>
              <li className="px-xl-3 px-2 mx-0 d-flex align-center justify-center">
                <Link
                  id="nav"
                  to="/blog"
                  className={
                    splitLocation[1] === 'blog'
                      ? 'activate d-flex align-center justify-center'
                      : 'd-flex align-center justify-center'
                  }
                >
                  <span style={{ lineHeight: '23px' }} className="ps-1">
                    Blogs
                  </span>
                </Link>
              </li>
              <li
                className="px-xl-3 px-lg-2 px-4 btn-base start_btn mt-lg-0 mt-3 ms-lg-auto me-lg-0 mx-auto"
                style={{ borderRight: '1px solid #fff' }}
              >
                <Link id="nav" to="/start-hire" className="text-white">
                  Start Hiring
                </Link>
              </li>
              <li className="btn-base mx-lg-0 mx-auto auth-btn text-center px-xl-4 px-lg-2 py-0">
                <Link
                  to="/company"
                  className="block px-xl-4 px-lg-2 my-lg-0 my-3"
                >
                  Sign Up
                </Link>
                <hr className="m-0 opacity-100" />
                <Link to="/talent" className="block px-xl-4 px-lg-2">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
