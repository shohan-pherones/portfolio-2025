import { Newspaper } from "lucide-react";
import SectionTitle from "./SectionTitle";
import SectionWrapper from "./SectionWrapper";
import SectionSubtitle from "./SectionSubtitle";

const Blogs = () => {
  return (
    <SectionWrapper>
      <SectionTitle>
        <Newspaper />
        Published Articles
      </SectionTitle>
      <SectionSubtitle>
        Browse through my published articles, where I share insights, research,
        and ideas on topics that inspire and drive my work.
      </SectionSubtitle>
    </SectionWrapper>
  );
};

export default Blogs;
