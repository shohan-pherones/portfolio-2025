import { CodeXml } from "lucide-react";
import SectionTitle from "./SectionTitle";
import SectionWrapper from "./SectionWrapper";
import SectionSubtitle from "./SectionSubtitle";

const Skills = () => {
  return (
    <SectionWrapper>
      <SectionTitle>
        <CodeXml />
        Development Skills & Tools
      </SectionTitle>
      <SectionSubtitle>
        Explore the development skills I&apos;ve mastered and the tools I use to
        create innovative, efficient, and impactful solutions.
      </SectionSubtitle>
    </SectionWrapper>
  );
};

export default Skills;
