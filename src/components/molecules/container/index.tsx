import { classNames } from "@/lib/utils";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className }: ContainerProps) {
  return (
    <div
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
