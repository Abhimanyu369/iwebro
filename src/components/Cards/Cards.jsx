import React from "react";
import "./Cards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Cards() {
  const cards = [
    {
      name: "Darshil Prajapati",
      experience: "4+ years",
      tech: "LLM, NLP, Fine Tuning, Python",
    },
    {
      name: "Chandan Mishra",
      experience: "10+ years",
      tech: "Sr. QA Salesforce",
    },
    {
      name: "Rishab Chopra",
      experience: "6+ years",
      tech: "Full Stack Developer",
    },
    {
      name: "Parth Modi",
      experience: "7+ years",
      tech: "Full Stack Developer",
    },
    {
      name: "Rhythm Parmar",
      experience: "5+ years",
      tech: "Java Developer",
    },
    {
      name: "Chirag Vataliya",
      experience: "5+ years",
      tech: "Full Stack Developer",
    },
    {
      name: "Abhimanyu Malik",
      experience: "8+ years",
      tech: "Full Stack Developer",
    },
  ];

  return (
    <div className="my-12">
      <div className="flex flex-col gap-1 col-span-12 text-gray-600 bg-transparent text-start pb-8 md:pb-10">
        <h2
          className="heading-sm text-4xl text-center md:heading-lg font-normal 2xl:heading-xl text-gray-900"
          data-testid="usp-title"
        >
          Our Top Talents
        </h2>
      </div>
      <div className="max-w-screen-xl mx-auto flex gap-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true, type: "progressbar" }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {cards.map((card, index) => (
            <SwiperSlide
              key={index}
              className="max-w-xs rounded grow overflow-hidden shadow-lg border border-gray-200"
            >
              <div className="relative bg-slate-300 pt-5">
                <img
                  className="w-full h-[180px] object-contain"
                  src={`/img-${index + 1}.png`}
                  // src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052740%2Ffile%2Foptimized%2Fhero_section-big_800x600-transformed-c356edd6d73b572e8806166d85dbead5.png&width=360" // Replace with actual image URL
                  alt="Anuar Heberlein"
                />
              </div>
              <div className="px-4 py-2">
                <div className="font-medium text-base mb-1 text-[#0e8ac8]">
                  {card.name}
                </div>
                <div className="text-green-600 font-normal text-xs flex items-center mb-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1"
                  >
                    <rect
                      className="text-white dark:text-transparent"
                      fill="currentColor"
                      x="4.5"
                      y="4.5"
                      width="7"
                      height="7"
                    ></rect>
                    <path
                      fill="currentColor"
                      d="m2.3438,5.6562l-2.3438,2.3438,2.3438,2.3438v3.3137h3.3137l2.3425,2.3425,2.3425-2.3425h3.315v-3.315l2.3425-2.3425-2.3425-2.3425v-3.3137h-3.3138l-2.3437-2.3438-2.3438,2.3438h-3.3125v3.3125Zm5.0488,2.7528l2.754-2.7654.9705.9739-3.7245,3.7399-.9705-.9739-1.3672-1.3733.9705-.9752,1.3672,1.3739Z"
                    ></path>
                    <path
                      className="text-white dark:text-transparent"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.1465 5.64374L7.39254 8.4091L6.02535 7.03518L5.05485 8.01039L6.42204 9.38364L7.39254 10.3575L11.117 6.61761L10.1465 5.64374Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Verified Expert
                </div>
                <div className="text-gray-500 text-sm mb-2">in Tech</div>
                <div className="flex items-center mb-2 text-sm">
                  {/* <svg
                    className="w-5 h-5 text-gray-500 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    ></path>
                  </svg> */}
                  {card.tech}
                </div>
                <div className="text-gray-700 font-normal mb-1 text-xs">
                  {card.experience}
                </div>
                {/* <div className="text-gray-700 font-normal mb-1 text-xs">
                  PREVIOUSLY AT
                </div>
                <img
                  src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052692%2Ffile%2Foptimized%2FSpaceX__262D3D-e70c0594ae2c647d090f47a447067b4c.svg"
                  alt=""
                  className="mb-2 h-4 w-auto"
                /> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
