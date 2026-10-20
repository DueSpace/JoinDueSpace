import React from "react";
import ApplyIcon from "../assets/Rocket.png";
import InterviewIcon from "../assets/Potrait.png";
import TeamIcon from "../assets/Team2.png";
import KickoffIcon from "../assets/Flag.png";
import CollaborationIcon from "../assets/Calender.png";
import ReviewIcon from "../assets/Note.png";
import DemoIcon from "../assets/Demo.png";
import PortfolioIcon from "../assets/Briefcase.png";
import RepeatIcon from "../assets/Repeat.png";

const sprintSteps = [
  {
    number: 1,
    icon: ApplyIcon,
    title: "Apply",
    description: "Submit your application.",
  },
  {
    number: 2,
    icon: InterviewIcon,
    title: "Interview",
    description: "We get to know you better.",
  },
  {
    number: 3,
    icon: TeamIcon,
    title: "Sprint Team",
    description: "You’re matched with a team.",
  },
  {
    number: 4,
    icon: KickoffIcon,
    title: "Kickoff",
    description: "We plan and align on goals.",
  },
  {
    number: 5,
    icon: CollaborationIcon,
    title: "Daily Collaboration",
    description: "Build, iterate & solve together.",
  },
  {
    number: 6,
    icon: ReviewIcon,
    title: "Review",
    description: "Get feedback and improve.",
  },
  {
    number: 7,
    icon: DemoIcon,
    title: "Demo day",
    description: "Present your work to the client.",
  },
  {
    number: 8,
    icon: PortfolioIcon,
    title: "Portfolio",
    description: "Add to your real project portfolio.",
  },
  {
    number: 9,
    icon: RepeatIcon,
    title: "Repeat",
    description: "Level up to the next sprint.",
  },
];

export const SprintJourney = () => {
  return (
    <section className="w-full bg-[#fff7ff] px-5 py-10 sm:px-8 lg:px-[38px] lg:py-9">

      {/* Section label */}
      <div className="mb-4 inline-flex rounded-[15px] border border-purple-500 px-5 py-3 lg:mb-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-purple-600 lg:text-[13px]">
          Sprint Journey
        </span>
      </div>

      {/* Heading */}
      <h2 className="mb-7 text-[17px] font-semibold leading-tight text-black lg:mb-8 lg:text-[23px]">
        Inside a DueSpace Sprint
      </h2>

      {/* Journey */}
      <div className="relative">

        {/* Desktop horizontal dotted line */}
        <div className="absolute left-[5.5%] right-[5.5%] top-[10px] hidden border-t border-dashed border-purple-300 lg:block" />

        {/* Steps */}
        <div className="flex flex-col lg:grid lg:grid-cols-9 lg:gap-2">

          {sprintSteps.map((step, index) => {
            const isLast = index === sprintSteps.length - 1;

            return (
              <div
                key={step.number}
                className="relative flex min-h-[73px] items-start lg:min-h-0 lg:flex-col lg:items-center"
              >

                {/* Mobile connecting line */}
                {!isLast && (
                  <div className="absolute left-[9px] top-[25px] h-[58px] border-l border-dashed border-purple-300 lg:hidden" />
                )}

                {/* Number */}
                <div className="relative z-10 flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-purple-600 text-[10px] font-semibold text-white lg:h-[20px] lg:w-[20px]">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="ml-5 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-lg bg-white lg:ml-0 lg:mt-6 lg:h-[48px] lg:w-[48px]">
                  <img
                    src={step.icon}
                    alt=""
                    className="h-10 w-10 object-contain lg:h-8 lg:w-8"
                  />
                </div>

                {/* Text */}
                <div className="ml-3 pt-[1px] lg:ml-0 lg:mt-4 lg:w-full lg:text-center">
                  <h3 className="text-[14px] font-semibold leading-5 text-black">
                    {step.title}
                  </h3>

                  <p className="mt-[1px] text-[12px] leading-[17px] text-gray-600 lg:text-[11px] lg:leading-[1.5]">
                    {step.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default SprintJourney;