const Hero = () => {
  const containerStyle = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    clipPath: "polygon(100% 0, 100% 89%, 81% 100%, 0 88%, 0 0)",
  };
  const gradientStyle = {
    background:
      "linear-gradient(215deg, rgba(14,138,200,1) 2%, rgba(33,152,212,1) 16%, rgba(33,143,199,0.8239889705882353) 42%, rgba(14,138,200,0) 69%)",
  };
  const badges = [
    "Highly Skilled",
    "Excellent Communication",
    "Analytical Skills",
    "Leadership",
  ];
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[80vh]"
      style={containerStyle}
    >
      <div
        className="py-6 h-full flex flex-col items-center"
        style={gradientStyle}
      >
        <div className="container mx-auto pr-24 grow flex items-center justify-end">
          <div className="grid grid-cols-6">
            <div className="col-start-3 col-span-4">
              <h1 className="text-5xl font-medium text-white mb-4 text-right">
                Pre-Vetted Near-Shore Developers
              </h1>
              <h2 className="text-5xl font-normal text-white mb-4 text-right">
                Remote/Hybrid/On-site
              </h2>
              <div className="flex justify-end mt-20 gap-3">
                <button className="bg-white border border-white rounded-lg px-10 py-2 text-lg font-normal text-[#0e8ac8]">
                  Start Hiring
                </button>
                <button className="bg-transparent text-white border border-white rounded-lg px-10 py-2 text-lg font-medium">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex space-x-6 mt-8 bg-[#0e8ac8] w-full justify-center shadow-lg">
          {badges?.map((badge, index) => (
            <span
              key={index}
              className="inline-block text-white w-80 px-4 py-3 text-center font-medium text-lg"
            >
              {badge}
            </span>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
