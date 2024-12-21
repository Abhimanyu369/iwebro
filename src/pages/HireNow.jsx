import { useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Select from "react-select";

// Skill options with icons
const skillOptions = [
  { value: "React", label: "React" },
  { value: "Node.js", label: "Node.js" },
  { value: "Python", label: "Python" },
  { value: "Angular", label: "Angular" },
  { value: "Vue.js", label: "Vue.js" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Java", label: "Java" },
  { value: "C#", label: "C#" },
  { value: "C++", label: "C++" },
  { value: "Go", label: "Go" },
  { value: "Ruby on Rails", label: "Ruby on Rails" },
  { value: "PHP", label: "PHP" },
  { value: "Kotlin", label: "Kotlin" },
  { value: "Swift", label: "Swift" },
  { value: "Flutter", label: "Flutter" },
  { value: "Django", label: "Django" },
  { value: "Spring Boot", label: "Spring Boot" },
  { value: "GraphQL", label: "GraphQL" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "PostgreSQL", label: "PostgreSQL" },
  { value: "MySQL", label: "MySQL" },
  { value: "Docker", label: "Docker" },
  { value: "Kubernetes", label: "Kubernetes" },
  { value: "AWS", label: "AWS" },
  { value: "Azure", label: "Azure" },
  { value: "Google Cloud", label: "Google Cloud" },
  { value: "TensorFlow", label: "TensorFlow" },
  { value: "PyTorch", label: "PyTorch" },
  { value: "Hadoop", label: "Hadoop" },
  { value: "Spark", label: "Spark" },
  { value: "ElasticSearch", label: "ElasticSearch" },
];

const LandingPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    howCanWeHelp: "",
    skills: [], // Updated for multi-select
    source: "",
  });
  const [thankYouMessage, setThankYouMessage] = useState(false); // State for thank you message

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle skill selection
  const handleSkillChange = (selectedOptions) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: selectedOptions, // Array of selected options
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Display thank you message
    setThankYouMessage(true);
    // Clear form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      howCanWeHelp: "",
      skills: [],
      source: "",
    });
    // Hide message after 5 seconds
    setTimeout(() => {
      setThankYouMessage(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e8ac8]">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl mx-auto">
        {/* Left Section */}
        <div className="bg-gray-50 px-8 py-12 w-full lg:w-1/2">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </Link>
          <h1 className="!text-xl lg:!text-3xl text-gray-900 mt-10">
            Work With Only The Top Pre-vetted{" "}
            <span className="text-[#0e8ac8]">Tech Talent</span>
          </h1>
          <p className="text-gray-600 mb-8">Top talent is just a click away</p>
          <div className="pt-0 md:pt-12 pb-8 last:mb-0">
            <div className="max-w-screen-xl mx-auto">
              <div className="grid grid-cols-4 gap-5">
                <div className="col-span-4 flex flex-col gap-16 justify-center">
                  <div>
                    <Marquee gradient gradientWidth={"100px"} autoFill>
                      {Array.from({ length: 7 }, (_, i) => i + 1).map((i) => (
                        <img
                          key={i}
                          src={`/logo${i}.png`}
                          className="h-[36px] w-auto mx-5"
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
                          className="h-[36px] w-auto mx-5"
                        />
                      ))}
                    </Marquee>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 w-full lg:w-1/2">
          <h2 className="text-2xl mb-4">Let&apos;s Talk!</h2>
          {thankYouMessage && (
            <div className="text-green-600 bg-green-100 p-3 rounded-lg mb-4">
              Thanks! We will get back to you soon.
            </div>
          )}
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
                I&apos;m Recruiting
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
                I&apos;m a Developer
              </button>
            </div>
            <Select
              isMulti
              name="skills"
              value={formData.skills}
              options={skillOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleSkillChange}
              placeholder="Select skills"
            />
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
            </select>
            <button className="bg-[#0e8ac8] text-white py-3 w-full rounded-lg">
              Let&apos;s Talk!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
