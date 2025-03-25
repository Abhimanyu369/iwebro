import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaUserCheck,
  FaComments,
  FaCode,
  FaClipboardCheck,
  FaRocket,
} from "react-icons/fa";

const vettingSteps = [
  {
    icon: <FaUserCheck className="text-2xl text-[#0e8ac8]" />,
    title: "Application & Profile Screening",
    description:
      "Gather detailed profiles and verify identity and work history via LinkedIn, GitHub, or personal websites.",
  },
  {
    icon: <FaComments className="text-2xl text-[#0e8ac8]" />,
    title: "Soft Skills & Communication",
    description:
      "Conduct video interviews to assess clarity, adaptability, and teamwork.",
  },
  {
    icon: <FaCode className="text-2xl text-[#0e8ac8]" />,
    title: "Technical Assessment",
    description:
      "Use coding challenges and mini real-world projects to evaluate skills. Review open-source work.",
  },
  {
    icon: <FaClipboardCheck className="text-2xl text-[#0e8ac8]" />,
    title: "Reference & Background Checks",
    description:
      "Validate credentials and get feedback from past employers or clients.",
  },
  {
    icon: <FaRocket className="text-2xl text-[#0e8ac8]" />,
    title: "Trial Task",
    description:
      "Assign a short, paid trial project to observe execution, collaboration, and timelines.",
  },
];

export default function VetDevelopers() {
  return (
    <>
      <Header />
      <div className="hero relative">
        <div className="hero-bg-video-overlay-horizontal"></div>
        <div className="container z-10 relative">
          <div className="hero-bg-video-left pt-40 mb-20">
            <div className="hero-bg-video-content">
              <h1 className="hero-bg-video-title">How we vet developers</h1>
              <p className="hero-bg-video-des">
                TopTalenz is network of Highly skilled, certified tech
                professionals. <br></br>Ready to onboard quickly and
                effectively.
              </p>
            </div>
          </div>
        </div>
        <img
          className="w-full absolute top-0 object-cover -z-0"
          src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg"
        ></img>
        <div className="hero-bg-video-overlay-vertical"></div>
      </div>
      <div className="py-20 bg-gray-50 last:mb-0">
        <div className="max-w-screen-xl mx-auto px-5 md:px-12">
          <div className="flex flex-col gap-1 col-span-12 text-gray-600 bg-transparent text-center pb-6">
            <h2
              className="heading-sm text-4xl md:heading-lg font-normal 2xl:heading-xl text-gray-900"
              data-testid="usp-title"
            >
              How we vet developers
            </h2>
          </div>
          {/* <div className="mb-5 text-center">
            <p className="text-sm font-light text-gray-700">
              Vetting developers on your platform requires a robust and
              structured process to ensure quality, skill, and professionalism.
              Here's an effective approach:
              <br />
              <br />
              <strong>1. Application & Profile Screening</strong>
              <br />
              - Gather detailed profiles including experience, education, and
              portfolio links.
              <br />
              - Verify identity and work history through LinkedIn, GitHub, or
              personal websites.
              <br />
              <br />
              <strong>2. Soft Skills & Communication</strong>
              <br />
              - Conduct video interviews to assess communication clarity.
              <br />
              - Evaluate problem-solving mindset, adaptability, and teamwork.
              <br />
              <br />
              <strong>3. Technical Assessment</strong>
              <br />
              - Use coding challenges to test core skills.
              <br />
              - Assign real-world mini projects to evaluate hands-on capability.
              <br />
              - Review open-source contributions and GitHub activity.
              <br />
              <br />
              <strong>4. Reference & Background Checks</strong>
              <br />
              - Connect with past employers or clients for performance feedback.
              <br />
              - Validate credentials and claimed project roles.
              <br />
              <br />
              <strong>5. Trial Task</strong>
              <br />
              - Offer a short, paid trial project to observe real-world
              execution.
              <br />- Monitor quality, timeliness, and collaboration throughout
              the process.
            </p>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vettingSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-md flex flex-col gap-3"
              >
                <div>{step.icon}</div>
                <h3 className="text-lg">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
