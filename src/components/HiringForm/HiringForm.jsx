import { useState } from "react";
import API from "../../api/axios";

const HiringForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    experienceLevel: "",
    budget: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      API.post("/hiring", formData);

      setMessage("Form submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        role: "",
        experienceLevel: "",
        budget: "",
      });
    } catch (error) {
      setMessage("Server error. Try again later.");
    }
  };

  return (
    <div className="py-20 bg-[#0e8ac8] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl text-center">
          You don’t need another mediocre vendor for SaaS hiring.
        </h2>
        <p className="text-xl text-center mt-2">
          You need a{" "}
          <span className="underline font-semibold">hiring co-pilot</span>.
        </p>

        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={handleChange}
            className="p-3 rounded-md border"
          />
          <input
            type="email"
            name="email"
            placeholder="Work Email*"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md border"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 rounded-md border"
          />
          <input
            type="text"
            name="role"
            placeholder="What role are you looking to hire?*"
            value={formData.role}
            onChange={handleChange}
            className="p-3 rounded-md border"
          />
          <select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="p-3 rounded-md border"
          >
            <option value="">What level of experience do you need?*</option>
            <option value="junior">Junior (0-2 years)</option>
            <option value="mid">Mid-level (2-5 years)</option>
            <option value="senior">Senior (5+ years)</option>
            <option value="lead">Tech Lead / Manager</option>
          </select>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="p-3 rounded-md border"
          >
            <option value="">
              What is your monthly budget for this role?*
            </option>
            <option value="1000-2000">$1,000 - $2,000</option>
            <option value="2000-4000">$2,000 - $4,000</option>
            <option value="4000-6000">$4,000 - $6,000</option>
            <option value="6000-plus">$6,000+</option>
          </select>

          <div className="sm:col-span-2 text-center mt-4">
            <button className="bg-[#0e8ac8] text-white px-4 py-2 rounded-lg hover:bg-[#0d7bb8] transition">
              Submit
            </button>
            <p className="mt-2 text-sm font-medium">
              Life-time free replacement.
            </p>
            {message && (
              <p className="text-sm text-green-600 mt-2">{message}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default HiringForm;
