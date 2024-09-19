import {
  PiUsersThree,
  PiCurrencyCircleDollar,
  PiCalendarLight,
} from "react-icons/pi";

const Requirements = () => {
  return (
    <section className="container mx-auto py-24 px-36 bg-slate-100">
      <div className="flex justify-center">
        <h2 className="inline text-4xl relative mb-16">
          Talent <span className="text-[#0e8ac8]">Requirements</span>
          <span className="bg-[#0e8ac8] h-1 w-1/3 absolute -bottom-2 left-0"></span>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {[1, 2, 3]?.map((_, index) => (
          <div key={index} className="rounded-xl shadow-lg bg-white p-8">
            <div className="">
              <div className="font-semibold text-xl mb-2">React Developer</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                sed magnam, quasi ipsam earum vel?
              </p>
            </div>
            <div className="flex flex-col gap-4 my-6">
              <div className="flex gap-2 items-center">
                <PiCurrencyCircleDollar className="text-2xl text-[#0e8ac8]" />
                <span>1000-1200</span>
              </div>
              <div className="flex gap-2 items-center">
                <PiUsersThree className="text-2xl text-[#0e8ac8]" />
                <span>3 resources</span>
              </div>
              <div className="flex gap-2 items-center">
                <PiCalendarLight className="text-2xl text-[#0e8ac8]" />
                <span>3 month contract</span>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-[#0e8ac8] rounded-lg px-6 py-1 text-base font-normal text-white">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-20">
        <button className="bg-[#0e8ac8] rounded-lg px-10 py-2 text-lg font-normal text-white">
          View More
        </button>
      </div>
    </section>
  );
};

export default Requirements;
