import { Link } from "react-router-dom";
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
      <Footer />
    </>
  );
}

export default Home;
