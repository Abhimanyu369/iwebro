import { useRef } from "react";
import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./slider.css"; // Add necessary custom CSS

const CardSlider = () => {
  const swiperRef = useRef(null);
  const cards = [
    {
      name: "Darshil Prajapati",
      experience: "4+ years",
      tech: "LLM, NLP, Fine Tuning, Python",
      role: "Machine Learning Engineer",
      description:
        "Darshil is a highly skilled Machine Learning Engineer with expertise in large language models, natural language processing, and model fine-tuning using Python.",
      techStack: ["LLM", "NLP", "Fine Tuning", "Python"],
    },
    {
      name: "Chandan Mishra",
      experience: "10+ years",
      tech: "Sr. QA Salesforce",
      role: "Senior QA Engineer",
      description:
        "Chandan is a Senior QA Engineer with over 10 years of experience in Salesforce quality assurance and test automation.",
      techStack: ["Salesforce", "QA", "Test Automation"],
    },
    {
      name: "Rishab Chopra",
      experience: "6+ years",
      tech: "Full Stack Developer",
      role: "Full Stack Developer",
      description:
        "Rishab is a proficient Full Stack Developer with extensive experience in both frontend and backend technologies, delivering high-performance web applications.",
      techStack: ["Frontend", "Backend", "Full Stack"],
    },
    {
      name: "Parth Modi",
      experience: "7+ years",
      tech: "Full Stack Developer",
      role: "Full Stack Developer",
      description:
        "Parth is a seasoned Full Stack Developer with a strong background in building scalable applications and working across all layers of the tech stack.",
      techStack: ["Frontend", "Backend", "Full Stack"],
    },
    {
      name: "Rhythm Parmar",
      experience: "5+ years",
      tech: "Java Developer",
      role: "Java Developer",
      description:
        "Rhythm is a dedicated Java Developer with over 5 years of experience in developing robust and efficient backend systems using Java technologies.",
      techStack: ["Java", "Backend Development"],
    },
    {
      name: "Chirag Vataliya",
      experience: "5+ years",
      tech: "Full Stack Developer",
      role: "Full Stack Developer",
      description:
        "Chirag is an experienced Full Stack Developer with a versatile skill set, working on both frontend and backend to deliver seamless web experiences.",
      techStack: ["Frontend", "Backend", "Full Stack"],
    },
    {
      name: "Abhimanyu Malik",
      experience: "8+ years",
      tech: "Full Stack Developer",
      role: "Full Stack Developer",
      description:
        "Abhimanyu is a Lead Full Stack Developer with over 8 years of experience in designing and implementing end-to-end solutions for complex web applications.",
      techStack: ["Frontend", "Backend", "Full Stack"],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col gap-1 col-span-12 text-gray-600 bg-transparent text-start pb-8 md:pb-10">
        <h2
          className="heading-sm text-2xl md:text-4xl text-center md:heading-lg font-normal 2xl:heading-xl text-gray-900"
          data-testid="usp-title"
        >
          Our Top Talents
        </h2>
      </div>
      <div
        className="pb-10"
        onMouseEnter={() => swiperRef.current?.swiper.autoplay.stop()} // Stop autoplay on hover
        onMouseLeave={() => swiperRef.current?.swiper.autoplay.start()} // Start autoplay on leave
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            // When window width is >= 640px, show 2 slides
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // When window width is >= 1024px, show 3 slides
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          ref={swiperRef}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <div className="flex gap-3">
                  <div className="relative bg-slate-300 rounded-md w-[80px] h-[80px]">
                    <img
                      className="w-[80px] h-[80px] object-contain"
                      src={`/img-${index + 1}.png`}
                      alt="Anuar Heberlein"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-start grow">
                    <div className="flex flex-col justify-start items-start gap-1">
                      <h4 className="text-xs bg-[#0e8ac87a] px-2 py-1 rounded text-white">
                        {card.role}
                      </h4>
                      <h3 className="text-md md:text-md">{card.name}</h3>
                    </div>
                    <div className="text-[10px] bg-[#0e8ac8] px-2 py-1 rounded text-white flex items-center mt-1 md:mt-0">
                      <IoIosStar /> Top Rated
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  {card?.techStack?.map((item, itemIndex) => (
                    <div
                      className="border py-1 px-2 rounded text-xs"
                      key={itemIndex}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="description mb-2 text-sm md:text-base">
                  {card.description}
                </div>
                <hr />
                <div className="mt-3 flex justify-between text-sm">
                  <p>
                    Experience:{" "}
                    <span className="font-bold">{card.experience}</span>
                  </p>
                  <p>
                    Availability: <span className="font-bold">Full-Time</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardSlider;
