import { ReactNode } from "react";
import Image from "next/image";

export function HomeHero({ children }: { children: ReactNode }) {
  return (
    <div className="bg-local h-auto w-full relative">
      <div className="relative z-10 text-white w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
