import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Benefits from "../../components/Benefits/Benefits";
import Flow from "../../components/Flow/Flow";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero/Hero";
import Hiring from "../../components/Hiring/Hiring";
import HomeMarquee from "../../components/HomeMarquee/HomeMarquee";
import HomeCards from "../../components/HomeCards/HomeCards";
import CardSlider from "../../components/CardSlider";
import WeServe from "./WeServe";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMarquee />
      {/* <Cards /> */}
      <CardSlider />
      <Benefits />
      <div className="bg-[#0e8ac8] py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h3 className="hero-bg-video-title mb-5 md:mb-0 text-xl md:text-3xl">
            Hire the Top 5% of professional Talent
          </h3>
          <div className="hero-bg-video-btns">
            <Link
              to="/hire-now"
              className="button-primary w-button bg-[white] text-[#0e8ac8]"
            >
              Hire Talent
            </Link>
          </div>
        </div>
      </div>
      <Flow />
      <Hiring />
      <HomeCards />
      <div className="my-12 max-w-6xl mx-auto">
        <div className="flex flex-col gap-1 col-span-12 text-gray-600 bg-transparent text-start pb-8 md:pb-10">
          <h2
            className="heading-sm text-2xl md:text-4xl text-center md:heading-lg font-normal 2xl:heading-xl text-gray-900"
            data-testid="usp-title"
          >
            <span className="text-[#0e8ac8]">Our team</span> attending/speaking
          </h2>
        </div>
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            breakpoints={{
              // When window width is >= 640px, show 2 slides
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // When window width is >= 1024px, show 3 slides
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="h-96 w-full">
                  <img src={`/img${img}.jpg`} className={`h-full w-full object-cover ${index === 3 ? "" : "object-top"}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="max-w-screen-xl mx-auto flex gap-4"></div>
      </div>
      <WeServe />
      <Footer />
    </>
  );
}

export default Home;
