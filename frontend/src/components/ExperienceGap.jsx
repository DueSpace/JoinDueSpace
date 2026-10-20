import React from "react";
import ExperienceFinished from "../assets/ExperienceFinished.png";
import ExperienceTutorial from "../assets/ExperienceTutorial.png";
import ExperienceJobs from "../assets/ExperienceJobs.png";
import ExperienceWorks from "../assets/ExperienceWorks.png";
import DueSpaceSymbol from "../assets/DueSpaceSymbol.png";

export const ExperienceGap = () => {
  const challenges = [
    {
      image: ExperienceFinished,
      text: (
        <>
          You finished
          <br />
          the course.
        </>
      ),
    },
    {
      image: ExperienceTutorial,
      text: (
        <>
          You built tutorial
          <br />
          projects.
        </>
      ),
    },
    {
      image: ExperienceJobs,
      text: (
        <>
          You apply for jobs.
        </>
      ),
    },
    {
      image: ExperienceWorks,
      text: (
        <>
          Every employer
          <br />
          asks for experience
        </>
      ),
    },
    {
      image: DueSpaceSymbol,
      text: (
        <>
          <strong>DueSpace</strong>
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#fdf6ff] px-5 py-8 sm:px-8 lg:px-[18px] lg:py-9">

      {/* Section label */}
      <div className="mb-4 inline-flex rounded-[15px] border border-purple-500 px-5 py-3">
        <span className="font-mono text-[13px] tracking-[0.08em] text-purple-600">
          THE CHALLENGE
        </span>
      </div>

      {/* Heading */}
      <h2 className="mb-7 text-[22px] font-semibold leading-tight text-black sm:text-[23px] lg:text-[23px]">
        The Experience Gap
      </h2>

      {/* Timeline */}
      <div className="relative">

        {/* Mobile vertical dashed line */}
        <div className="absolute left-[28px] top-[28px] bottom-[28px] border-l border-dashed border-purple-300 lg:hidden" />

        {/* Desktop horizontal dashed line */}
        <div className="absolute left-[7%] right-[7%] top-[34px] hidden border-t border-dashed border-purple-300 lg:block" />

        {/* Timeline items */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-5 lg:gap-0">

          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="relative flex items-center gap-4 lg:flex-col lg:items-center lg:gap-0"
            >

              {/* Icon */}
              <div className="relative z-10 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-white lg:h-[68px] lg:w-[68px]">
                <img
                  src={challenge.image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Text */}
              <p className="text-[14px] leading-5 text-gray-800 lg:mt-5 lg:text-center lg:text-[14px]">
                {challenge.text}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExperienceGap;