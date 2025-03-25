
const HiringForm = () => {
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
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <input
            type="text"
            placeholder="Full Name*"
            className="p-3 rounded-md border"
          />
          <input
            type="email"
            placeholder="Work Email*"
            className="p-3 rounded-md border"
          />
          <input
            type="text"
            placeholder="Phone Number*"
            className="p-3 rounded-md border"
          />
          <input
            type="text"
            placeholder="What role are you looking to hire?*"
            className="p-3 rounded-md border"
          />
          <select className="p-3 rounded-md border">
            <option value="">What level of experience do you need?*</option>
            {/* Add options here */}
          </select>
          <select className="p-3 rounded-md border">
            <option value="">
              What is your monthly budget for this role?*
            </option>
            {/* Add options here */}
          </select>
          <div className="sm:col-span-2 text-center mt-4">
            <button className="bg-[#0e8ac8] text-white px-4 py-2 rounded-lg hover:bg-[#0d7bb8] transition">
              Submit
            </button>
            <p className="mt-2 text-sm font-medium">
              Life-time free replacement.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HiringForm;
