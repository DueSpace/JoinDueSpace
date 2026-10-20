import React from "react";
import PerfectForYouDesktop from "../assets/PerfectForYouDesktop.png";
import PerfectForYouMobile from "../assets/PerfectForYouMobile.png";
import NotForYouImage from "../assets/NotForYou.png";
import { FiCheck, FiX } from "react-icons/fi";

export const WhoThisIsFor = () => {
  const perfectFor = [
    "Brand & Graphic Designers",
    "UI/UX Designers",
    "Developers",
    "Motion Designers",
    "Product Managers",
  ];

  const notFor = [
    "Looking for free certificate",
    "Want passive learning",
    "Don't like team work",
    "Not willing to commit",
    "Only want tutorials",
  ];

  return (
    <section className="w-full bg-[#fff7ff] px-4 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Section label */}
        <div className="mb-4 inline-flex rounded-[18px] border border-purple-500 px-3 py-2.5 sm:px-4">
          <span className="font-mono text-xs uppercase tracking-wide text-purple-600 sm:text-sm">
            Is This For You?
          </span>
        </div>

        {/* Section heading */}
        <h2 className="mb-7 text-[22px] font-semibold leading-tight text-black sm:text-2xl lg:mb-12 lg:text-[26px]">
          Who This Is For
        </h2>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-[797fr_459fr] lg:gap-6">
          {/* PERFECT FOR YOU */}
          <div className="relative isolate h-[231px] overflow-hidden rounded-[5px] bg-white lg:h-[695px]">
            {/* Heading and checklist */}
            <div className="absolute left-[11px] top-[13px] z-10 sm:left-4 lg:left-[33px] lg:top-[42px]">
              <h3 className="mb-[10px] text-[17px] font-semibold leading-6 text-black sm:text-lg lg:text-[23px] lg:leading-[37px]">
                Perfect For You
              </h3>

              <div className="flex flex-col gap-0 lg:gap-[50px]">
                {perfectFor.map((item) => (
                  <div
                    key={item}
                    className="flex h-6 items-center gap-2 lg:h-[50px] lg:gap-3"
                  >
                    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#9be6a1] sm:h-5 sm:w-5 lg:h-6 lg:w-6">
                      <FiCheck
                        size={14}
                        strokeWidth={2.5}
                        className="text-white lg:hidden"
                      />
                      <FiCheck
                        size={17}
                        strokeWidth={2.5}
                        className="hidden text-white lg:block"
                      />
                    </span>

                    <span className="text-[clamp(11px,3.2vw,14px)] leading-5 text-[#303030] lg:whitespace-nowrap lg:text-[14px] lg:font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop illustration */}
            <img
              src={PerfectForYouDesktop}
              alt="A team of designers, developers, and product builders"
              className="pointer-events-none absolute bottom-[12px] right-0 z-0 hidden h-auto w-[min(447px,56.08%)] object-contain object-right-bottom lg:block"
            />

            {/* Mobile illustration */}
            <img
              src={PerfectForYouMobile}
              alt="A team collaborating on a project"
              className="pointer-events-none absolute bottom-[4px] right-[8px] z-0 block h-auto w-[min(58%,260px)] object-contain object-right-bottom lg:hidden"
            />
          </div>

          {/* NOT FOR YOU */}
          <div className="relative isolate h-[231px] overflow-hidden rounded-[5px] bg-[#ffe2da] lg:h-[695px]">
            {/* Heading and checklist */}
            <div className="absolute left-[11px] top-[14px] z-10 sm:left-4 lg:left-[32px] lg:top-[49px]">
              <h3 className="mb-[10px] text-[17px] font-semibold leading-6 text-black sm:text-lg lg:text-[20px] lg:leading-6">
                Not For You
              </h3>

              <div className="flex flex-col gap-0 lg:gap-[50px]">
                {notFor.map((item) => (
                  <div
                    key={item}
                    className="flex h-6 items-center gap-2 lg:h-[50px] lg:gap-3"
                  >
                    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#ff984f] sm:h-5 sm:w-5 lg:h-6 lg:w-6">
                      <FiX
                        size={14}
                        strokeWidth={2.5}
                        className="text-white lg:hidden"
                      />
                      <FiX
                        size={17}
                        strokeWidth={2.5}
                        className="hidden text-white lg:block"
                      />
                    </span>

                    <span className="text-[clamp(11px,3.2vw,14px)] leading-5 text-[#303030] lg:whitespace-nowrap lg:text-[14px] lg:font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile-only illustration */}
            <img
              src={NotForYouImage}
              alt=""
              className="pointer-events-none absolute bottom-[11px] right-[16px] z-0 block h-auto w-[min(48%,210px)] object-contain object-right-bottom lg:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;