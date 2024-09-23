/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    howCanWeHelp: "",
    skill: "",
    source: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form data (send to API, log, etc.)
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e8ac8]">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl mx-auto">
        {/* Left Section */}
        <div className="bg-gray-50 px-8 py-12 w-full lg:w-1/2">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </Link>
          <h1 className="text-3xl text-gray-900 mt-10">
            Work With Only The Top Pre-vetted{" "}
            <span className="text-[#0e8ac8]">Tech Talent</span>
          </h1>
          <p className="text-gray-600 mb-8">Top talent is just a click away</p>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 w-full lg:w-1/2">
          <h2 className="text-2xl mb-4">Let's Talk!</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="border p-3 w-full rounded-lg"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="border p-3 w-full rounded-lg"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 w-full rounded-lg"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border p-3 w-full rounded-lg"
              required
            />
            <div className="flex space-x-4">
              <button
                type="button"
                name="howCanWeHelp"
                value="Recruiting"
                onClick={handleChange}
                className={`flex-1 border p-3 rounded-lg hover:bg-gray-100 ${
                  formData.howCanWeHelp === "Recruiting" ? "bg-gray-200" : ""
                }`}
              >
                I'm Recruiting
              </button>
              <button
                type="button"
                name="howCanWeHelp"
                value="Developer"
                onClick={handleChange}
                className={`flex-1 border p-3 rounded-lg hover:bg-gray-100 ${
                  formData.howCanWeHelp === "Developer" ? "bg-gray-200" : ""
                }`}
              >
                I'm a Developer
              </button>
            </div>
            <select
              name="skill"
              value={formData.skill}
              onChange={handleChange}
              className="border p-3 w-full rounded-lg"
            >
              <option>Select skill</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="Python">Python</option>
              {/* Add more options as needed */}
            </select>
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="border p-3 w-full rounded-lg"
            >
              <option>How did you hear about Top Talenz ?</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Google">Google</option>
              <option value="Friend">Friend</option>
              {/* Add more options as needed */}
            </select>
            <button className="bg-[#0e8ac8] text-white py-3 w-full rounded-lg">
              Let's Talk!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
