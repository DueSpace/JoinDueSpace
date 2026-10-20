import React from "react";
import { FiArrowRight, FiUsers, FiMessageSquare } from "react-icons/fi";

export const OurNetwork = () => {
  return (
    <section className="w-full bg-[#fff7ff] px-5 py-8 sm:px-8 sm:py-10 lg:px-6 lg:py-9">

      {/* OUR NETWORK label */}
      <div className="mb-7 inline-flex rounded-xl border border-purple-500 px-4 py-3 lg:mb-10 lg:px-4 lg:py-3">
        <span className="font-mono text-[10px] uppercase tracking-wide text-purple-600 lg:text-[14px]">
          Our Network
        </span>
      </div>

      {/* Community introduction */}
      <div>
        <h2 className="text-[20px] font-semibold leading-[1.3] text-black lg:text-[26px] lg:leading-[1.3]">
          You’re Joining Builders.
          <br />
          <br/>
          Not Just Members.
        </h2>

        <p className="mt-7 max-w-[800px] text-[19px] leading-[2.2] text-black sm:text-[22px] lg:mt-8 lg:max-w-none lg:text-[38px] lg:leading-[2.85]">
          A growing community of builders with
          <br className="hidden lg:block" />
          6+ core tracks collaborating inside our
          <br className="hidden lg:block" />
          active sprint ecosystem.
        </p>

        {/* Community link */}
        <button
          type="button"
          className="mt-4 flex items-center gap-2 text-[12px] font-medium text-purple-600 transition-colors hover:text-purple-800 lg:mt-5 lg:text-[17px]"
        >
          View our Community Members
          <FiArrowRight className="text-base lg:text-2xl" />
        </button>
      </div>

      {/* Community feedback */}
      <div className="mt-16 lg:mt-28">

        {/* Feedback label */}
        <div className="mb-4 inline-flex rounded-xl border border-purple-500 px-4 py-3 lg:mb-5 lg:px-5 lg:py-4">
          <span className="font-mono text-[10px] uppercase tracking-wide text-purple-600 lg:text-[17px]">
            Community’s Feedback
          </span>
        </div>

        {/* Feedback cards */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-4">

          {/* DueSpace Studio */}
          <article className="border border-gray-200 bg-white p-3 sm:p-4 lg:min-h-[245px] lg:p-3">
            <div className="flex items-center gap-2">
              <FiMessageSquare className="shrink-0 text-xl text-fuchsia-400 lg:text-2xl" />

              <h3 className="font-mono text-[12px] italic text-gray-700 lg:text-[21px]">
                [ // Duespace studio]
              </h3>
            </div>

            <p className="mt-3 text-[13px] leading-[1.5] text-gray-600 lg:mt-3 lg:text-[19px] lg:leading-[1.4]">
              "In the Studio, there is zero friction. The product managers
              structure the backlog, the designers lock the design tokens,
              and the engineers deploy daily. It’s high-velocity execution
              where every single asset delivered serves a real business
              objective."
            </p>
          </article>

          {/* General channel */}
          <article className="border border-gray-200 bg-white p-3 sm:p-4 lg:min-h-[245px] lg:p-3">
            <div className="flex items-center gap-2">
              <FiUsers className="shrink-0 text-xl text-fuchsia-400 lg:text-2xl" />

              <h3 className="font-mono text-[12px] italic text-gray-700 lg:text-[21px]">
                [ // General channel]
              </h3>
            </div>

            <p className="mt-3 text-[13px] leading-[1.5] text-gray-600 lg:mt-3 lg:text-[19px] lg:leading-[1.4]">
              "The energy in this cohort is different. You aren’t just
              talking about building—you are literally shipping code on a
              timeline."
            </p>
          </article>

        </div>
      </div>

      {/* Join the network CTA */}
      <div className="mt-10 flex flex-col gap-5 bg-purple-600 px-4 py-5 text-white sm:px-6 sm:py-6 md:flex-row md:items-center md:justify-between lg:mt-28 lg:min-h-[142px] lg:px-4 lg:py-3">

        {/* CTA text */}
        <div className="max-w-[620px]">
          <h3 className="text-[20px] font-medium leading-[1.35] sm:text-[24px] lg:text-[30px]">
            We are Accepting a New Cohort
            <br className="hidden lg:block" />
            of Builders
          </h3>

          <p className="mt-3 max-w-[390px] text-[11px] leading-[1.5] text-white/90 sm:text-[12px] lg:mt-4 lg:text-[13px]">
            Spots are limited and projects are active. If you are ready to
            stop practicing and start shipping, this is your next move.
          </p>
        </div>

        {/* CTA button */}
        <button
          type="button"
          className="flex w-fit shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-[11px] font-medium text-black transition-colors hover:bg-purple-50 lg:px-4 lg:py-3 lg:text-[12px]"
        >
          Join the Network
          <FiArrowRight size={15} />
        </button>

      </div>

    </section>
  );
};

export default OurNetwork;