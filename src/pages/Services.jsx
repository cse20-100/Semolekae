import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleIndex = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const servicesData = [
    {
      title: "Employment & Labour Law",
      description:
        "We provide comprehensive legal support across the employment and labour law spectrum, tailored to both employers and employees. Our services include:",
      items: [
        "Drafting and reviewing employment contracts, HR policies, and collective agreements",
        "Facilitating disciplinary hearings and internal investigations",
        "Advising on retrenchments, redundancies, and organisational restructuring",
        "Conducting tailored training for staff, management, and unions",
        "Representing clients in dispute resolution forums (High Court, Industrial Court), including mediation, arbitration, and litigation",
      ],
    },
    {
      title: "Administrative & Public Law",
      items: [
        "Judicial reviews and statutory interpretation",
        "Regulatory compliance and administrative decisions",
        "Public sector litigation and advisory",
      ],
    },
    {
      title: "Family Law",
      items: [
        "Divorce, maintenance, and custody matters",
        "Marital property and estate planning",
        "Customary and civil law intersections",
      ],
    },
    {
      title: "Corporate & Commercial Law",
      items: [
        "Business formation, restructuring, and governance",
        "Commercial contracts and negotiations",
        "Mergers, acquisitions, and joint ventures",
      ],
    },
    {
      title: "Property & Conveyancing",
      items: [
        "Property transfers and deeds registration",
        "Lease agreements and land disputes",
        "Conveyancing for both private and commercial property",
      ],
    },
    {
      title: "Notarial Services",
      items: [
        "Notarisation of documents",
        "Ante-nuptial contracts",
        "Authentication and certification",
      ],
    },
    {
      title: "Intellectual Property",
      items: ["Industrial Property", "Copyright", "Patents"],
    },
    {
      title: "Litigation & Dispute Resolution",
      items: [
        "Civil, commercial, and labour litigation",
        "Urgent court applications and interdicts",
        "Arbitration and mediation",
        "Representation at the High Court, Industrial Court, Court of Appeal and other tribunals.",
      ],
    },
    {
      title: "Trust Registration & Advisory",
      description:
        "We assist clients in the formation, registration, and administration of trusts in accordance with the Trust Property Control Act, 2022. Our services include:",
      items: [
        "Structuring and drafting trust deeds tailored to the client's objectives",
        "Advising on the selection and appointment of trustees",
        "Preparing and submitting trust registration documents with the Master of the High Court",
        "Ensuring compliance with statutory requirements, including fiduciary duties and record-keeping",
        "Ongoing legal advisory on trust governance, amendments, and dissolution",
      ],
    },
    {
      title: "Legislative Advisory & Policy Support",
      description:
        "We provide strategic legal insight and advisory services to clients navigating the development, interpretation, and implementation of legislation and policy frameworks. Our services include:",
      items: [
        "Legal analysis of proposed or existing legislation, regulations, and policy instruments",
        "Advisory on legislative compliance and institutional obligations",
        "Supporting public consultations and stakeholder engagement processes",
        "Monitoring legal developments and providing regular updates to clients in regulated sectors",
      ],
    },
    {
      title: "Company Registration & Corporate Support",
      description:
        "We assist entrepreneurs, SMEs, and established businesses with seamless company formation and ongoing corporate legal compliance. Our services include:",
      items: [
        "Registration of companies, partnerships, and non-profit entities",
        "Drafting founding documents: constitutions, shareholder agreements, and MOIs",
        "Advisory on company structure, directorship, and shareholding",
        "Post-registration compliance: opening statutory registers, resolutions, and annual filings",
        "Ongoing corporate governance support and legal secretarial services",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-b from-[#e5eef5] to-[#bfdcf0] pt-24 pb-6 px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#0B2B59]">
          Our Legal Services
        </h1>
        <div className="space-y-4">
          {servicesData.map(({ title, description, items }, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="bg-white border border-[#D1D9E6] rounded-2xl shadow-md"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-[#e5eef5] transition-colors rounded-2xl group"
                >
                  <h2 className="text-xl font-semibold text-[#0B2B59] group-hover:text-[#1B74E4] transition-colors">
                    {title}
                  </h2>
                  <span className="text-[#1B74E4] text-2xl font-bold select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-base text-[#0B2B59] overflow-hidden"
                    >
                      {description && (
                        <p className="mb-3 leading-relaxed">{description}</p>
                      )}
                      <ul className="list-disc list-inside space-y-1 text-[#0B2B59]">
                        {items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
