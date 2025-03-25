import "./Flow.css";

export default function Flow() {
  const steps = [
    {
      number: "01",
      label: "Define",
      title: "Tell us what you need",
      description:
        "We'll get in touch with you to understand your requirements and preferences.",
    },
    {
      number: "02",
      label: "Discover",
      title: "Meet the top talent",
      description: "Get 3 to 5 suitable, pre-vetted candidates in 48 hours.",
    },
    {
      number: "03",
      label: "Evaluate",
      title: "Interview with ease",
      description:
        "Choose the candidate that aligns with your needs and we'll arrange an interview.",
    },
    {
      number: "04",
      label: "Onboard",
      title: "Hire with confidence",
      description:
        "Once you decide, we'll take care of the onboarding process for you.",
    },
  ];

  return (
    <div className="py-20 bg-white last:mb-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-1 col-span-12 text-gray-600 bg-transparent text-start pb-8 md:pb-12">
          <h2
            className="heading-sm text-2xl md:text-4xl text-center md:heading-lg font-normal 2xl:heading-xl text-gray-900"
            data-testid="usp-title"
          >
            Hiring Made Easy
          </h2>
        </div>
        {/* <div className="flex flex-wrap md:flex-nowrap justify-center gap-x-4 gap-y-8">
          {cards?.map((card, index) => (
            <div
              key={index}
              className="col-span-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-6 md:gap-14 items-center relative"
            >
              <span className="bg-white z-10 h-16 w-16 inline-flex justify-center items-center border border-[#0e8ac8] text-[#0e8ac8] rounded-full text-xl">
                {index + 1}
              </span>
              {index + 1 < cards.length && (
                <>
                  <span className="absolute hidden md:block border-b border-[#0e8ac8] w-full top-8 left-2/4 -z-0">
                    <svg
                      viewBox="0 0 15 29"
                      width="15"
                      height="29"
                      className="absolute -top-[14px] right-[15px]"
                    >
                      <path
                        d="m.707.707 13.678 13.678-13.678 13.677"
                        fill="none"
                        stroke="#0e8ac8"
                      ></path>
                    </svg>
                  </span>
                </>
              )}
              <h3 className="font-medium text-center text-base mb-0 md:mb-3">{card}</h3>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border flex-col items-start text-left"
            >
              <div className="text-2xl mb-2">{step.number}</div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 rounded-full border border-black text-sm font-medium">
                  {step.label}
                </span>
              </div>
              <h3 className="text-lg mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
