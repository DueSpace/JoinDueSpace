import React from "react";
import ProjectIcon from "../assets/Projects.png";
import TeamIcon from "../assets/Team3.png";
import CalenderIcon from "../assets/Calender.png";
import BriefcaseIcon from "../assets/Briefcase.png";
import MentorshipIcon from "../assets/Mentorship.png";
import ConfidenceIcon from "../assets/Confidence.png";

export const WhatYouGain = () => {
  const benefits = [
    {
      icon: ProjectIcon,
      alt: "Project",
      title: "Real Client Projects",
      description: "Work on products that real people use.",
    },
    {
      icon: TeamIcon,
      alt: "Team",
      title: "Team Experience",
      description: "Collaborate with designer, developers and PMs.",
    },
    {
      icon: CalenderIcon,
      alt: "Calendar",
      title: "Sprint Delivery",
      description: "Work in structured 2-4 weeks sprint with clear goals.",
    },
    {
      icon: BriefcaseIcon,
      alt: "Briefcase",
      title: "Professional Portfolio",
      description: "Build case studies that get you hired",
    },
    {
      icon: MentorshipIcon,
      alt: "Mentorship",
      title: "Mentorship",
      description: "Learn from experienced professionals.",
    },
    {
      icon: ConfidenceIcon,
      alt: "Confidence",
      title: "Confidence",
      description: "Gain the confidence to work in any professional team",
    },
  ];

  return (
    <section className="w-full bg-[#fdf6ff] px-6 py-8 sm:px-8 lg:px-[38px] lg:py-9">

      {/* Section label */}
      <div className="mb-5 inline-flex rounded-[15px] border border-purple-500 px-5 py-3 lg:mb-9">
        <span className="font-mono text-[11px] tracking-[0.12em] text-purple-600 lg:text-[13px]">
          WHAT YOU'LL GAIN
        </span>
      </div>

      {/* Benefit cards */}
      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-6 lg:gap-2">

        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="
              flex min-h-[76px] items-center gap-4 rounded-lg bg-white px-4 py-3
              lg:min-h-[203px] lg:flex-col lg:items-start lg:gap-0 lg:px-[7px] lg:py-[9px]
            "
          >

            {/* Icon */}
            <div
              className="
                flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
                bg-[#fcf5ff]
                lg:h-10 lg:w-10
              "
            >
              <img
                src={benefit.icon}
                alt={benefit.alt}
                className="h-6 w-6 object-contain"
              />
            </div>

            {/* Text */}
            <div className="lg:mt-5">
              <h3 className="text-[14px] font-semibold leading-[1.35] text-black">
                {benefit.title}
              </h3>

              <p className="mt-1 text-[11px] leading-[1.5] text-[#222] lg:text-[13px] lg:leading-[1.65]">
                {benefit.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouGain;