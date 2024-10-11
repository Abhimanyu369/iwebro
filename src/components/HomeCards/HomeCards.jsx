/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { RiContractLine } from "react-icons/ri";
import { LuUserCheck, LuGlobe } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";

const cardsData = [
  {
    title: "Contract",
    description:
      "Hire a full-time contract software professional who works effortlessly with your team.",
    icon: <RiContractLine />, // You can replace this with an actual icon.
    linkText: "Get in Touch",
    linkUrl: "#",
    bgColor: "bg-green-100",
    iconColor: "text-green-500",
  },
  {
    title: "C2H Model",
    description:
      "If you are content with your developer's performance, you can add them to your permanent payroll.",
    icon: <LuUserCheck />,
    linkText: "Get in Touch",
    linkUrl: "#",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    title: "On-Site",
    description:
      "Developers can work from your workstations. Easily will deploy you to your location.",
    icon: <GrLocation />,
    linkText: "Get in Touch",
    linkUrl: "#",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    title: "Remote",
    description:
      "Trusted full-time remote software engineers who can collaborate with your team from anywhere.",
    icon: <LuGlobe />,
    linkText: "Get in Touch",
    linkUrl: "#",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-500",
  },
];

const Card = ({ title, description, icon, linkText }) => (
  <div className={`rounded-md border bg-white p-6 max-w-sm flex flex-col items-center`}>
    <div className={`text-3xl font-thin text-[#0e8ac8] mb-3`}>{icon}</div>
    <h3 className="text-xl mb-2">{title}</h3>
    <p className="text-sm font-light mb-auto text-center">{description}</p>
    <Link to="/contact" className="text-[#0e8ac8] hover:underline mt-4">
      {linkText} →
    </Link>
  </div>
);

const HomeCards = () => (
  <div className="py-12 last:mb-0 bg-gray-50">
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-4 space-x-6 justify-center">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  </div>
);

export default HomeCards;
