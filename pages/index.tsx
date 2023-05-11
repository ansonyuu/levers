import { useState, useEffect, useRef } from "react";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import SEO from "../components/SEO";
import Nav from "../components/Nav";
import Letter from "../components/Letter";
import { useRouter } from "next/router";
import markdown from "markdown-it";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home({ levers }: any) {
  const [selectedLever, setSelectedLever] = useState(levers[0]);
  const router = useRouter();
  const md = markdown({ html: true });

  const { scrollY } = useScroll();
  const closer = useTransform(scrollY, [0, 800], [2000, 0]);
  const normal = useTransform(scrollY, [0, 800], [500, 0]);
  const far = useTransform(scrollY, [0, 800], [200, 0]);
  const rotate = useTransform(scrollY, [0, 800], [0, 360]);

  return (
    <div className="snap snap-mandatory snap-y">
      <SEO title="Home" />

      <div className="border-b-4 flex h-[175vh] relative w-full relative p-20 snap-end ">
        <div className="w-full top-4 h-auto self-start sticky inline-block flex flex-row ">
          <h1 className="w-3/4 text-left text-black normal-case">
            Levers for Progress
          </h1>
          <Nav />
        </div>
        <div className="absolute self-end m-auto bottom-0 left-0 right-0 inline-block  w-[80vw] h-[60vw]  z-10">
          <Image src="/index-hero.png" fill alt="decorational photo" />
        </div>
        <motion.div
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
        </motion.div>
      </div>
      <Letter />
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("levers");
  const levers: any = [];

  files.map((file) => {
    const titlePost = fs.readFileSync(`levers/${file}`, "utf-8");
    const { data: postData, content } = matter(titlePost);

    levers.push({
      title: postData.title,
      oneliner: postData.oneliner,
      authors: postData.authors,
      stage: postData.stage,
      link: `/?${postData.title.replace(/ /g, "%20")}`,
      content: content
    });
  });

  return {
    props: {
      levers
    }
  };
}
