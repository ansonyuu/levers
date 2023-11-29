import { useState, useEffect } from "react";
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

interface Lever {
  title: string;
  oneliner: string;
  image: string;
  authors: string[];
  stage: string;
  domain: string;
  type: string;
  link: string;
  content: string;
}

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

export default function Home({ levers }: { levers: Lever[] }) {
  const [filteredLevers, setFilteredLevers] = useState(levers);
  const [selectedLever, setSelectedLever] = useState(levers[0]);
  const [selectedStage, setSelectedStage] = useState(levers[0]);
  const [selectedDomain, setSelectedDomain] = useState(levers[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const size = useWindowSize();
  const md = markdown({ html: true });

  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const leverTitle = router.query.lever;
    if (leverTitle) {
      const decodedTitle = decodeURIComponent(leverTitle as string);
      const lever = levers.find((lever) => lever.title === decodedTitle);
      if (lever) {
        setSelectedLever(lever);
        if (size.width < 1000) setIsOpen(true);
      }
    } else {
      setSelectedLever(levers[0]);
    }
  }, [router.query.lever, levers, size.width]);
  
  const handleClick = (lever: Lever) => {
    setSelectedLever(lever);
    router.replace(
      { pathname: "/collection", query: { lever: encodeURIComponent(lever.title) } },
      undefined,
      { shallow: true }
    );
    if (size.width < 1000) setIsOpen(true);
  };

  const handleStageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    const selectedLever = levers.find((lever) => lever.stage === option);
    if (selectedLever) {
      setSelectedStage(selectedLever);
      filterResults(option, "stage");
      setIsOpen(false);
    }
  };

  const handleDomainChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    const selectedLever = levers.find((lever) => lever.domain === option);
    if (selectedLever) {
      setSelectedDomain(selectedLever);
      filterResults(option, "domain");
      setIsOpen(false);
    }
  };

  const filterResults = (option: string, property: keyof Lever) => {
    if (option === "Select" || !option) {
      setFilteredLevers(levers);
    } else {
      const filteredResults = levers.filter(
        (result) => result[property] && result[property].includes(option)
      );
      setFilteredLevers(filteredResults);
    }
  };

  return (
    <div className="">
  <SEO title={selectedLever ? selectedLever.title : "Home"} />
      <div className="flex flex-row border-b-[1px] border-black max-h-[96.5vh]">
        <div className="border-r-[1px] border-black">
          <div className="w-full flex justify-between border-b-[1px] border-b-black">
            <Link href="/">
              <img
                alt=""
                src="/icon-logo.png"
                className="p-3 ml-4 h-10 w-auto"
              />
            </Link>
            <div className="relative h-full m-2 p-1 px-3 border-black border">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                className="h-full outline-none text-sm"
              />
              <span className="absolute right-3 top-0 h-full w-5 flex justify-center items-center">
                <img src="/icon-search.png" alt="search icon" />
              </span>
            </div>
          </div>
          <div className="inline w-full h-30 md:h-full flex flex-col md:flex-row ">
            <div className="md:w-[15vw] md:border-r-[1px] border-b-[1px] md:border-b-[0px] border-black p-8 flex flex-row md:flex-col gap-x-4 ">
              <div className=" text-gray-500 text-sm">
                {/* <p className="text-base">Stage</p>
                <label className="sr-only">Underline select</label>
                <select
                  value={selectedStage.stage}
                  onChange={handleStageChange}
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 "
                >
                  <option selected>Select</option>
                  <option value="Correction">Correction</option>
                  <option value="Funding">Funding</option>
                  <option value="Catalytic">Catalytic</option>
                  <option value="Growth">Growth</option>
                  <option value="Procurement">Procurement</option>
                </select> */}

                <div className="w-full text-gray-500 text-sm">
                  <p className="text-base">Domain</p>
                  <label className="sr-only">Underline select</label>
                  <select
                    value={selectedDomain.stage}
                    onChange={handleDomainChange}
                    id="underline_select"
                    className="w-[40vw] md:w-[10vw] block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option selected>Select</option>
                    <option value="Industry">Industry</option>
                    <option value="Philanthropy">Philanthropy</option>
                    <option value="Policy">Policy</option>
                    <option value="Academia">Academia</option>
                  </select>
                </div>
              </div>

              <div className="pt-10 text-gray-500">
              <p className=" text-xs ">
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
            <div className="flex flex-col md:w-[50vw] h-[70vh] md:h-[90vh] overflow-y-scroll no-scrollbar z-20">
              {filteredLevers
                .filter((lever) => {
                  return (
                    lever.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    lever.content
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  );
                })
                .map((lever, i) => {
                  return (
                    <div
                      key={i}
                      className="grid items-start border-b-[0.5px] border-b-black py-4 px-5 md:px-8 flex flex-col hover:bg-gray-100 cursor-pointer"
                    >
                      <div
                        onClick={() => handleClick(lever)}
                        className="flex flex-col justify-between md:flex-row my-2"
                      >
                        <div className="flex flex-row justify-between md:justify-between content-start items-start w-full gap-2 ">
                          <div className="max-w-3/4 md:max-w-[70%] overflow-auto">
                            <h2 className="text-[30px] whitespace-normal">
                              {lever?.title}
                            </h2>
                            <p className=" text-[12px] whitespace-normal pt-2 md:pt-1">
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
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Lever Modal"
        >
          <div className="overflow-y-scroll">
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
  const levers: Lever[] = files.map((file) => {
    const titlePost = fs.readFileSync(`levers/${file}`, "utf-8");
    const { data: postData, content } = matter(titlePost);

    return {
      title: postData.title,
      oneliner: postData.oneliner,
      image: postData.image,
      authors: postData.authors,
      stage: postData.stage,
      domain: postData.domain,
      type: postData.type,
      link: postData.title ? `/?${postData.title.replace(/ /g, "%20")}` : "",
      content: content
    };
  });

  return { props: { levers } };
}
