import { useState, useEffect, useRef } from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import styles from "../styles/markdown.module.scss";
import markdown from "markdown-it";
import Modal from "react-modal";
import { useWindowSize } from "@uidotdev/usehooks";
import Tags from "../components/Tags";

const customStyles = {
  content: {
    maxWidth: "80vw",
    maxHeight: "80vh",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "solid black 0.5px"
  }
};

Modal.setAppElement("#modals");

export default function Home({ levers }: any) {
  const [filteredLevers, setFilteredLevers] = useState(levers);
  const [selectedLever, setSelectedLever] = useState(levers[0]);
  const [selectedStage, setSelectedStage] = useState(levers[0]);
  const [selectedDomain, setSelectedDomain] = useState(levers[0]);
  const router = useRouter();
  const size = useWindowSize();
  const md = markdown({ html: true });

  const [modalIsOpen, setIsOpen] = useState(false);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

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
    if (size.width < 768) {
      setIsOpen(true);
    }
  };

  const handleStageChange = (event) => {
    const option = event.target.value;
    setSelectedStage(option);
    filterResults(option, "stage");
    setIsOpen(false);
  };

  const handleDomainChange = (event) => {
    const option = event.target.value;
    setSelectedDomain(option);
    filterResults(option, "domain");
    setIsOpen(false);
  };

  const filterResults = (option, property) => {
    if (option == "Select") {
      setFilteredLevers(levers);
    } else if (!option) {
      setFilteredLevers(levers);
    } else {
      const filteredResults = levers.filter((result) => {
        return result[property] && result[property].includes(option);
      });
      setFilteredLevers(filteredResults);
    }
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
                className="p-3 ml-4 h-10 w-auto"
              />
            </Link>
          </div>
          <div className="w-full h-full flex flex-col md:flex-row ">
            <div className="w-full md:w-[15vw] md:h-full overflow-hidden md:border-r-[1px] border-b-[1px]  md:border-b-[0px] border-black p-8 flex flex-row md:flex-col  gap-x-4 md:grid md:content-between">
              <div className="w-full text-gray-500 text-sm">
                <p className="text-base">Stage</p>
                <label className="sr-only">Underline select</label>
                <select
                  value={selectedStage}
                  onChange={handleStageChange}
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option selected>Select</option>
                  <option value="Correction">Correction</option>
                  <option value="Funding">Funding</option>
                  <option value="Catalytic">Catalytic</option>
                  <option value="Growth">Growth</option>
                  <option value="Procurement">Procurement</option>
                </select>

                <div className="w-full text-gray-500 text-sm">
                  <p className="text-base">Domain</p>
                  <label className="sr-only">Underline select</label>
                  <select
                    value={selectedDomain}
                    onChange={handleDomainChange}
                    id="underline_select"
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option selected>Select</option>
                    <option value="Industry">Industry</option>
                    <option value="Philanthropy">Philanthropy</option>
                    <option value="Policy">Policy</option>
                    <option value="Academia">Academia</option>
                  </select>
                </div>
              </div>

              <div className="">
                <p className="text-gray-500 text-sm hidden">
                  Anyone can submit suggestions for new levers* or edits to
                  existing ones through our public{" "}
                  <a
                    href="https://8fmdz3e9wad.typeform.com/to/Z1mOCaPD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    form
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://github.com/ansonyuu/levers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  .
                </p>

                <p className="text-gray-500 md:mt-6 text-xs">
                  *The inclusion of a lever does not necessarily constitute an
                  endorsement of it or reflect the work of our contributors.
                  None of the content on this site is meant to be an
                  authoritative source on these topics, rather, they serve as an
                  introduction to each concept.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:w-[50vw] overflow-y-scroll ">
              {filteredLevers.map((lever, i) => {
                return (
                  <div
                    key={i}
                    className="grid items-start border-b-[0.5px]  border-b-black py-4 px-5 md:px-8 flex flex-col hover:bg-gray-100 cursor-pointer"
                  >
                    <div
                      onClick={() => handleClick(lever)}
                      className="flex flex-col justify-between md:flex-row mb-2"
                    >
                      <div className="flex flex-row justify-between md:justify-between content-start items-start w-full gap-2 ">
                        <div className="max-w-3/4 md:max-w-[70%] overflow-auto">
                          <h2 className="text-[30px] whitespace-normal">
                            {lever?.title}
                          </h2>
                          <p className=" text-[12px] whitespace-normal pt-2 md:pt-0">
                            {lever.oneliner}
                          </p>
                        </div>
                        <div className="w-1/4 flex flex-row space-x-2 justify-end">
                          <Tags lever={lever} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-5/12 hidden md:inline-block overflow-y-scroll">
          <img alt="" src={`/${selectedLever?.image}`} className="" />
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
      <div id="modals" className="md:hidden">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Lever Modal"
        >
          <div className="overflow-y-scroll ">
            <img alt="" src={`/${selectedLever?.image}`} className="" />
            <div className="p-8">
              <h2 className="mt-3 my-3">{selectedLever?.title} </h2>

              <div className="flex flex-row gap-2">
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
        </Modal>
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
      image: postData.image,
      authors: postData.authors,
      stage: postData.stage,
      domain: postData.domain,
      type: postData.type,
      link: postData.title ? `/?${postData.title.replace(/ /g, "%20")}` : "",
      content: content
    });
  });

  return {
    props: {
      levers
    }
  };
}
