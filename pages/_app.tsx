import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState, useEffect } from "react";
import "../styles/globals.css";

const Footer = () => (
  <div className="w-full">
    <div className="py-4  px-10 flex flex-row text-xs justify-between">
      <div className="">© {new Date().getFullYear()} Levers for Progress</div>
      <div className="text-right">
        Created by <a href="https://ansonyu.me/">Anson Yu</a> and{" "}
        <a href="https://kelv.me/">Kelvin Yu</a>.
      </div>
    </div>
  </div>
);

// const NavbarLink = ({
//   children,
//   href,
//   className
// }: {
//   children: ReactNode;
//   href: string;
//   className?: string;
// }) => (
//   <Link legacyBehavior href={href}>
//     <a
//       className={`text-xl md:text-[13px] md:font-normal mx-3 my-4 md:my-0 font-semibold no-underline ${
//         className || ""
//       }`}
//     >
//       {children}
//     </a>
//   </Link>
// );

// const NavbarItem = ({
//   route,
//   link,
//   scrolled,
//   navOpen
// }: {
//   route: string;
//   link: {
//     text: string;
//     href: string;
//   };
//   scrolled: boolean;
//   navOpen?: boolean;
// }) => (
//   <NavbarLink
//     className={
//       (["/", "/model", "/about", "/team", "/programs", "/contact"].includes(
//         route
//       ) &&
//         !scrolled) ||
//       navOpen
//         ? "text-white uppercase animate-underline-white"
//         : "text-purple uppercase animate-underline-purple"
//     }
//     href={link.href}
//   >
//     {link.text}
//   </NavbarLink>
// );

// const Navbar = () => {
//   const router = useRouter();
//   const route = router.pathname;
//   const [scrolled, setScrolled] = useState(false);
//   const [navOpen, setNavOpen] = useState(false);

//   useEffect(() => setNavOpen(false), [route]);

//   const changeBackground = () => {
//     if (
//       (window.scrollY >= screen.height && route == "/") ||
//       (window.scrollY >= screen.height - 800 && route != "/")
//     ) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   function handleResize() {
//     if (window.innerWidth > 312) {
//       setNavOpen(false);
//     }
//   }

//   useEffect(() => {
//     changeBackground();
//     window.addEventListener("scroll", changeBackground);
//   });

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       <div
//         className={`w-full fixed top-0 left-0 z-20 flex items-center px-8 lg:px-20 py-6 hidden md:flex ${
//           (["/", "/model", "/about", "/team", "/programs", "/contact"].includes(
//             route
//           ) &&
//             !scrolled) ||
//           navOpen
//             ? ""
//             : "bg-white border-b border-b-[#685275]"
//         } `}
//       >
//         <Link href="/">
//           <img
//             src={
//               ([
//                 "/",
//                 "/model",
//                 "/about",
//                 "/team",
//                 "/programs",
//                 "/contact"
//               ].includes(route) &&
//                 !scrolled) ||
//               navOpen
//                 ? "/logo-white.svg"
//                 : "/logo.svg"
//             }
//             alt="Speculative Technologies logo"
//             className="h-11 z-30 relative"
//           />
//         </Link>

//         <div
//           className={`
//                 ml-auto flex h-full top-0
//                  md:items-center text-left
//              flex-row text-purple md:bg-transparent right-0 fixed md:relative shadow-xl md:shadow-none
//             `}
//         >
//           {[
//             { text: "Model", href: "/model" },
//             { text: "About", href: "/about" },
//             { text: "Team", href: "/team" },
//             { text: "Programs", href: "/programs" },
//             { text: "Library & Updates", href: "/library" },
//             { text: "Get Involved", href: "/get-involved" },
//             { text: "Contact", href: "/contact" }
//           ].map((link, i) => (
//             <NavbarItem route={route} link={link} scrolled={scrolled} />
//           ))}
//         </div>
//       </div>
//       <div
//         className={`w-full h-20 fixed top-0 left-0 z-20 flex items-center px-10 md:hidden flex ${
//           (["/", "/model", "/about", "/team", "/programs", "/contact"].includes(
//             route
//           ) &&
//             !scrolled) ||
//           navOpen
//             ? ""
//             : "bg-white border-b border-b-[#685275]"
//         } `}
//       >
//         <Link href="/">
//           <img
//             src={
//               ([
//                 "/",
//                 "/model",
//                 "/about",
//                 "/team",
//                 "/programs",
//                 "/contact"
//               ].includes(route) &&
//                 !scrolled) ||
//               navOpen
//                 ? "/logo-white.svg"
//                 : "/logo.svg"
//             }
//             alt="Speculative Technologies logo"
//             className="h-10 z-30 relative"
//           />
//         </Link>

//         <button
//           onClick={() => setNavOpen(true)}
//           className="text-2xl md:hidden ml-auto z-24"
//         >
//           <img
//             src={
//               ([
//                 "/",
//                 "/model",
//                 "/about",
//                 "/team",
//                 "/programs",
//                 "/contact"
//               ].includes(route) &&
//                 !scrolled) ||
//               navOpen
//                 ? "/icon-nav-closed.png"
//                 : "/icon-nav-closed-purple.png"
//             }
//           />
//         </button>
//         <button
//           onClick={() => {
//             setNavOpen(false);
//           }}
//           className={`text-2xl md:hidden ml-auto z-50 ${
//             navOpen ? "" : "hidden"
//           } `}
//         >
//           <img src="/icon-nav-open.png" />
//         </button>
//         <div
//           className={`
//                flex p-10 pt-40 h-[100vh] top-0 w-full text-left
//                 flex-col bg-purple overflow-hidden text-white right-0 fixed shadow-xl ${
//                   navOpen ? "" : "hidden"
//                 }
//             `}
//         >
//           {[
//             { text: "Model", href: "/model" },
//             { text: "About", href: "/about" },
//             { text: "Team", href: "/team" },
//             { text: "Programs", href: "/programs" },
//             { text: "Library & Updates", href: "/library" },
//             { text: "Get Involved", href: "/get-involved" },
//             { text: "Contact", href: "/contact" }
//           ].map((link, i) => (
//             <NavbarItem
//               navOpen={navOpen}
//               route={route}
//               link={link}
//               scrolled={scrolled}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

function MyApp({ Component, pageProps }) {
  return (
    <main>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
