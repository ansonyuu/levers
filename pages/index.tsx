import Image from "next/image";
import SEO from "../components/SEO";
import Nav from "../components/Nav";
import Letter from "../components/Letter";

import { motion, useScroll, useTransform } from "framer-motion";

const navList = [
  { name: "About", link: "/#about" },
  { name: "Collection", link: "/collection" },
  { name: "Credits", link: "/credits" },
  { name: "Contribute", link: "/#contribute" }
];

function Button() {
  return (
    <a href="/collection">
      <button
        className="relative rounded btn4 mt-20 px-10 pt-3 pb-5 overflow-hidden bg-black"
        type="button"
      >
        <div className="flex flex-row gap-x-1 text-white">
          <span className="absolute inset-x-0 h-full bottom-0 bg-[#B8ADCB]"></span>
          <h3 className="z-10">Collection</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="24"
            height="24"
            className="z-10 top-0 right-0"
          >
            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
          </svg>
        </div>
      </button>
    </a>
  );
}

export default function Home() {
  const { scrollY } = useScroll();
  const closer = useTransform(scrollY, [0, 800], [2000, 0]);
  const normal = useTransform(scrollY, [0, 800], [500, 0]);
  const far = useTransform(scrollY, [0, 800], [200, 0]);
  const rotate = useTransform(scrollY, [0, 800], [0, 360]);

  return (
    <div className="">
      <SEO title="Home" />

      <div className="flex flex-col relative w-full ">
        {/* <motion.div
          className="absolute z-10"
          style={{ y: far, x: 200, rotate: rotate }}
        >
          <Image alt="" src="/index-decor.png" width={100} height={100} />
        </motion.div>
        <motion.div
          className="absolute z-10"
          style={{ y: normal, x: 500, rotate: rotate }}
        >
          <Image alt="" src="/index-decor.png" width={200} height={200} />
        </motion.div>
        <motion.div className="z-10" style={{ y: closer, x: 800 }}>
          <Image alt="" src="/index-decor.png" width={600} height={600} />
        </motion.div> */}

        <img
          className="w-[100vw] mt-[-30px] inline-block"
          src="/index-topbanner.png"
          alt="decorational photo"
        />

        <div className="md:px-10 lg:px-20 w-full h-auto relative flex flex-col ">
          <div className="flex flex-row justify-end m-10 gap-x-4">
            {navList.map((navItem) => {
              return (
                <a className="no-underline" href={navItem.link}>
                  <p className="text-right text-black ">{navItem.name}</p>
                </a>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center m-10 gap-x-4">
            <h1 className="text-center text-black normal-case">
              Levers for <br />
              Progress
            </h1>
            <Button />
          </div>
        </div>
      </div>
      <Letter />
    </div>
  );
}
