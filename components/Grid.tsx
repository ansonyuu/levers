import { ReactNode } from "react";

export default function Grid({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full grid grid-cols-12 relative p-5 md:p-10 py-14 lg:py-24 lg:px-20  ${className} `}
    >
      {children}
    </div>
  );
}
