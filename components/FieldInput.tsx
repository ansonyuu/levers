import { useRef, useState } from "react";
import emailjs from "emailjs-com";

function FieldInput({
  placeholder,
  className,
  dark
}: {
  placeholder?: string;
  className?: string;
  dark?: boolean;
}) {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_API
      )
      .then(
        (result) => {
          setEmailSent(true);
        },
        (error) => {}
      );
    e.target.reset;
  };

  return (
    <>
      {emailSent ? (
        <p
          className={`py-2 text-white text-base ${
            dark ? "text-black" : "text-white"
          }
        `}
        >
          An email has sent to your inbox!
        </p>
      ) : (
        <form
          onSubmit={sendEmail}
          ref={form}
          className={`lg:ml-6 flex flex-row  w-full border-b ${
            dark ? "text-black border-b-black" : "text-white border-b-white"
          }`}
        >
          <input
            type="email"
            name="user_email"
            className={` w-full bg-transparent text-base uppercase focus:outline-none placeholder:mb-0 placeholder:opacity-50 content-end
            ${
              dark
                ? "text-black caret-black placeholder:black"
                : "text-white caret-white placeholder:white"
            }
            
            ${className || ""}`}
            placeholder={placeholder || "Your email address"}
          />
          <button
            type="submit"
            className="py-2 text-base font-semibold uppercase "
          >
            Subscribe
          </button>
        </form>
      )}
    </>
  );
}

export default FieldInput;
