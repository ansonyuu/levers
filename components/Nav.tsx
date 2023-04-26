import { ReactNode } from "react";
import Image from "next/image";

const navList = [
  { name: "About", link: "/#about" },
  { name: "Content", link: "/#content" },
  { name: "Credits", link: "/#credits" },
  { name: "Contribute", link: "/#contribute" }
];

export default function Nav() {
  return (
    <div className="relative w-1/4">
      <div className="flex flex-col m-4">
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
