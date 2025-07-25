import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen p-6 md:p-10 lg:p-16 flex flex-col items-center justify-start" style={styles.container}>
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-center" style={styles.heading}>
          Our Legal Services
        </h1>

        <section className="mb-10 p-6 rounded-lg shadow-lg" style={styles.sectionBackground}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={styles.subHeading}>Employment & Labour Law</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4" style={styles.paragraph}>
            We provide comprehensive legal support across the employment and labour law spectrum, tailored to both employers and employees. Our services include:
          </p>
          <ul className="list-disc list-inside text-base md:text-lg pl-4" style={styles.list}>
            <li>Drafting and reviewing employment contracts, HR policies, and collective agreements</li>
            <li>Facilitating disciplinary hearings and internal investigations</li>
            <li>Advising on retrenchments, redundancies, and organisational restructuring</li>
            <li>Conducting tailored training for staff, management, and unions</li>
            <li>Representing clients in dispute resolution forums (High Court, Industrial Court), including mediation, arbitration, and litigation</li>
          </ul>
        </section>

        <section className="mb-10 p-6 rounded-lg shadow-lg" style={styles.sectionBackground}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={styles.subHeading}>Administrative & Public Law</h2>
          <ul className="list-disc list-inside text-base md:text-lg pl-4" style={styles.list}>
            <li>Judicial reviews and statutory interpretation</li>
            <li>Regulatory compliance and administrative decisions</li>
            <li>Public sector litigation and advisory</li>
          </ul>
        </section>

        <section className="mb-10 p-6 rounded-lg shadow-lg" style={styles.sectionBackground}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={styles.subHeading}>Family Law</h2>
          <ul className="list-disc list-inside text-base md:text-lg pl-4" style={styles.list}>
            <li>Divorce, maintenance, and custody matters</li>
            <li>Marital property and estate planning</li>
            <li>Customary and civil law intersections</li>
          </ul>
        </section>

        <section className="mb-10 p-6 rounded-lg shadow-lg" style={styles.sectionBackground}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={styles.subHeading}>Corporate & Commercial Law</h2>
          <ul className="list-disc list-inside text-base md:text-lg pl-4" style={styles.list}>
            <li>Business formation, restructuring, and governance</li>
            <li>Commercial contracts and negotiations</li>
            <li>Mergers, acquisitions, and joint ventures</li>
          </ul>
        </section>

        <section className="mb-10 p-6 rounded-lg shadow-lg" style={styles.sectionBackground}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={styles.subHeading}>Property & Conveyancing</h2>
          <ul className="list-disc list-inside text-base md:text-lg pl-4" style={styles.list}>
            <li>Property transfers and deeds registration</li>
            <li>Lease agreements and land disputes</li>
            <li>Conveyancing for both private and commercial property</li>
          </ul>
        </section>

        <section className="mb-10 p-6 rounded-lg shadow-lg" style={styles.sectionBackground}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={styles.subHeading}>Notarial Services</h2>
          <ul className="list-disc list-inside text-base md:text-lg pl-4" style={styles.list}>
            <li>Notarisation of documents</li>
            <li>Ante-nuptial contracts</li>
            <li>Authentication and certification</li>
          </ul>
        </section>

        <section className="mb-10 p-6 rounded-lg shadow-lg" style={styles.sectionBackground}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={styles.subHeading}>Intellectual Property</h2>
          <ul className="list-disc list-inside text-base md:text-lg pl-4" style={styles.list}>
            <li>Industrial Property</li>
            <li>Copyright</li>
            <li>Patents</li>
          </ul>
        </section>

        <section className="mb-10 p-6 rounded-lg shadow-lg" style={styles.sectionBackground}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={styles.subHeading}>Litigation & Dispute Resolution</h2>
          <ul className="list-disc list-inside text-base md:text-lg pl-4" style={styles.list}>
            <li>Civil, commercial, and labour litigation</li>
            <li>Urgent court applications and interdicts</li>
            <li>Arbitration and mediation</li>
            <li>Representation at the High Court, Industrial Court, Court of Appeal and other tribunals.</li>
          </ul>
        </section>

        <section className="mb-10 p-6 rounded-lg shadow-lg" style={styles.sectionBackground}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={styles.subHeading}>Trust Registration & Advisory</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4" style={styles.paragraph}>
            We assist clients in the formation, registration, and administration of trusts in accordance with the Trust Property Control Act, 2022. Our services include:
          </p>
          <ul className="list-disc list-inside text-base md:text-lg pl-4" style={styles.list}>
            <li>Structuring and drafting trust deeds tailored to the client's objectives</li>
            <li>Advising on the selection and appointment of trustees</li>
            <li>Preparing and submitting trust registration documents with the Master of the High Court</li>
            <li>Ensuring compliance with statutory requirements, including fiduciary duties and record-keeping</li>
            <li>Ongoing legal advisory on trust governance, amendments, and dissolution</li>
          </ul>
        </section>

        <section className="mb-10 p-6 rounded-lg shadow-lg" style={styles.sectionBackground}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={styles.subHeading}>Legislative Advisory & Policy Support</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4" style={styles.paragraph}>
            We provide strategic legal insight and advisory services to clients navigating the development, interpretation, and implementation of legislation and policy frameworks. Our services include:
          </p>
          <ul className="list-disc list-inside text-base md:text-lg pl-4" style={styles.list}>
            <li>Legal analysis of proposed or existing legislation, regulations, and policy instruments</li>
            <li>Advisory on legislative compliance and institutional obligations</li>
            <li>Supporting public consultations and stakeholder engagement processes</li>
            <li>Monitoring legal developments and providing regular updates to clients in regulated sectors</li>
          </ul>
        </section>

        <section className="p-6 rounded-lg shadow-lg" style={styles.sectionBackground}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={styles.subHeading}>Company Registration & Corporate Support</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4" style={styles.paragraph}>
            We assist entrepreneurs, SMEs, and established businesses with seamless company formation and ongoing corporate legal compliance. Our services include:
          </p>
          <ul className="list-disc list-inside text-base md:text-lg pl-4" style={styles.list}>
            <li>Registration of companies, partnerships, and non-profit entities</li>
            <li>Drafting founding documents: constitutions, shareholder agreements, and MOIs</li>
            <li>Advisory on company structure, directorship, and shareholding</li>
            <li>Post-registration compliance: opening statutory registers, resolutions, and annual filings</li>
            <li>Ongoing corporate governance support and legal secretarial services</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#0F2C3B', // Dark Teal/Blue-Green from video
    color: '#E0E0E0', // Light grey for good contrast
    fontFamily: 'Inter, sans-serif', // Using Inter font as per instructions
  },
  sectionBackground: {
    backgroundColor: '#1A3F50', // Slightly lighter dark teal for section backgrounds
    border: '1px solid #FFD700', // Gold border for sections
  },
  heading: {
    color: '#FFD700', // Gold/Light Yellow from video
  },
  subHeading: {
    color: '#FFD700', // Gold/Light Yellow from video
  },
  paragraph: {
    color: '#E0E0E0', // Light grey for text
  },
  list: {
    color: '#E0E0E0', // Light grey for list items
  },
};

export default Services;
