import { useState, useEffect } from "react";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import SEO from "../components/SEO";
import Nav from "../components/Nav";
import Letter from "../components/Letter";
import { useRouter } from "next/router";
// import styles from "../styles/markdown.scss";
import markdown from "markdown-it";

export default function Home({ levers }: any) {
  const [selectedLever, setSelectedLever] = useState(levers[0]);
  const router = useRouter();
  const md = markdown({ html: true });

  useEffect(() => {
    router.push(
      {
        pathname: "/",
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
    <>
      <SEO title="Home" />
      <div className="border-b-4 flex h-[175vh] relative w-full relative p-20">
        <div className="w-full top-4 h-auto self-start sticky inline-block flex flex-row ">
          <h1 className="w-3/4 text-left text-black normal-case ">
            Levers for Progress
          </h1>
          <Nav />
        </div>
        <div className="absolute self-end m-auto bottom-0 left-0 right-0 inline-block  w-[80vw] h-[60vw]  z-10">
          <Image src="/index-hero.png" fill alt="decorational photo" />
        </div>
      </div>
      <Letter />

      <div className="flex flex-row border border-black h-[calc(100%-1rem)]">
        <div className="w-1/6">
          <p>Testing</p>
        </div>
        <div className="flex flex-col w-1/2">
          {levers.map((lever, i) => {
            return (
              <div
                key={i}
                className="border-[0.5px] border-white border-b-black px-5 md:px-10 flex flex-col"
              >
                <div
                  onClick={() => handleClick(lever)}
                  className="flex flex-row mt-10"
                >
                  <h2 className="text-[30px] w-1/2">{lever.title}</h2>
                  <div className="flex flex-col w-1/2 text-right">
                    <p className=" text-base ">{lever.oneliner}</p>
                    <div className="flex flex-row justify-end">
                      {lever.stage.map((i) => {
                        return <p className="text-base p-2 bg-blue-300">{i}</p>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-5/12">
          <h2 className="text-[30px] mt-2.5 ">{selectedLever?.title} </h2>
          <div
            // className={styles.markdown}
            dangerouslySetInnerHTML={{
              __html: md.render(
                selectedLever.content ? selectedLever.content : ""
              )
            }}
          />

          <p>You clicked {selectedLever?.content} times</p>
        </div>
      </div>
    </>
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
