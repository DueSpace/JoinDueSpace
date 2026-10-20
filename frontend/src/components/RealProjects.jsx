import React from "react";
import ProjectImage from "../assets/DuespaceProject.png";
import DueSpaceLogo from "../assets/Duespace.png";

import Member1 from "../assets/community/Desire.png";
import Member2 from "../assets/community/Precious.png";
import Member3 from "../assets/community/David.png";
import Member4 from "../assets/community/Grace.png";
import Member5 from "../assets/community/Adekanmi.png";
import Member6 from "../assets/community/Ebube.png";
import Member7 from "../assets/community/Uchenna.png";
import Member8 from "../assets/community/Borasky.png";

import { FiCalendar, FiArrowRight } from "react-icons/fi";

export const RealProjects = () => {
  const teamMembers = [
    Member1,
    Member2,
    Member3,
    Member4,
    Member5,
    Member6,
    Member7,
    Member8,
  ];

  return (
    <section className="w-full bg-[#fff7ff] px-5 py-8 sm:px-8 sm:py-10 lg:px-6 lg:py-9">
      {/* Section label */}
      <div className="mb-4 inline-flex rounded-[12px] border border-purple-500 px-3 py-2 lg:mb-3">
        <span className="font-mono text-[10px] uppercase tracking-wide text-purple-600 lg:text-[11px]">
          Real Projects
        </span>
      </div>

      {/* Heading */}
      <h2 className="mb-5 text-[17px] font-semibold leading-tight text-black lg:mb-5 lg:text-[23px]">
        What You’ll Build
      </h2>

      {/* Project preview */}
      <div className="w-full overflow-hidden rounded-t-lg bg-white">
        <img
          src={ProjectImage}
          alt="DueSpace project preview"
          className="block h-auto w-full object-contain"
        />
      </div>

      {/* Project information card */}
      <div className="-mt-px rounded-xl border border-gray-300 bg-white p-4 sm:p-5 lg:px-[38px] lg:py-[26px]">

                {/* Project identity */}
        <div className="flex w-full items-start gap-5 sm:gap-8 lg:gap-[80px]">

          {/* DueSpace logo */}
          <div className="w-[100px] shrink-0 sm:w-[120px] lg:w-[224px]">
            <img
              src={DueSpaceLogo}
              alt="DueSpace logo"
              className="block h-auto w-full object-contain"
            />
          </div>

          {/* Project title and description */}
          <div className="min-w-0 flex-1">
            <h3 className="m-0 text-left text-[19px] font-semibold leading-tight text-black sm:text-[24px] lg:text-[36px]">
              DueSpace
            </h3>

            <p className="mt-1 text-left text-[11px] leading-[1.8] text-gray-700 sm:text-[14px] sm:leading-[2] lg:text-[18px] lg:leading-[2.5]">
              <span className="block lg:hidden">
                Designed and developed the digital ecosystem that connects startups with emerging professionals through structured product sprints.
              </span>

              <span className="hidden lg:block">
                Designed and developed the digital
              </span>
              <span className="hidden lg:block">
                ecosystem that connects startups with
              </span>
              <span className="hidden lg:block">
                emerging professionals through structured
              </span>
              <span className="hidden lg:block">
                product sprints.
              </span>
            </p>
          </div>

        </div>

        {/* Technology tags */}
        <div className="mt-5 flex flex-wrap gap-2 lg:mt-[84px] lg:flex-nowrap lg:items-center lg:justify-between lg:gap-4">
          <span className="rounded-[14px] bg-purple-200 px-3 py-2 text-[14px] text-purple-700 lg:px-3 lg:py-1 lg:text-[18px]">
            UI/UX
          </span>

          <span className="rounded-[14px] bg-purple-200 px-3 py-2 text-[14px] text-purple-700 lg:px-3 lg:py-1 lg:text-[18px]">
            Web Design
          </span>

          <span className="rounded-[14px] bg-purple-200 px-3 py-2 text-[14px] text-purple-700 lg:px-3 lg:py-1 lg:text-[18px]">
            Development
          </span>

          <span className="rounded-[14px] bg-purple-200 px-3 py-2 text-[14px] text-purple-700 lg:px-3 lg:py-1 lg:text-[18px]">
            Product Strategy
          </span>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-purple-200 lg:my-[44px]" />

        {/* Built by */}
        <p className="mb-3 text-[20px] font-medium text-purple-600 lg:mb-4 lg:text-[23px]">
          Built by
        </p>

        {/* Team members */}
        <div className="mb-5 flex w-full items-center lg:mb-[38px]">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative min-w-0 flex-1"
              style={{
                marginLeft: index === 0 ? "0" : "-10px",
              }}
            >
              <div className="aspect-square w-full overflow-hidden rounded-full border-2 border-white bg-gray-200">
                <img
                  src={member}
                  alt={`Team member ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Project statistics */}
        <div className="flex items-start justify-between gap-2 text-[16px] text-gray-700 lg:text-[18px]">

          {/* Team roles */}
          <div className="flex flex-col gap-3">
            <span>2 Designers</span>
            <span>5 Developers</span>
            <span>1 Product Manager</span>
          </div>

          {/* Sprint duration */}
          <div className="flex shrink-0 items-center gap-2 pt-1 text-purple-600">
            <FiCalendar className="text-[25px] lg:text-[30px]" />
            <span className="whitespace-nowrap text-[17px] lg:text-[18px]">
              7 weeks sprint
            </span>
          </div>

        </div>

        {/* Divider */}
        <div className="my-4 border-t border-purple-200 lg:my-[22px]" />

        {/* Case study */}
        <button
          type="button"
          className="flex items-center gap-2 text-[18px] text-purple-600 transition-colors hover:text-purple-800 lg:text-[19px]"
        >
          View Case Study
          <FiArrowRight className="text-[25px] lg:text-[30px]" />
        </button>

      </div>
    </section>
  );
};

export default RealProjects;