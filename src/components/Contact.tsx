import { Send } from "lucide-react";
import SectionTitle from "./SectionTitle";
import SectionWrapper from "./SectionWrapper";
import SectionSubtitle from "./SectionSubtitle";

const Contact = () => {
  return (
    <SectionWrapper>
      <SectionTitle>
        <Send />
        Have a Project in Mind? Let&apos;s Talk!
      </SectionTitle>
      <SectionSubtitle>
        Let&apos;s connect and bring your ideas to life with innovative
        solutions and a collaborative approach.
      </SectionSubtitle>
    </SectionWrapper>
  );
};

export default Contact;
