import { ReactNode } from "react";
import Image from "next/image";

const navList = [
  { name: "About", link: "/#about" },
  { name: "Collection", link: "/collection" },
  { name: "Credits", link: "/credits" },
  { name: "Contribute", link: "/#contribute" }
];

export default function Nav({ className }) {
  return (
    <div className={`w-1/4 ${className}`}>
      <div className="flex flex-row m-4 gap-x-4 ">
        {navList.map((navItem) => {
          return (
            <a className="no-underline" href={navItem.link}>
              <p className="text-right text-black ">{navItem.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
