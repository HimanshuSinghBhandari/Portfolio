 import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
 import aboutProfile from "../../public/assets/profile/profile1.jpg";
 import {aboutData} from "../../data/index";
 import { useRouter } from "next/router";
 import { useState } from "react";
 import HeaderTitle from "../util/HeaderTitle";
 import Button from "../Button/button";
 import Overlay from "./AboutOverlay";
 import Image from "next/image";

 export default function About() {
    const [view , setView ] = useState(false);
    const { scrollYProgress} = useScroll();
    const router = useRouter();

   const backgroundColor = useTransform(
       scrollYProgress,
       [0.35, 0.43],
       ["rgb(125 211 252)" , "rgb(253 224 71)"]
   );

   //overlay
   const toggleView = () => {
      setView((prev) => !prev);
      router.push("#about");
   };
   return(
      <motion.section
      id="about"
      className="h-[150vh] w-full relative flex flex-col items-center overflow-hidden"
      style={{ scrollYProgress, backgroundColor}}>
         <HeaderTitle />
         <AnimatePresence>
            <motion.div
            className="h-screen flex flex-col items-center justify-center lg:justify-evenly lg:flex-row"
            key="aboutContainer"
            initial={{opacity: 0 , y: 50}}
            whileInView={{
               opacity:1,
               y:0,
               transition: {delay: 0.5, duration: 1},
            }}>
               <motion.div
               className={`h-[10rem] w-[10rem] sm:h-[50rem] sm:w-[50rem] lg:h-[27rem] lg:w-[27rem] md:h-[30rem] md:w-[30rem]`}
               whileHover={{ y: -10}}>
                  <Image
                  src={aboutProfile}
                  alt="profile"
                  loading="lazy"
                  style={{width: "100%", height: "100%", objectFit: "cover"}}
                  className="rounded-full shadow-lg" />
               </motion.div>
               <motion.div className="relative w-[80%] lg:w-1/2">
                  <ul className="relative cursor-default">
                     {aboutData.map((data, index) => (
                        <motion.li
                        key={index}
                        whileHover={{
                           scale: 1.1,
                           transition: { duration: 0.5},
                        }}>
                        <p className="block font-samlip text-xs sm:text-lg lg:text-3xl mt-5 sm:mt-10 mb-1 text-black">{data.title}</p>
                        <p className="font-thin text-xs sm:text-md sm:font-thin lg:text-xl">{data.contetnt}</p>
                        </motion.li>
                     ))}
                  </ul>
                  <Button className="absolute bottom-0 left-1/2 transform sm:font-thin -translate-x-1/2 mb-5" onClick={toggleView}> Discover more </Button>
               </motion.div>
            </motion.div>
             {view ? <Overlay toggleView={toggleView}/> : null}
         </AnimatePresence>
      </motion.section>
   )
 }