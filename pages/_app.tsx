import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import { useRouter } from "next/router";

const Footer = () => (
  <div className="w-full">
    <div className="h-[4vh] px-10 flex flex-row text-xs items-center justify-between">
      <div className="">© {new Date().getFullYear()} Levers for Progress</div>
      <div className="text-right">
        Created by <a href="https://ansonyu.me/">Anson Yu</a> and{" "}
        <a href="https://kelv.me/">Kelvin Yu</a>.
      </div>
    </div>
  </div>
);

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 1
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
          },
          exitState: {
            opacity: 0,
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
          }
        }}
      >
        <Component {...pageProps} />
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}

export default MyApp;
