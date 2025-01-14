import { GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";
import SectionWrapper from "./SectionWrapper";
import SectionSubtitle from "./SectionSubtitle";

const Educations = () => {
  return (
    <SectionWrapper>
      <SectionTitle>
        <GraduationCap />
        Educational Qualifications
      </SectionTitle>
      <SectionSubtitle>
        Explore my academic background, highlighting the qualifications and
        knowledge that have shaped my expertise and passion for continuous
        learning.
      </SectionSubtitle>
    </SectionWrapper>
  );
};

export default Educations;
