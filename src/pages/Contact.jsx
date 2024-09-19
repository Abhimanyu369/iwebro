import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="hero relative">
        <div className="hero-bg-video-overlay-horizontal"></div>
        <div className="container z-10 relative">
          <div className="hero-bg-video-left pt-40 mb-20">
            <div className="hero-bg-video-content">
              <h1 className="hero-bg-video-title">Get in touch</h1>
              <p className="hero-bg-video-des">
                Fill out the form below and a TopTalenz representative will
                contact you as soon as possible. For immediate assistance,
                please call our sales line or email our customer support.
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
      <div className="flex flex-col md:flex-row justify-between px-4 py-20 max-w-6xl mx-auto">
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <form className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="fullName"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Full Name"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="subject"
              >
                General Questions
              </label>
              <select
                id="subject"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>General Questions</option>
                <option>Support</option>
                <option>Sales</option>
              </select>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                I would like to know about...{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="I would like to know about..."
              ></textarea>
            </div>

            <div className="text-end">
              <button
                type="submit"
                className=" bg-[#0e8ac8] text-white py-2 px-4 rounded-md shadow"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <div className="space-y-4 text-sm">
            <div>
              <h2 className="font-medium text-gray-700">Sales Inquiries</h2>
              <p className="text-[#0e8ac8]">sales@toptalenz.com</p>
              <p className="text-[#0e8ac8]">+6396652219</p>
            </div>

            {/* <div>
              <h2 className="font-medium text-gray-700">Customer support</h2>
              <p className="text-indigo-600">support@toptal.com</p>
            </div>

            <div>
              <h2 className="font-medium text-gray-700">Press</h2>
              <p className="text-indigo-600">press@toptal.com</p>
            </div>

            <div>
              <h2 className="font-medium text-gray-700">Partnerships</h2>
              <p className="text-indigo-600">partners@toptal.com</p>
            </div>

            <div>
              <h2 className="font-medium text-gray-700">Investors</h2>
              <p className="text-indigo-600">investors@toptal.com</p>
            </div>

            <div>
              <h2 className="font-medium text-gray-700">
                Delaware Mailing Address
              </h2>
              <p className="text-gray-600">
                Toptal, LLC
                <br />
                2810 N. Church St #36879
                <br />
                Wilmington, DE 19802-4447
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
