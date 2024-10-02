import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Benefits from "../components/Benefits/Benefits";
import Cards from "../components/Cards/Cards";
import Flow from "../components/Flow/Flow";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import Hiring from "../components/Hiring/Hiring";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="pt-12 pb-8 last:mb-0">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-1 flex items-center justify-center">
              <div className="bg-[#0e8ac86b] py-8 w-full text-center text-3xl font-light text-slate-900">
                Expert Devs, <br />
                In these Tech
              </div>
            </div>
            <div className="col-span-3 flex flex-col gap-8 justify-center">
              <div>
                <Marquee gradient gradientWidth={"100px"} autoFill>
                  {Array.from({ length: 7 }, (_, i) => i + 1).map((i) => (
                    <img
                      key={i}
                      src={`/logo${i}.png`}
                      className="h-[26px] w-auto mx-5"
                    />
                  ))}
                </Marquee>
              </div>
              <div>
                <Marquee gradient gradientWidth={"100px"} autoFill>
                  {Array.from({ length: 7 }, (_, i) => i + 8).map((i) => (
                    <img
                      key={i}
                      src={`/logo${i}.png`}
                      className="h-[26px] w-auto mx-5"
                    />
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards />
      <Benefits />
      <div className="bg-[#0e8ac8] py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h3 className="hero-bg-video-title text-3xl mb-0">
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
      <div className="my-12">
        <div className="flex flex-col gap-1 col-span-12 text-gray-600 bg-transparent text-start pb-8 md:pb-10">
          <h2
            className="heading-sm text-4xl text-center md:heading-lg font-normal 2xl:heading-xl text-gray-900"
            data-testid="usp-title"
          >
            <span className="text-[#0e8ac8]">Our team</span> attending/speaking
          </h2>
        </div>
        <div className="max-w-screen-xl mx-auto flex gap-4">
          <div>
            <img src="/img1.jpg" className="h-auto w-full" />
          </div>
          <div>
            <img src="/img2.jpg" className="h-auto w-full" />
          </div>
          <div>
            <img src="/img3.jpg" className="h-auto w-full" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
