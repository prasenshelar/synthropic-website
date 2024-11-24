import Helmet from "../../Layout/Helmet/Helmet";
import { FiEye } from "react-icons/fi";
import { BsLightningCharge, BsShield } from "react-icons/bs";
import { RxLightningBolt } from "react-icons/rx";
const WhyUs = () => {
  const cards = [
    {
      title: "Revolutionizing Threat Detection",
      description:
        "We are pioneering adaptive systems that redefine how organizations approach evolving security challenges.",
      icon: <BsShield className="text-5xl" />,
    },
    {
      title: "Achieve Comprehensive Visibility",
      description:
        "Empowering organizations with unmatched insights to detect, respond, and adapt effectively.",
      icon: <FiEye className="stroke-[1.2px]" />,
    },
    {
      title: "Innovation for Resilience",
      description:
        "Setting new benchmarks with transformative solutions that are built to evolve and endure.",
      icon: <RxLightningBolt />,
    },
  ];

  return (
    <div className="py-20">
      <Helmet>
        <h2 className="text-4xl  mb-20 text-center relative-font-bold">
          Why Synthropic?
        </h2>
        <div className="flex justify-center text-center flex-wrap gap-9 mt-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white group hover:shadow-[0px_0px_20px_-3px_#B03DFF] cursor-pointer max-w-[370px] min-h-[250px] p-6 border-2 relative-font-medium  border-purple-500 rounded-lg  transition duration-300"
            >
              <span className="text-6xl mb-6 group-hover:scale-110 duration-300 mx-auto flex justify-center">
                {card.icon}
              </span>
              <h3 className="text-xl  mb-4">{card.title}</h3>
              <p className="text-gray-600  ">{card.description}</p>
            </div>
          ))}
        </div>
      </Helmet>
    </div>
  );
};

export default WhyUs;
