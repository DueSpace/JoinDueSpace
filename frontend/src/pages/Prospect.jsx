import React from "react";
import { ProspectHero } from "../components/ProspectHero";
import { ExperienceGap } from "../components/ExperienceGap";
import { WhatYouGain } from "../components/WhatYouGain";
import { SprintJourney } from "../components/SprintJourney";
import { WhoThisIsFor } from "../components/WhoThisIsFor";
import { RealProjects } from "../components/RealProjects";
import { OurNetwork } from "../components/OurNetwork";

export const Prospect = () => {
  return (
    <main className="w-full">

      <ProspectHero />
      <ExperienceGap />
      <WhatYouGain />
      <SprintJourney />
      <WhoThisIsFor />
      <RealProjects />
      <OurNetwork />

    </main>
  );
};

export default Prospect;