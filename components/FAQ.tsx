import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";
import { FAQContent } from "../data/faq";

export default function FAQ() {
  // Each item in array represents each accordian
  const [open, setOpen] = useState(20);

  const handleOpen = (value) => {
    setOpen(open === value ? 100 : value);
  };

  return (
    <div className="bg-[#202020] text-white p-5 md:p-10 lg:p-20 py-8 lg:py-16">
      <h4 className="text-green pb-10">FAQ</h4>
      <Fragment>
        {FAQContent.map((question, i) => {
          return (
            <Accordion
              open={open === i}
              className="border-[0.5px] border-[#202020] border-b-white"
            >
              <AccordionHeader onClick={() => handleOpen(i)}>
                <div className="w-full justify-between flex flex-row items-center">
                  <p className="text-green mr-4  py-3">{question.prefix}</p>
                  <p className="text-white w-full text-left text-base ">
                    {question.question}
                  </p>
                  <img
                    className="justify-items-end"
                    src={open === i ? "./icon-minus.svg" : "./icon-plus.svg"}
                    alt=""
                  />
                </div>
              </AccordionHeader>
              <AccordionBody>
                <div className="py-3">{question.answer}</div>
              </AccordionBody>
            </Accordion>
          );
        })}
      </Fragment>
    </div>
  );
}
