import React, { useRef } from "react";
import bg from "../assets/bg.jpeg";
import Hero from "../components/Hero";
import ServicesCard from "../components/ServicesCard";
import { AiOutlineAudit } from "react-icons/ai";
import { LuMicroscope } from "react-icons/lu";
import { MdCorporateFare } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { SlNotebook } from "react-icons/sl";
import { FaChartBar, FaUserSecret } from "react-icons/fa";
import { GiCctvCamera, GiDigitalTrace } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdGroups, MdOutlineSecurity } from "react-icons/md";
import { Link } from "react-router-dom";
import TestimonialCard from "../components/TestimonialCard";
import { PiBriefcaseThin } from "react-icons/pi";
import emailjs from "@emailjs/browser";

const Home = () => {
  // Inline styles for the background image
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover", // Cover the entire div
    backgroundPosition: "center", // Center the image
    backgroundRepeat: "no-repeat", // Do not repeat the image
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_stslghp", "template_wo2rfta", form.current, {
        publicKey: "ZRBw-xhTyQEbEp5Zo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <div
        style={backgroundStyle}
        className="w-full h-[calc(100vh-80px)] flex items-center justify-center p-8"
      >
        <Hero />
      </div>
      <div className="container mx-auto px-4 md:px-0">
        <div>
          <div className="w-full flex items-center justify-center">
            <PiBriefcaseThin size={80} className="mr-4 text-orange-400" />
            <h1 className="text-3xl md:text-6xl text-center font-thin my-8 md:my-12 text-orange-400">
              Company History
            </h1>
          </div>

          <div className="flex border border-gray-600 rounded-md p-8">
            <div>
              <p className="text-base md:text-lg font-light text-justify leading-relaxed mb-6">
                Established in 2017, our firm stands as a testament to a rich
                heritage in law enforcement and corporate services, boasting a
                collective experience of 7 to 11 years among its personnel in
                fields such as police detective work, logistics administration,
                corporate investigation, and risk management. This diverse
                expertise, especially in roles like fraud detection in police
                crime units and logistic administration, cements our status as a
                comprehensive one-stop-shop solution for our clients' diverse
                requirements.
              </p>

              <h2 className="text-2xl md:text-3xl mb-4 font-thin">
                Biography of Edwin Maine
              </h2>
              <p className="text-base md:text-lg font-light text-justify leading-relaxed mb-6">
                At the heart of our operations is Edwin Maine, a former member
                of the Sandton Fraud Detective Unit. His journey began with a
                year of intensive police training, culminating in proficiency in
                fraud investigation. Edwin's relentless pursuit of excellence
                led him to specialize further through police investigation
                courses, significantly enhancing his investigative prowess.
              </p>

              <h2 className="text-2xl md:text-3xl mb-4 font-thin">Ownership</h2>
              <p className="text-base md:text-lg font-light text-justify leading-relaxed mb-6">
                Proudly reflecting our commitment to diversity and empowerment,
                our firm is 100% black-owned and 30% black woman-owned. It is
                steered by a dynamic duo of young entrepreneurs and the seasoned
                expertise of a former police officer and an experienced
                logistics clerk.
              </p>

              <h2 className="text-2xl md:text-3xl mb-4 font-thin">
                Vision & Mission
              </h2>
              <p className="text-base md:text-lg font-light text-justify leading-relaxed mb-6">
                <strong>Vision:</strong> To be the beacon of ethical forensic
                and risk management solutions for tomorrow's world.
                <br />
                <strong>Mission:</strong> Our mission is unwavering: to serve
                our clients with unwavering dedication and zeal in every facet
                of our engagement.
              </p>

              <h2 className="text-2xl md:text-3xl mb-4 font-thin">
                Values & Motto
              </h2>
              <p className="text-base md:text-lg font-light text-justify leading-relaxed">
                <strong>Values:</strong> Ethics, Integrity, Professionalism,
                Responsibility, and Expedition.
                <br />
                <strong>Motto:</strong> "Going the Extra Mile, Providing an
                Investigation and Service with High Integrity."
              </p>
            </div>
            <div>
              <img src={require("../assets/download.png")} alt="" />
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-6xl text-center font-thin my-8 md:my-12 text-orange-400">
          Services Offered
          <p className="text-gray-400 text-2xl">
            A brief overview of the services offered
          </p>
          <p className="text-gray-400 text-sm">
            Providing expert forensics investigation services for digital and
            physical evidence.
          </p>
        </h1>
        <div className="flex items-center justify-center flex-wrap p-4 relative">
          <img
            src={require("../assets/2.png")}
            alt=""
            className="absolute left-0  top-[-300px] w-[400px] h-[400px]"
          />
          <ServicesCard
            title={"Investigative Auditing"}
            description={
              "This involves deep scrutiny of both electronic and physical records to identify discrepancies, fraud, negligence, theft, and sabotage. It includes strategies to recover missing or stolen data and documents."
            }
            icon={<AiOutlineAudit className="text-5xl" />}
          />
          <ServicesCard
            title={"Forensic Auditing"}
            description={
              "Utilizing advanced forensic technology tools, the company tackles cases of corruption, identity falsification, financial record manipulation, and intellectual property theft, primarily for corporate clients but also for personal matters."
            }
            icon={<LuMicroscope className="text-5xl" />}
          />
          <ServicesCard
            title={"Corporate Investigations & Due Diligence"}
            description={
              "This involves deep scrutiny of both electronic and physical records to identify discrepancies, fraud, negligence, theft, and sabotage. It includes strategies to recover missing or stolen data and documents."
            }
            icon={<MdCorporateFare className="text-5xl" />}
          />
          <ServicesCard
            title={"Specialized Investigations"}
            description={
              "They handle a range of specific investigative needs such as banking fraud, fraudulent claims in medical aid schemes, service level audits, financial and forensic audits, fraudulent Road Accident Fund claims, insurance fraud, medical negligence claims, tax evasion schemes, and general forensic investigations."
            }
            icon={<CiSearch className="text-5xl" />}
          />
          <ServicesCard
            title={"Analyst's Notebook"}
            description={
              "A tool used for scanning and analyzing large amounts of data to draw connections and assist in corporate security, fraud, and cybercrime investigations."
            }
            icon={<SlNotebook eAudit className="text-5xl" />}
          />
          <ServicesCard
            title={"Risk Management"}
            description={
              "They offer private, corporate, and criminal investigation services to provide facts, answers, and risk mitigation. This includes background checks before marriage and other personal decisions."
            }
            icon={<FaChartBar className="text-5xl" />}
          />
          <ServicesCard
            title={"Tracing Services"}
            description={
              "Locating persons for personal, corporate, or criminal reasons, employing expert profilers and forensic investigators."
            }
            icon={<GiDigitalTrace className="text-5xl" />}
          />
          <ServicesCard
            title={"Support to Law Firms"}
            description={
              "This involves deep scrutiny of both electronic and physical records to identify discrepancies, fraud, negligence, theft, and sabotage. It includes strategies to recover missing or stolen data and documents."
            }
            icon={<GoLaw className="text-5xl" />}
          />

          <ServicesCard
            title={"Court Case Preparation"}
            description={
              "Assisting with the collection, storage, and presentation of evidence in coordination with legal teams and police."
            }
            icon={<FaBuildingColumns className="text-5xl" />}
          />
          <ServicesCard
            title={"Internal Proceedings"}
            description={
              "Utilizing knowledge of South African labor law for internal enquiries, disciplinary matters, and adjudications."
            }
            icon={<MdGroups className="text-5xl" />}
          />
          <ServicesCard
            title={"Security Investigation, Risk Analysis, and Implementation"}
            icon={<MdOutlineSecurity className="text-5xl" />}
          />
          <ServicesCard
            title={"CCTV, Audio Installation & Electronic Surveillance"}
            icon={<GiCctvCamera className="text-5xl" />}
          />
          <ServicesCard
            title={"Confidentiality and Conflict of Interest Management"}
            description={
              "Ensuring the safekeeping and confidentiality of client information, with rigorous systems and procedures in place."
            }
            icon={<FaUserSecret className="text-5xl" />}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Link
          to={"/services"}
          className="w-fit px-4 py-2 bg-orange-400 rounded-sm text-white mt-8"
        >
          Learn More
        </Link>
      </div>

      <h1 className="mt-8 text-2xl text-center">What Our Clients Are Saying</h1>
      <div className="flex overflow-x-auto space-x-4 p-4">
        <TestimonialCard
          name="John D., CEO of Tech Innovations Inc."
          title="Client Testimonial"
          testimonial="Working with this team has been a game-changer for our company. Their meticulous investigative auditing uncovered discrepancies we hadn't even suspected, safeguarding our business against significant potential losses. Their professionalism and thoroughness are truly unmatched."
        />
        <TestimonialCard
          name="John D., CEO of Tech Innovations Inc."
          title="Client Testimonial"
          testimonial="Working with this team has been a game-changer for our company. Their meticulous investigative auditing uncovered discrepancies we hadn't even suspected, safeguarding our business against significant potential losses. Their professionalism and thoroughness are truly unmatched."
        />
        <TestimonialCard
          name="John D., CEO of Tech Innovations Inc."
          title="Client Testimonial"
          testimonial="Working with this team has been a game-changer for our company. Their meticulous investigative auditing uncovered discrepancies we hadn't even suspected, safeguarding our business against significant potential losses. Their professionalism and thoroughness are truly unmatched."
        />
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg"
      >
        <div className="mb-5">
          <label
            htmlFor="user_name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="user_email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Send"
          className="w-full p-3 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </form>
    </div>
  );
};

export default Home;
