"use client";

import { MagicButton } from "@/components/ui/MagicButton";
import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaSchool } from "react-icons/fa";
import { IoIosMail, IoMdArrowRoundBack } from "react-icons/io";
import "@/app/globals.css";
import { MdDateRange } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
// import {Resume} from "@/public/Matty_s_Resume-2.pdf"
const Resume = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "./BalvinderSingh_NSUT_.pdf"; // Adjust the path as needed
    console.log(link.href);
    
    link.download = "BalvinderSingh-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const email = "balvinders.pro@gmail.com";

  const handleMailtoClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="bg-[#000319] SG_normal overflow-hidden">
      <a href="/">
      <span className="absolute top-10 left-10"><IoMdArrowRoundBack className="w-10 h-10"/></span>
      </a>
      <div className="flex lg:flex-row flex-col gap-4 max-lg:mt-10 lg:m-10 m-3">
        <div className="col-span-1 lg:w-[25rem] w-full">
          <div className="mt-0 gap-2 flex flex-col justify-start items-center lg:border-r-2 max-lg:justify-center">
            {/* <div className='radius-full'></div> */}
            {/* Image */}
            <div className="rounded-full lg:w-[220px] lg:h-[220px] w-48 h-48 overflow-hidden">
              <img src="./mypic.png" alt="" className="" />
            </div>
            <p className="SG_700 text-4xl  lg:hidden">Balvinder Singh</p>
            {/* Download */}
            <div className="w-fit lg:mt-[-1rem] mt-2 " onClick={handleClick}>
              <MagicButton
                title="Download PDF"
                icon={<FaDownload />}
                position="right"
              />
            </div>
            {/* Quick Links */}
            <div className="flex flex-col lg:items-start items-center mt-4 w-60">
              <div className="lg:text-sm text-[#FFD29F] SG_normal">
                Quick Links
              </div>
              <div className="flex flex-row justify-center items-center gap-x-2 mt-2">
                <a href="https://www.linkedin.com/in/balvind3rsingh/">
                  <FaLinkedin className="w-7 h-7" />
                </a>
                <a
                  href={`mailto:${email}`}
                  onClick={handleMailtoClick}
                  className="text-xl"
                >
                  <IoIosMail className="w-10 h-10" />
                </a>
                <a href="https://www.github.com/balvind3r/">
                  <FaGithub className="w-7 h-7" />
                </a>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center max-lg:text-center mt-4 w-60">
              <div className="lg:text-sm text-[#FFD29F] SG_normal">
                Technical Skills
              </div>
              <div className="flex flex-row justify-center items-center gap-x-2 mt-2">
                <p>Data Structures, DBMS, Web-Development, AI/ML</p>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center max-lg:text-center mt-4 w-60">
              <div className="lg:text-sm text-[#FFD29F] SG_normal">
                Languages Known
              </div>
              <div className="flex flex-row justify-center items-center gap-x-2 mt-2">
                <p>C++, Python, JavaScript, TypeScript</p>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center max-lg:text-center mt-4 w-60">
              <div className="lg:text-sm text-[#FFD29F] SG_normal">
                Development Skills
              </div>
              <div className="flex flex-row justify-center items-center gap-x-2 mt-2">
                <p>
                  ShadCN, AceternityUI, ReactJs, NextJs, TailwindCSS, RTK,
                  NodeJs, MongoDB, MySQL, Git/GitHub
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center max-lg:text-center mt-4 w-60">
              <div className="lg:text-sm text-[#FFD29F] SG_normal">
                Current Education
              </div>
              <div className="flex flex-row justify-center items-start gap-x-2 mt-2">
                <div className=" w-10 h-10">
                  <IoSchool className="w-8 h-8" />
                </div>
                <div className="flex-col gap-x-1">
                  <p>Netaji Subhas University of Technology</p>
                  <p className="SG_300 text-sm">
                    BTech in Computer Science with Specialisation in AI/ML
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-lg:w-[80vw] max-lg:mx-auto max-lg:items-center  lg:mx-10 flex flex-row ">
          <div>
            <div className="border-b-2 w-full h-fit max-lg:mt-10">
              <p className="SG_700 lg:text-4xl mb-6 max-lg:hidden">
                Balvinder Singh
              </p>
              <p className="SG_300 mb-8 lg:text-base max-lg:text-center">
                I&apos;m a final year student from NSUT-Delhi, currently pursuing
                Computer Science with Artificial Intelligence. I love to
                experiment with new technologies and tech-stacks. In addition to
                my academics, I have actively participated in and organized
                various events. These experiences have helped me develop a
                well-rounded skill set that complements my technical abilities,
                preparing me for diverse challenges in the professional world.
              </p>
              <p className="SG_500 lg:text-2xl max-lg:text-xl max-lg:text-start mb-4">
                Work Experience
              </p>
            </div>
            <div className="flex flex-col my-5 ">
              <div className="SG_500 lg:text-2xl text-xl mb-2">
                <p className="font-extrabold">Mahindra Logistics</p>
                <div className="flex flex-row justify-between">
                  <p>SDE Intern</p>
                  <div className="flex flex-row SG_300 justify-center items-center lg:text-sm text-[#c3c0bc] gap-x-1">
                    <MdDateRange color="#c3c0bc" className="h-5 w-5" />
                    <p>Feb&apos;24 - April&apos;24 </p>
                    <p className="max-md:hidden">| 2 Months</p>
                  </div>
                </div>
                <div className="SG_300 lg:text-base text-sm ml-6 mt-3 ">
                  <ul className="list-disc">
                    <li>
                      Completely revamped LogiPulse - Mahindra&apos;s KPI monitoring
                      software for warehouses
                    </li>
                    <li>
                      Developed user-friendly frontend using modern frameworks
                    </li>
                    <li>
                      Implemented industry-level practices for version control
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-3 ">
              <div className="SG_500 lg:text-2xl text-xl mb-4">
                <p className="font-extrabold">SSPS Global</p>
                <div className="flex flex-row justify-between">
                  <p>Business Intern</p>
                  <div className="flex flex-row SG_300 justify-center items-center lg:text-sm text-[#c3c0bc] gap-x-1">
                    <MdDateRange color="#c3c0bc" className="h-5 w-5" />
                    <p className="max-lg:hidden">June&apos;24 - July&apos;24 </p>
                    <p className="lg:hidden">Jun&apos;23-Jul&apos;23 </p>
                    <p className="max-md:hidden">| 5 Weeks</p>
                  </div>
                </div>
                <div className="SG_300 lg:text-base text-sm ml-6 mt-3 mb-3">
                  <ul className="list-disc">
                    <li>
                      Worked alongside the CEO to understand and analyze the
                      company&apos;s cashflows.
                    </li>
                    <li>
                      Analysed company&apos;s expenditure to ensure positive
                      cashflows.
                    </li>
                    <li>
                      Prepared an exhaustive report for future expansion plans.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-b-2 w-full h-fit  SG_500 lg:text-2xl max-lg:text-xl max-lg:text-start pb-4">
              Awards & Achievements
            </div>
            <div>
              <div className="SG_300 lg:text-base text-sm ml-6 mt-3 mb-7">
                <ul className="list-disc">
                  <li>
                    Secured first position in Mahindra Logistics Catapult
                    Techathon.
                  </li>
                  <li>
                    Among top 30 teams selected for Smart India Hackathon.
                  </li>
                  <li>
                    Finalists in HackBVICAM, InnovateX Hackathon, HackNSUT &
                    SRMHacks.
                  </li>
                  <li>
                    Acted as contingent leader for E-Summit IIT Bombay 2024, won
                    awards in multiple competitions.
                  </li>
                  <li>
                    Secured first position in Pitch Perfect, Startup Pitching
                    Competition organised by Incubation Cell, NSUT.
                  </li>
                </ul>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
