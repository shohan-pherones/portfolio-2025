import { User } from "lucide-react";
import SectionTitle from "./SectionTitle";
import SectionWrapper from "./SectionWrapper";
import SectionSubtitle from "./SectionSubtitle";

const About = () => {
  return (
    <SectionWrapper>
      <SectionTitle>
        <User />
        About Me
      </SectionTitle>
      <SectionSubtitle>
        Discover my journey, the milestones I&apos;ve achieved, my goals,
        visions, and the passion that drives my work and creativity.
      </SectionSubtitle>
    </SectionWrapper>
  );
};

export default About;
