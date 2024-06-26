import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/router";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import Typewriter from "typewriter-effect";
import Button from "../Button/button";

export default function Home() {
  const router = useRouter();
  const { scrollYProgress, scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 3]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgb(251, 236, 93)", "rgb(125 211 252)"]
  );
  const onClickNext = () => {
    router.push("#about");
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <motion.div
        className="h-[150vh] flex flex-col pt-[40vh] justify-start items-center "
        style={{ scrollYProgress, backgroundColor }}
      >
        <motion.h1
          initial={{ scale: 3 }}
          animate={{
            scale: 1,
            transition: {
              type: "spring",
              bounce: 5,
              damping: 10,
              duration: 1,
            },
          }}
          className="text-4xl mb-5 font-samlip sm:mt-15 sm:text-5xl lg:text-8xl  text-outline"
          style={{ scrollY, scale }}
        >
          Hello, I&apos;m Himanshu
        </motion.h1>
        <motion.div
          className="flex flex-col items-center mt-2 lg:mt-10"
          style={{ scrollY, opacity }}
        >
          <span className="text-xl text-center font-light tracking-wide sm:text-3xl lg:text-5xl ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString("Join My Journey")
                  .pauseFor(500)
                  .deleteAll(100)
                  .pauseFor(1500)
                  .typeString(
                    `Full Stack Developer<br><span style="font-weight:600;">N A M A S T E</span> `
                  )
                  .start();
              }}
              options={{
                delay: 100,
                deleteSpeed: 200,
                autoStart: true,
              }}
            />
          </span>
        </motion.div>
        <motion.div
          className="absolute flex gap-2 justify-center items-center bottom-[50vh] my-0 font-thin text-xl cursor-pointer w-screen h-12 hover:bg-white/30 lg:text-3xl lg:h-16"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 1,
              repeat: Infinity,
            },
          }}
          onClick={onClickNext}
        >
          <div className="flex">
            <FiChevronDown />
            <span className="text-sm lg:text-lg">A B O U T</span>
          </div>
        </motion.div>
        <motion.a
          href="https://drive.google.com/file/d/1AxwzlO-Wz_WviBYZOjetwFX0StlMB9_r/view?usp=sharing"
          className="bg-[rgb(251,236,93)] text-black px-5 py-2 rounded-full mt-5 sm:block lg:hidden hover:bg-yellow-300 transition-colors duration-300 font-medium text-sm border border-black"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{ opacity }}
          onClick={() => {
            // Add your resume button functionality here
          }}
        >
          Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
