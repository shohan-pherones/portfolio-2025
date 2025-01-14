import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="container mx-auto px-5 md:px-10 py-10 md:py-20 flex flex-col gap-10 md:gap-20">
      {children}
    </div>
  );
};

export default Container;
