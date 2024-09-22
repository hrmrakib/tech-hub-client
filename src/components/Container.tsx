import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <section className={`${className} max-w-[1300px] mx-auto`}>
      {children}
    </section>
  );
};

export default Container;
