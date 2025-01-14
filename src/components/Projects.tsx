import { PanelsTopLeft } from "lucide-react";
import SectionTitle from "./SectionTitle";
import SectionWrapper from "./SectionWrapper";
import SectionSubtitle from "./SectionSubtitle";

const Projects = () => {
  return (
    <SectionWrapper>
      <SectionTitle>
        <PanelsTopLeft />
        Selected Projects (2022 - {new Date().getFullYear()})
      </SectionTitle>
      <SectionSubtitle>
        Explore a collection of my featured projects, showcasing innovative
        ideas, creative solutions, and the skills I bring to every challenge.
      </SectionSubtitle>
    </SectionWrapper>
  );
};

export default Projects;
