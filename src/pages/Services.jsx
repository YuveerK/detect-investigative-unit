import React from "react";
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
import { BiWorld } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";

import { Link } from "react-router-dom";
import ServicesCard from "../components/ServicesCard";
const Services = () => {
  return (
    <div className="container mx-auto">
      <div className="my-8 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <AiOutlineAudit className="text-4xl text-blue-400" />
          <h1 className="text-2xl font-bold">
            Investigative Auditing, Forensic Fraud and Theft: Investigative
            Auditing
          </h1>
        </div>
        <p className="mt-4  text-lg leading-relaxed">
          We have access to accountants skilled in the field of financial
          investigations to supplement our fraud and theft investigations. We
          specifically make use of these services when performing due diligence
          services as well. Investigative Auditing entails forensic auditing.
          This is where we will dig deep into your electronic and physical
          records, identifying discrepancies and tracing these back to their
          origins. We will be able to find fraud, negligence, theft, and
          sabotage with a view to identifying errant parties. We also engage in
          gap-filling strategies and rollback mechanisms for missing [stolen]
          data, documentary, and other critical records.
        </p>
      </div>

      <div className="my-8 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <LuMicroscope className="text-4xl text-blue-400" />
          <h1 className="text-2xl font-bold">FORENSIC AUDITING.</h1>
        </div>
        <p>
          In line with our Investigative Auditing, members of our team are well
          versed in the science of forensic technology. We have sophisticated
          tools to help us identify, follow and gather data related to cases of
          fraud. Such as corruption, falsifying identities, manipulation of
          financial records or stealing of intellectual property. These services
          are largely offered as an extension to our bouquet of corporate
          services; however, it can certainly assist in personnel matters as
          well.
        </p>
      </div>
      <div className="my-8 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <MdCorporateFare className="text-4xl text-blue-400" />
          <h1 className="text-2xl font-bold">
            Corporate Investigations & Due Diligence
          </h1>
        </div>
        <p>
          We offer a suite of corporate investigation services to mitigate your
          business risk. The typical services we provide in this arena are
          financial investigations to identify fraud or embezzlement,
          pre-employment screening, and background checks, intellectual property
          theft and criminal enquiries. We have sophisticated means to follow
          electronic trails that have been particularly useful in cases of
          cybercrime and data manipulation.
          <br />
          Under the banner of our corporate services, we can assist with legal,
          financial and other material investigations required for due
          diligence. This service is beneficial prior to entering into any
          Contracts, Buy-Outs or any other significant financial investments. We
          will analyze reports, perform necessary audits, background checks and
          conduct enquiries to provide you with a comprehensive report.
        </p>
      </div>
      <div className="my-8 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <BiWorld className="text-4xl text-blue-400" />
          <h1 className="text-2xl font-bold">Sectors/Areas of Investigation</h1>
        </div>
        <ul>
          <li>
            Government departments, regulatory institutions of government,
            (CIPC, Consumer Commission, Companies & Consumer Tribunals, Credit
            and Financial Sector Regulatory bodies, etc.){" "}
          </li>
          <li>
            Provincial and Municipal (Local government) regulatory institutions;
          </li>
          <li>Parastatals and State.Owned Entities [SOE's); </li>
          <li>Tax/SARS</li>
          <li>Private sector Institutions</li>
          <li>Medical Aid Schemes</li>
          <li>Housing</li>
          <li>Road Accident Fund</li>
          <li>Procurement</li>
          <li>Corporate investigation </li>
          <li>Mining</li>
          <li>Energy</li>
          <li>Private investi!jltion</li>
        </ul>
        <p className="font-bold">
          NB: the areas below should be factored into the above broad topics
        </p>
        <ul>
          <li>BANKING FRAUD</li>
          <li>MEDICAL AID SCHEMES IRREGULAR AND FRAUDULENT CLAIMS</li>
          <li>SERVICE LEVEL AUDITS</li>
          <li>FINANCIAL & FORENSIC AUDITS</li>
          <li>FRAUDULENT ROAD ACCIDENT FUND CLAIMS</li>
          <li>IRREGULAR & FRAUDULENT INSURANCE CLAIMS</li>
          <li>MEDICAL NEGLIGENCE CLAIMS</li>
          <li>DATA EXTRACTION, AUDIT & ANALYSIS</li>
          <li>TAX EVASIONS SCHEMES & AUDITS</li>
          <li>GENERAL FORENSIC INVESTIGATIONS</li>
          <li>PRIVATE INVESTIGATIONS AND PROSECUTIONS</li>
          <li>PUBLIC FINANCE AND PROCUREMENT IRREGULARITIES </li>
          <li>RISK ADVISORY MANAGEMENT</li>
        </ul>
      </div>
      <div className="my-8 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <SlNotebook eAudit className="text-4xl text-blue-400" />
          <h1 className="text-2xl font-bold">Analyst's Notebook</h1>
        </div>
        <p>
          Analyst's notebook is a tool used by police and intelligence services
          worldwide. It can scan a large amount of data and draw connections
          from seemingly unrelated or indecipherable information into a readable
          format. <br /> <br />
          This tool is highly useful for many applications and can help to
          identify, predict, prevent and disrupt criminal, terrorist and
          fraudulent activities. It is one of the tools available to us for use
          when tracing or conducting corporate security, fraud and cybercrime
          investigations to benefit our clients for maximum impact.
        </p>
      </div>
      <div className="my-8 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <FaChartBar className="text-4xl text-blue-400" />
          <h1 className="text-2xl font-bold">Risk Management</h1>
        </div>
        <p>
          Private, Corporate & Criminal Investigations. <br /> <br />
          We Provide Absolute Facts, Definitive Answers and Mitigate Your Risk;{" "}
          <br /> <br /> We have a hand-picked team of private investigators
          equipped with a diverse range of specializations to assist with
          private, corporate or criminal investigations. Our mission is to
          uncover the truth and present accurate, relevant findings, enabling
          our clients to reduce their risk, make informed decisions or find
          closure.
        </p>
      </div>
      <div className="my-8 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <FaCheck className="text-4xl text-blue-400" />
          <h1 className="text-2xl font-bold">Private Background Checks</h1>
        </div>
        <p>
          In many instances, clients have commissioned background checks on
          partners before marriage. The decision to marry a person is probably
          one of the biggest choices you will ever make. While the romance is
          blooming, many people are distracted by love and naturally believe
          what they have been told. Sometimes, the love of your life is holding
          back information that they fear may hurt you. In extreme cases, they
          have ulterior motives for popping the question. There is no harm in
          validating what you know about your soon-to-be spouse's history. If
          you are going to make a legal commitment to a person, it is wise to do
          your homework -as you would with any other legal transaction. <br />{" "}
          <br />
          Performing a background check prior to marriage will help you to be as
          educated as possible before making one of your most important life
          decisions. Find out if your fiance has any bad debt, criminal records
          or is possibly already wed before you sign that prenuptial.
        </p>
      </div>
      <div className="my-8 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <GiDigitalTrace className="text-4xl text-blue-400" />
          <h1 className="text-2xl font-bold">Tracing Services</h1>
        </div>
        <p>
          Tracing refers to locating a person or people. There are many
          different reasons why tracing services are required. In personal
          matters, clients are looking for long lost relatives, biological
          parents, or missing persons. In corporate matters, clients try to
          locate debtors. In criminal cases, perpetrators evade and think they
          can outsmart the law, or, am eyewitness may flee out of fear for their
          life. We employ expert profilers, forensic investigators and use a
          blend of technologies to locate our targets.
        </p>
      </div>
      <div className="my-8 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <GoLaw className="text-4xl text-blue-400" />
          <h1 className="text-2xl font-bold">Support to Law Firms</h1>
        </div>
        <p>
          Our experience in law enforcement and legal cases enables us to
          collect and secure evidence as well as prepare reports, which can
          assist legal teams in their pursuits. Our services have proven useful
          to in time sensitive cases, thanks for our agility and swift work.
          Often, when new testimonies arise, we are called on to verify the
          legitimacy of claims. For supplementary information.
        </p>
      </div>
      <div className="my-8 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <FaBuildingColumns className="text-4xl text-blue-400" />
          <h1 className="text-2xl font-bold">Court Case Preparation</h1>
        </div>
        <p>
          Collection, storage and presentation of evidence are crucial to court
          cases. We are often called on to assist the SAPS and work with legal
          teams. <br /> <br />
          Our policing experience means that we have intimate knowledge of the
          law and legal procedures. For this reason, we can consult with your
          legal team and set out to find the correct information [advice on
          evidence) that will strengthen your case. Knowing exactly where to
          look saves valuable time. <br />
          <br /> Our network of specialists enables us to deploy the best
          resources available for gathering relevant, admissible intelligence
          and evidence.
        </p>
      </div>
      <div className="my-8 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <MdGroups className="text-4xl text-blue-400" />
          <h1 className="text-2xl font-bold">Internal Proceedings </h1>
        </div>
        <p>
          We have a great deal of experience with the South African labor law.
          With that knowledge, we can carry out thorough enquiries to collect
          evidence that is suitable for all disciplinary matters and internal
          proceedings. As with our pre-employment screening and vetting, we can
          apply astute questioning in our interviews either with or without
          polygraph testing as necessitated by the case at hand. <br />
          <br />
          We are able to commence a disciplinary matter from beginning to end
          with satisfactory and unreviewable results, with our wealth of
          experience in intelligence, investigation, prosecution and
          adjudication.
        </p>
      </div>
      <div className="my-8 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <MdOutlineSecurity className="text-4xl text-blue-400" />
          <h1 className="text-2xl font-bold">
            Security Investigation, Risk Analysis, and Implementation
          </h1>
        </div>
        <p>
          We offer both business and personal security investigation [PSI)
          services. Both involve a thorough audit of your current physical and
          electronic security measures. It includes deliberate attempts to find
          vulnerabilities and breaches in such measures. <br /> <br />
          We are then able to use this information to determine and implement
          robust solutions to mitigate future risks. This could either be by
          deploying electronic surveillance or supplying close protection
          services.
        </p>
      </div>
      <div className="my-8 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <GiCctvCamera className="text-4xl text-blue-400" />
          <h1 className="text-2xl font-bold">
            Security Investigation, Risk Analysis, and Implementation
          </h1>
        </div>
        <p>
          We have state of the art CCTV and Audio recording and monitoring tools
          for private or business premises. When we receive this requirement, we
          will ask a few pertinent questions to ensure adherence to all relevant
          laws. This is particularly important for business applications.
          <br />
          <br />
          We will consult you on your needs to ensure you receive a solution
          that will help you fulfill your objectives.
          <br />
          <br />
          Our surveillance services are comprised of a combination of electronic
          and manual observation techniques. Our detectives are trained to keep
          a watchful e at a discreet distance where required. <br /> <br />
          We also have a wide range of unobtrusive visual and audio surveillance
          equipment used in both private and corporate enquiries. <br /> <br />
          Surveillance has a number of useful applications for your own personal
          protection, to monitor you and your premises in order to detect
          threats as far in advance as possible. Alternatively, it can be used
          to monitor another person under investigation. Finally, it can be used
          as a means to gather evidence to disproof or substantiate guilt in
          matters going to court.
        </p>
      </div>
      <div className="my-8 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <FaUserSecret className="text-4xl text-blue-400" />
          <h1 className="text-2xl font-bold">
            Confidentiality and Conflict of Interest Management
          </h1>
        </div>
        <p>
          We have state of the art CCTV and Audio recording and monitoring tools
          for private or business premises. When we receive this requirement, we
          will ask a few pertinent questions to ensure adherence to all relevant
          laws. This is particularly important for business applications.
          <br />
          <br />
          We will consult you on your needs to ensure you receive a solution
          that will help you fulfill your objectives.
          <br />
          <br />
          The firm believes in high level of confidentiality on the matters it
          handles for the client, and ensures the safekeeping and preservation
          of file and documents beyond the finalization of the matter. Files are
          kept safe at a specific safe place and electronic backups in terms of
          ... should any physical damage occurred, all information can be
          retrieved and provided to the client if needed.
        </p>
      </div>
    </div>
  );
};

export default Services;
