import React, { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import "../styles/globals.css";

function Footer() {
  const path = useRouter().route;

  return (
    <div className="w-full h-[5vh] max-h-[5vh] z-50 relative bg-white">
      <div className="px-10 flex flex-col md:flex-col text-xs md:items-left justify-between relative">
        <div className="m-2 ">
          © {new Date().getFullYear()} Levers for Progress 
          </div>
  
      </div>
    </div>
  );
}

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
        page_path: url,
      });
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);

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
