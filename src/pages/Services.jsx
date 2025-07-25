import React from "react";

const Services = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white px-6 py-16 flex flex-col items-center overflow-y-auto">
      <div className="max-w-6xl w-full space-y-12">
        <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
          Our Legal Services
        </h1>

        {servicesData.map(({ title, description, items }, i) => (
          <section
            key={i}
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 rounded-2xl border-4 border-yellow-400 p-6 bg-[#1e293b]"
          >
            <div className="md:w-1/3">
              <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
                {title}
              </h2>
              {description && (
                <p className="text-gray-300 leading-relaxed">{description}</p>
              )}
            </div>

            <ul className="md:w-2/3 list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;
