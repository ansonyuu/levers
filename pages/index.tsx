import Image from "next/image";
import SEO from "../components/SEO";
import Button from "../components/Button";
import Letter from "../components/Letter";
import Sidenote from "../components/Sidenote";
import Text from "../components/Text";

import { motion, useScroll, useTransform } from "framer-motion";

const navList = [
  { name: "Credits", link: "#credits" },
  { name: "Collection", link: "/collection" },
  {
    name: "Contribute",
    link: "https://8fmdz3e9wad.typeform.com/to/Z1mOCaPD"
  },
  { name: "Github", link: "https://github.com/ansonyuu/levers" }
];

export default function Home() {
  const { scrollY } = useScroll();
  const closer = useTransform(scrollY, [0, 800], [2000, 0]);
  const normal = useTransform(scrollY, [0, 800], [500, 0]);
  const far = useTransform(scrollY, [0, 800], [200, 0]);
  const rotate = useTransform(scrollY, [0, 800], [0, 360]);

  return (
    <div className="overflow-y-auto">
      <SEO title="Home" />

      <div className="flex flex-col relative w-full">
        <img
          className="w-[100vw] mt-[-80px] inline-block"
          src="/index-topbanner.svg"
          alt="decorational photo"
        />

        <div className="md:px-10 lg:px-20 w-full h-auto relative flex flex-col ">
          <div className="flex flex-row justify-end m-10 gap-x-4 md:mt-[-80px]">
            {navList.map((navItem) => {
              return (
                <a className="no-underline" href={navItem.link}>
                  <p className="text-right text-black ">{navItem.name}</p>
                </a>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center m-10 gap-x-4 md:mt-[-30px]">
            <h1 className="text-center text-black normal-case">
              Levers for <br />
              Progress
            </h1>
           
           <div className="flex  justify-center px-5 md:px-10 lg:px-20 w-full md:w-2/3 lg:w-[50vw] flex flex-col  pt-10 lg:pt-5"> <p className=''>
        <Sidenote id={1} right={false}>

  All views presented here are personal to Kelvin and Anson and do not
  represent the views of their employers.
</Sidenote>
<Sidenote id={2} right={true}>not siblings or married (lol)</Sidenote>
       <p className="text-center ">
          <em >
            A Living Database of Methods to Accelerate Science and Technology
          </em>
       

     <br/>

          <em>By Kelvin Yu and Anson Yu</em>
          </p>
         
        </p>
        </div>
            <Button className="mt-5" />
          </div>
        </div>
      </div>
      <Letter />
    </div>
  );
}
