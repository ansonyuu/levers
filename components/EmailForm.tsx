import { ReactNode, useState } from "react";
import SEO from "./SEO";
import FieldInput from "./FieldInput";
import Image from "next/image";

import Grid from "./Grid";

const EmailForm = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <div className=" w-full relative">
      <div className="relative z-10 w-full h-full flex p-8 lg:pl-20">
        <div className="w-full grid grid-cols-12 relative py-8">
          <div className="col-span-12 lg:col-span-6">
            <h6 className="text-white font-semibold mb-6">
              The Right People with the Right Ideas.
            </h6>
            <p className="text-white text-md text-base mb-12">
              Subscribe to our newsletter to stay in the loop.
            </p>
            <div className="flex flex-col lg:flex-row lg:items-end">
              <h6 className="text-white  lg:w-1/2  uppercase mb-3 content-start">
                <a href="https://parpa.substack.com">
                  Subscribe to our newsletter
                </a>
              </h6>
              {/*
              {isSubmitted ? (
                <p>Thanks for signing up!</p>
              ) : (
                <FieldInput
                  placeholder="Your email address"
                  className="mb-1 col-start-3"
                  dark={false}
                />
              )}
              */}
            </div>
          </div>
        </div>
      </div>
      {/* <Image
        src={contactHelix}
        className="object-cover absolute top-0 left-0 w-full h-full object-cover select-none"
        alt="Purple helix graphic"
      /> */}
    </div>
  );
};

export default EmailForm;
