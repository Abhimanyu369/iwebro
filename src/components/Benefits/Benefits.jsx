import "./Benefits.css";

export default function Benefits() {
  const cards = [
    {
      url: "/assets/svg/benefit1.svg",
      title: "The top 5%",
      desc: "We are AI powered platform that access by totally transparent code test and soft skills test.",
    },
    {
      url: "/assets/svg/benefit2.svg",
      title: "Reduce the time of hiring",
      desc: "We are a network of verified and skilled talents, that will short your hiring time.",
    },
    {
      url: "/assets/svg/benefit3.svg",
      title: "Boost your ROI",
      desc: "Smart tools that help you improve hiring efficiency.",
    },
    {
      url: "/assets/svg/benefit4.svg",
      title: "Hire quickly",
      desc: "Within 48 hours",
    },
    {
      url: "/assets/svg/benefit5.svg",
      title: "Leave the groundwork to us",
      desc: "All the compliances and onboarding processes leave to us.",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 last:mb-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-1 col-span-12 text-gray-600 bg-transparent text-start pb-16 md:pb-20">
          <h2
            className="heading-sm text-4xl text-center md:heading-lg font-normal 2xl:heading-xl text-gray-900"
            data-testid="usp-title"
          >
            Why Choose TopTalenz
          </h2>
          <p className="paragraph-md font-regular 2xl:heading-xs text-center">
            Quickly assemble the teams you need, exactly when you need them.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-8">
          {/* <div className="grid grid-cols-3 justify-center gap-x-4 gap-y-6"> */}
          {cards?.map((card, index) => (
            <div key={index} className="col-span-1 p-4 w-1/4 relative transition-all cursor-pointer hover:bg-[#0e8ac822] text-center">
              <img src={card?.url} alt="" className="mb-7 mx-auto w-16 h-16" />

              <h3 className="font-medium text-base mb-3">{card.title}</h3>
              {index === 0 && (
                <span className="inline-block h-[2px] w-24 absolute -mt-2 bg-[#0e8ac8] -skew-x-6 left-1/2 -translate-x-1/2"></span>
              )}
              <p className="text-sm font-light">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
