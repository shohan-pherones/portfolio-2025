import { PropsWithChildren } from "react";

const SectionTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="flex items-center gap-2.5 text-xl md:text-2xl">
      {children}
    </h2>
  );
};

export default SectionTitle;
