import { PropsWithChildren } from "react";

const SectionWrapper = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex flex-col gap-2.5 md:gap-5">{children}</section>
  );
};

export default SectionWrapper;
