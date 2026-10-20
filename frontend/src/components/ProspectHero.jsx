import React from "react";

import Image1 from "../assets/community/Desire.png";
import Image2 from "../assets/community/David.png";
import Image3 from "../assets/community/Chizaram.png";
import Image4 from "../assets/community/Miriam.png";

import {
  FaArrowRight,
  FaCheck,
  FaPlus,
  FaGithub,
} from "react-icons/fa";

import {
  FaSlack,
  FaDiscord,
  FaFigma,
} from "react-icons/fa6";

const PLACEHOLDER_SPRINT = {
  name: "Sprint 10 - Fintrack Platform",
  progress: 66,
  tasks: [
    {
      id: 1,
      title: "Design System",
      status: "Completed",
    },
    {
      id: 2,
      title: "API Integration",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Dashboard UI",
      status: "In Review",
    },
  ],
  teamMembers: [Image1, Image2, Image3, Image4],
};

const getStatusClasses = (status) => {
  switch (status) {
    case "Completed":
      return "border-green-400 text-green-600";

    case "In Progress":
      return "border-blue-400 text-blue-600";

    case "In Review":
      return "border-orange-400 text-orange-500";

    default:
      return "border-gray-300 text-gray-500";
  }
};

export const ProspectHero = () => {
  const sprint = PLACEHOLDER_SPRINT;

  return (
    <section className="w-full overflow-hidden bg-[#fcf5ff] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-10">

      <div className="mx-auto w-full max-w-[1720px]">

        {/* Hero content and dashboard */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4">

          {/* LEFT: HERO CONTENT */}
          <div className="min-w-0">

            {/* Section label */}
            <div className="mb-7 inline-flex rounded-2xl border border-[#7d3bd1] px-4 py-3 sm:px-5">
              <span className="font-mono text-[10px] tracking-[0.12em] text-[#7d3bd1] sm:text-xs">
                REAL PRODUCT EXPERIENCE
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[650px] text-[32px] font-bold leading-[1.12] tracking-tight text-black sm:text-[40px] lg:text-[44px] xl:text-[48px]">
              You've Taken The
              <br />
              Courses.
              <br />
              <span className="font-semibold text-[#7d3bd1]">
                Now Build Something Real.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[570px] text-[13px] leading-[2] text-gray-600 sm:text-[15px] sm:leading-[2.1] lg:text-[14px] lg:leading-[2.5]">
              DueSpace puts you on real projects, with a real team, shipping
              real products. This is how you build the portfolio that actually
              advances your career and the experience that makes you sought
              after.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">

              <button
                type="button"
                className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#7d3bd1] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#6c2fc0]"
              >
                Join the Network
                <FaArrowRight className="text-sm" />
              </button>

              <button
                type="button"
                className="min-h-[52px] rounded-xl border border-[#7d3bd1] px-7 py-3 text-base font-medium text-[#7d3bd1] transition hover:bg-[#7d3bd1] hover:text-white"
              >
                How It Works
              </button>

            </div>
          </div>

          {/* RIGHT: DASHBOARD AND DECORATIONS */}
          <div className="relative w-full max-w-[480px] justify-self-start lg:max-w-none">

            {/* Decorative purple background */}
            <div className="absolute -right-3 top-3 h-[88%] w-[25%] rounded-[48%] bg-purple-200/70 sm:-right-4" />

            {/* Decorative dotted path */}
            <div className="absolute -left-3 top-5 hidden h-[88%] w-[96%] rounded-[28px] border border-dashed border-purple-400 sm:block" />

            {/* Floating integration icons */}
            <div className="absolute -right-1 top-0 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm sm:-right-3">
              <FaFigma className="text-lg text-[#7d3bd1]" />
            </div>

            <div className="absolute -right-1 top-[39%] z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm sm:-right-3">
              <FaSlack className="text-lg text-[#7d3bd1]" />
            </div>

            <div className="absolute -right-1 top-[70%] z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm sm:-right-3">
              <FaDiscord className="text-lg text-indigo-500" />
            </div>

            <div className="absolute -left-4 top-[42%] z-20 hidden h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm sm:flex">
              <FaGithub className="text-lg text-black" />
            </div>

            {/* Dashboard card */}
            <div className="relative z-10 rounded-2xl bg-white p-4 shadow-sm sm:p-5">

              {/* Dashboard header */}
              <div>
                <h2 className="text-base font-semibold text-black sm:text-lg">
                  Sprint Dashboard
                </h2>

                <p className="mt-2 text-xs text-gray-700 sm:text-sm">
                  {sprint.name}
                </p>
              </div>

              {/* Progress */}
              <div className="mt-6">

                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 sm:text-xs">
                    Progress
                  </span>

                  <span className="text-[10px] font-semibold text-[#7d3bd1] sm:text-xs">
                    {sprint.progress}%
                  </span>
                </div>

                <div
                  className="h-2 w-full overflow-hidden rounded-full bg-gray-200"
                  role="progressbar"
                  aria-label="Sprint progress"
                  aria-valuenow={sprint.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="h-full rounded-full bg-[#7d3bd1]"
                    style={{ width: `${sprint.progress}%` }}
                  />
                </div>
              </div>

              {/* Tasks */}
              <div className="mt-6">

                <h3 className="mb-3 text-xs font-semibold text-black">
                  Task
                </h3>

                <div className="space-y-2">

                  {sprint.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex min-w-0 items-center justify-between gap-2 border-b border-gray-100 py-2 last:border-b-0"
                    >

                      <div className="flex min-w-0 items-center gap-2">

                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-gray-400">
                          <FaCheck className="text-[8px] text-gray-600" />
                        </div>

                        <span className="truncate text-[10px] text-gray-700 sm:text-xs">
                          {task.title}
                        </span>
                      </div>

                      <span
                        className={`shrink-0 rounded-full border px-2 py-1 text-[9px] ${getStatusClasses(
                          task.status
                        )}`}
                      >
                        {task.status}
                      </span>

                    </div>
                  ))}

                </div>
              </div>

              {/* Team */}
              <div className="mt-6">

                <h3 className="mb-3 text-xs font-semibold text-black">
                  Team
                </h3>

                <div className="flex items-center">

                  {sprint.teamMembers.map((member, index) => (
                    <img
                      key={index}
                      src={member}
                      alt={`Team member ${index + 1}`}
                      className="-ml-2 h-9 w-9 rounded-full border-2 border-white object-cover first:ml-0 sm:h-10 sm:w-10"
                    />
                  ))}

                  <button
                    type="button"
                    aria-label="Add team member"
                    className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7d3bd1] text-white sm:h-10 sm:w-10"
                  >
                    <FaPlus className="text-xs" />
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProspectHero;