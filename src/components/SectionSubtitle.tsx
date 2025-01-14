import { PropsWithChildren } from "react";

const SectionSubtitle = ({ children }: PropsWithChildren) => {
  return (
    <p className="text-sm opacity-50 -mt-2.5 md:-mt-5 max-w-xl">{children}</p>
  );
};

export default SectionSubtitle;
