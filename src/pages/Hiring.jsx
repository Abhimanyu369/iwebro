import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Hiring() {
  return (
    <>
      <Header />
      <div className="hero relative bg-[#0e8ac8]">
        <div className="hero-bg-video-overlay-horizontal"></div>
        <div className="container z-10 relative">
          <div className="hero-bg-video-left pt-40 mb-20">
            <div className="hero-bg-video-content">
              <h1 className="hero-bg-video-title">Why 5%?</h1>
              <p className="hero-bg-video-des">
                Our name "Top Talenz" comes from Top Talent — meaning we
                constantly strive to find and work with the best from around the
                world. Our rigorous screening process identifies experts in
                their domains who have passion and drive. Of the thousands of
                applications Top Talenz sees each month, typically fewer than 5%
                are accepted.
              </p>
            </div>
          </div>
        </div>

        <div className="hero-bg-video-overlay-vertical"></div>
      </div>
      <div className="py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-1 col-span-12 text-gray-600 bg-transparent text-start pb-16 md:pb-20">
            <h2
              className="heading-sm text-4xl text-center md:heading-lg font-normal 2xl:heading-xl text-gray-900"
              data-testid="usp-title"
            >
              The Top Talenz Screening Process
            </h2>
            <p className="paragraph-md font-regular 2xl:heading-xs text-center max-w-xl mx-auto mt-5">
              Each applicant to the Top Talenz network must pass a screening
              process designed to measure subject matter expertise,
              professionalism, and communication skills. The full screening
              process takes between 3-8 weeks to complete.
            </p>
          </div>
        </div>
        <img src="/hiring.png" alt="hiring" />
      </div>
      <Footer />
    </>
  );
}
