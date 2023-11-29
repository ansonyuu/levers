import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import { useRouter } from "next/router";
import React, { useEffect } from 'react';


function Footer() {
  const path = useRouter().route;

  return (
    <div className="w-full">
      <div className="px-10 flex flex-col md:flex-col text-xs md:items-left justify-between my-2">
        {path == "/" && (
          <div className="md:text-left md:l-3/4 py-1">
            <p className="text-xs" id="credits">
              Levers of Progress was co-created by{" "}
              <a href="https://www.ansonyu.me/">Anson Yu</a> and{" "}
              <a href="https://www.kelv.me/">Kelvin Yu</a>. We would like to
              especially thank our early contributors, who solo-authored many
              entries, provided invaluable feedback, and shared many inspiring
              stories. They are:{" "}
              <a href="https://www.elidourado.com/">Eli Dourado</a>,{" "}
              <a href="https://www.elidourado.com/">Ben Reinhardt</a>,{" "}
              <a href="https://www.linkedin.com/in/charlesxjyang/">
                Charles Yang
              </a>
              ,{" "}
              <a href="https://www.linkedin.com/in/joelburke1/">Joel Burke, </a>
              <a href="https://www.linkedin.com/in/alice-q-wu/">Alice Wu, </a>
              <a href="https://corinwagen.github.io/public/main/index.html">
                Corin Wagen
              </a>
              , <a href="https://maxlangenkamp.me/">Max Langenkamp, </a>
              <a href="https://www.ajkourabi.com/">AJ Kourabi</a>, and a number
              of unnamed individuals, anonymized at their request.
            </p>
          </div>
        )}
        <div className="py-1">
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
