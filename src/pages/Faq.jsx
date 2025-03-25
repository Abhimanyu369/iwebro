import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FAQ() {
  const faqList = [
    {
      question: "What is staff augmentation?",
      answer: `Staff augmentation is a flexible outsourcing strategy that allows companies to hire skilled professionals on a temporary or long-term basis to supplement their in-house teams. It helps businesses quickly scale up or down based on project needs.`,
    },
    {
      question: "How does staff augmentation differ from outsourcing?",
      answer: `Staff augmentation integrates external professionals into your existing teams while maintaining control over project management. In contrast, outsourcing typically involves delegating an entire project or function to a third-party provider.`,
    },
    {
      question: "What types of professionals can we hire through staff augmentation?",
      answer: `We provide access to a wide range of professionals, including software developers, project managers, business analysts, UI/UX designers, cybersecurity experts, data scientists, and more.`,
    },
    {
      question: "How do you ensure the quality of the talent provided?",
      answer: `Our rigorous vetting process includes skills assessments, technical evaluations, and cultural fit analysis. We source candidates from a global talent pool and match them to your specific project requirements.`,
    },
    {
      question: "What industries do you serve?",
      answer: `TopTalenz work with diverse industries, including IT, healthcare, finance, e-commerce, manufacturing, telecommunications, and more.`,
    },
    {
      question: "How long does it take to onboard a new resource?",
      answer: `The onboarding timeline depends on the complexity of the role and the availability of candidates. In most cases, we can provide qualified professionals within a few days to a couple of weeks.`,
    },
    {
      question: "What are the benefits of staff augmentation?",
      answer: `• Access to specialized talent\n• Cost savings compared to full-time hiring\n• Faster hiring and onboarding\n• Greater flexibility to scale teams up or down\n• Full control over project execution`,
    },
    {
      question: "Can we hire staff for short-term projects?",
      answer: `Yes, TopTalenz offers flexible engagement models, allowing you to hire professionals for short-term or long-term assignments based on your project needs.`,
    },
    {
      question: "What if we are not satisfied with a resource?",
      answer: `We strive to ensure the best fit, but if a resource does not meet expectations, we will quickly provide a suitable replacement at no additional cost.`,
    },
    {
      question: "How does billing work?",
      answer: `TopTalenz offers flexible billing models, including hourly, weekly, or monthly rates, depending on your preference. Detailed invoices ensure transparency in cost management.`,
    },
    {
      question: "Do you provide remote and on-site talent?",
      answer: `Yes, TopTalenz offers both remote and on-site professionals based on your requirements and project scope.`,
    },
    {
      question: "How do you handle confidentiality and data security?",
      answer: `All professionals sign NDAs and adhere to strict data security protocols to ensure your company’s sensitive information remains protected.`,
    },
    {
      question: "How do we get started with staff augmentation?",
      answer: `Simply contact us with your requirements, and TopTalenz will assess your needs, provide candidate options, and guide you through the onboarding process.`,
    },
    {
      question: "Can we convert an augmented staff member into a full-time employee?",
      answer: `Yes, if you find a great fit within your team, TopTalenz offers options to transition professionals to full-time roles based on mutually agreed terms.`,
    },
  ];
  
  return (
    <>
      <Header />
      <div className="hero relative">
        <div className="hero-bg-video-overlay-horizontal"></div>
        <div className="container z-10 relative">
          <div className="hero-bg-video-left pt-40 mb-20">
            <div className="hero-bg-video-content">
              <h1 className="hero-bg-video-title">FAQ</h1>
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
              FAQ
            </h2>
          </div>
          <div className="grid gap-6">
            {faqList.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg text-[#0e8ac8] mb-2">
                  {faq.question}
                </h3>
                <div className="text-gray-700 text-sm whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
