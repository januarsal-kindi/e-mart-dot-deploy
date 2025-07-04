import { classNames } from "@/lib/utils";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

function Container({ children, className, id }: ContainerProps) {
  return (
    <div
      id={id}
      className={classNames(
        "px-4 sm:px-6 lg:px-8 py-12",
        className
      )}
    >
      <div className="container max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
export default Container;
