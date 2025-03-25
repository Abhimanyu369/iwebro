import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <div className="hero relative">
        <div className="hero-bg-video-overlay-horizontal"></div>
        <div className="container z-10 relative">
          <div className="hero-bg-video-left pt-40 mb-20">
            <div className="hero-bg-video-content px-5 md:px-0">
              <h1 className="hero-bg-video-title">About</h1>
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
        <div className="max-w-screen-xl mx-auto px-5 md:px-12">
          <div className="flex flex-col gap-1 text-center col-span-12 text-gray-600 bg-transparent pb-6">
            <h2
              className="heading-sm text-center text-4xl md:heading-lg font-normal 2xl:heading-xl text-gray-900"
              data-testid="usp-title"
            >
              About Us
            </h2>
            <p className="paragraph-md font-regular 2xl:heading-xs mt-6">
              We, at TopTalenz, are a pre-vetted pool of professional developers
              offering tech talent recruitment, onboarding, and sourcing
              services to a global customer base. With a team of 7 dedicated
              employees, we cater to tech startups, small business owners, and
              global enterprises, providing access to skilled developers at
              different income levels. Our distribution channels include both
              online platforms and physical locations, ensuring maximum reach
              and convenience for our customers.
            </p>
          </div>
          <div className="mb-5 text-center">
            <h3 className="font-medium text-base mb-3">Business Origins</h3>
            <p className="text-sm font-light">
              TopTalenz was founded with the vision of bridging the gap between
              businesses and skilled tech talent worldwide. Our founders
              recognized the growing demand for high-quality developers in the
              tech industry and saw an opportunity to create a platform that
              connects businesses with the right talent seamlessly. With a focus
              on customer satisfaction and quality service delivery, TopTalenz
              has quickly established itself as a trusted partner for tech
              recruitment and onboarding.
            </p>
          </div>
          <div className="mb-5 text-center">
            <h3 className="font-medium text-base mb-3">
              Competitive Advantage
            </h3>
            <p className="text-sm font-light">
              Our key success factors lie in our unique combination of online
              and physical distribution channels, allowing us to reach a wider
              audience and provide personalized service. Additionally, our
              extensive network of professional developers ensures a seamless
              onboarding process for global enterprises seeking tech talent. By
              catering to different income levels and offering customized
              solutions, we stand out in the market as a reliable and efficient
              partner for tech talent sourcing.
            </p>
          </div>
          <div className="mb-5 text-center">
            <h3 className="font-medium text-base mb-3">Targeting</h3>
            <p className="text-sm font-light">
              Our primary focus will be on targeting the Tech Startups, Small
              Business Owners, and Global Enterprises segments. We have chosen
              these specific segments because they align with our service
              offerings and have distinct needs that we can address effectively.
              By catering to these segments, we can maximize our revenue
              potential and establish ourselves as a trusted partner in the tech
              talent industry.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
