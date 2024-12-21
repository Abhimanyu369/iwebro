import Header from "../components/Header";
import Footer from "../components/Footer";

export default function VetDevelopers() {
  return (
    <>
      <Header />
      <div className="hero relative">
        <div className="hero-bg-video-overlay-horizontal"></div>
        <div className="container z-10 relative">
          <div className="hero-bg-video-left pt-40 mb-20">
            <div className="hero-bg-video-content">
              <h1 className="hero-bg-video-title">How we vet developers</h1>
              <p className="hero-bg-video-des">
                TopTalenz is network of Highly skilled, certified tech
                professionals. <br></br>Ready to onboard quickly and
                effectively.
              </p>
            </div>
          </div>
        </div>
        <img
          className="w-full absolute top-0 object-cover -z-0"
          src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg"
        ></img>
        <div className="hero-bg-video-overlay-vertical"></div>
      </div>
      <div className="py-20 bg-gray-50 last:mb-0">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-1 col-span-12 text-gray-600 bg-transparent text-start pb-6">
            <h2
              className="heading-sm text-4xl md:heading-lg font-normal 2xl:heading-xl text-gray-900"
              data-testid="usp-title"
            >
              How we vet developers
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
