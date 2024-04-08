import { projectData } from "../../data";
import {motion} from "framer-motion";
import Image from "next/image";
import { BiMessageError } from "@react-icons/all-files/bi/BiMessageError";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { Tooltip } from "@mui/material";

export default function ProjectCardContent()
{
     return(
        <>
        {projectData.map((data , index) => (
            <div
            key={index}
            className="relative justify-center h-[85vh] w-[90vw] px-6 sm:px-10 lg:px-20 pt-16 pb-10 sm:pt-28 lg:pt-36 mr-[10vw] gap-2 rounded-[10px] flex flex-col lg:flex-row items-center shadow-xl bg-white/40 lg:gap-16 lg:justify-around">
                <span className="absolute top-5 text-white font-bold italic drop-shadow-md text-6xl sm:text-7xl left-[-20px] lg:left-[-40px] lg:text-9xl">
                  {data.num}
                </span>
                <div className="absolute top-8 sm:top-12 ">
                    <h3 className="font-samlip text-center text-xl sm:text-3xl lg:text-5xl text-yellow-950">
                        {data.title}
                    </h3>
                </div>
                <div className="flex items-start justify-start lg:w-3/5 mt-5">
                    <motion.a
                    href={data.url}
                    title={`${data.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shadow-2xl w-full block rounded-[10px] overflow-hidden"
                    whileHover={{ scale: 1.05, y: -20}}>
                       <Image
                       src={data.img}
                       alt={data.title}
                       width={400}
                       height={400}
                       style={{ width: "100%", height: "auto"}}
                       priority={true}>
                      </Image>
                    </motion.a>
                </div>
                <div>
                    
                </div>
            </div>
        ))}
        </>
     )
}
