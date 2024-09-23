import "./Benefits.css";

export default function Benefits() {
  const cards = [
    {
      url: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fbenefit%2F8809833%2Fimage%2Foptimized%2Fhire_quickly-73465c194a619e997036471389d47536.svg",
      title: "The top 5%",
      desc: "We are AI powered platform that access by totally transparent code test and soft skills test.",
    },
    {
      url: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fbenefit%2F8809834%2Fimage%2Foptimized%2Ftop_three_percent-84a3232607ab54008147fa66eb1bb115.svg",
      title: "Reduce the time of hiring",
      desc: "We are a network of verified and skilled talents, that will short your hiring time.",
    },
    {
      url: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fbenefit%2F8809835%2Fimage%2Foptimized%2Fleading_the_future_of_work-7623b38e47167ebb0f2a42649d699e18.svg",
      title: "Boost your ROI",
      desc: "Smart tools that help you improve hiring efficiency.",
    },
    {
      url: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fbenefit%2F8809836%2Fimage%2Foptimized%2Fa_level_above-5767dffe5115a388ed7d66b65da08f77.svg",
      title: "Hire quickly",
      desc: "Within 48 hours",
    },
    {
      url: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Ftrustpilot_section%2Fstatistic%2F8809839%2Ficon%2Foptimized%2Fjobs-0e1589e7f11a2d16d6db2350fa4063bc.svg",
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
            <div key={index} className="col-span-1 p-4 w-1/4">
              <img src={card?.url} alt="" className="mb-7 w-16 h-16" />

              <h3 className="font-medium text-base mb-3">{card.title}</h3>
              {index === 0 && (
                <span className="inline-block h-[2px] w-24 absolute -mt-2 bg-[#0e8ac8] -skew-x-6"></span>
              )}
              <p className="text-sm font-light">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
