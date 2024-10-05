import Marquee from "react-fast-marquee";

export default function HomeMarquee() {
  return (
    <div className="pt-12 pb-8 last:mb-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-1 flex items-center justify-center">
            <div className="bg-[#0e8ac86b] py-8 w-full text-center text-3xl font-light text-slate-900">
              Expert Devs, <br />
              In these Tech
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-8 justify-center">
            <div>
              <Marquee gradient gradientWidth={"100px"} autoFill>
                {Array.from({ length: 7 }, (_, i) => i + 1).map((i) => (
                  <img
                    key={i}
                    src={`/logo${i}.png`}
                    className="h-[26px] w-auto mx-5"
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
                    className="h-[26px] w-auto mx-5"
                  />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
