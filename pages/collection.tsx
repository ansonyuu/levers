import { useState, useEffect, useRef } from "react";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import styles from "../styles/markdown.module.scss";
import markdown from "markdown-it";

import Filter from "../components/Filter";
import Tags from "../components/Tags";

export default function Home({ levers }: any) {
  const [selectedLever, setSelectedLever] = useState(levers[0]);
  const [selectedStage, setSelectedStage] = useState(levers[0]);
  const router = useRouter();
  const md = markdown({ html: true });

  useEffect(() => {
    router.push(
      {
        pathname: "/collection",
        query: { lever: selectedLever?.title }
      },
      undefined,
      { shallow: true }
    );
  }, [selectedLever]);

  const handleClick = (lever) => {
    setSelectedLever(lever);
  };

  return (
    <div className="snap snap-mandatory snap-y">
      <SEO title="Home" />

      <div className="flex flex-row border-b-[1px] border-black max-h-[96vh]">
        <div className="overflow-y-scroll border-r-[1px] border-black">
          <div className="w-full flex justify-between border-b-[1px] border-b-black">
            <Link href="/">
              <img
                alt=""
                src="/icon-logo.png"
                className="p-3 ml-4  h-10 w-auto"
              />
            </Link>
            <div className="flex justify-end border border-black w-1/4 m-2 mr-8 p-1">
              <Image alt="" src="/icon-search.png" width={20} height={20} />
            </div>
          </div>
          <div className="w-full flex flex-row">
            <Filter />

            <div className="flex flex-col overflow-y-scroll ">
              {levers.map((lever, i) => {
                return (
                  <div
                    key={i}
                    className="border-b-[0.5px] border-b-black px-5 md:px-8 flex flex-col hover:bg-gray-100 cursor-pointer"
                  >
                    <div
                      onClick={() => handleClick(lever)}
                      className="flex flex-row mt-10 mb-2"
                    >
                      <h2 className="text-[30px] min-w-[50%]">{lever.title}</h2>

                      <p className=" text-[12px] min-w-[25%] max-w-[25%] ">
                        {lever.oneliner}
                      </p>

                      <div className="flex flex-row justify-end gap-2 min-w-[25%] max-w-[25%] ">
                        <Tags lever={lever} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-5/12  overflow-y-scroll">
          <img alt="" src="/cover-market.png" className="" />
          <div className="p-8">
            <h2 className="mt-3 my-3">{selectedLever?.title} </h2>

            <div className="flex flex-row mm-3 gap-2">
              <Tags lever={selectedLever} />
            </div>

            <div
              className={styles.markdown}
              dangerouslySetInnerHTML={{
                __html: md.render(
                  selectedLever.content ? selectedLever.content : ""
                )
              }}
            />
          </div>
        </div>
      </div>
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
