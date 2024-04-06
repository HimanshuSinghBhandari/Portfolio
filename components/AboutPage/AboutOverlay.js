 import {motion} from "framer-motion";
 import Image from "next/image";
 import BackImg1 from "../../public/assets/profile/profile2.jpg";
 import {overlayData} from "../../data/index"; 
 import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
 import { useRouter } from "next/router";

 export default function Overlay({ toggleView }){
    const router = useRouter();

    const WrapperClick = (e) => {
        e.stopPropagation();
    };

    const onClickNext = () => {
        toggleView();
        setTimeout(() => {
            router.push("/#project");
        }, 200);
    };

    return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1 , transition: { duration: 0.5}}}
    exit={{opacity: 0}}
    className="fixed top-0 w-full h-full bg-black/50 z-50"
    onClick={() => toggleView()}
    key="overlay">
     <motion.div
     initial={{opacity: 0, y:10 }}
     animate={{opacity: 1 , y:0, transition: { duration: 0.5}}}
     exit={{opacity: 0, y: 10}}
     className="absolute left-0 right-0 mx-auto my-0 top-[10vh] lg:top-[5vh] bottom-auto h-[80vh] lg:h-[90vh] w-[90vw] rounded-[15px] bg-white"
     onClick={WrapperClick} >
        <section className="flex flex-row p-5 gap-5 sm:p-8 lg:p-8 h-full">
            <div className="hidden lg:grid lg:grid-cols-2 gap-5 lg:w-1/2 text-gray-400 font-jalnan hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-green-300 hover:via-blue-500 hover:to-purple-600 hover:transition hover:duration-500">
                <motion.div>
                    <Image>

                    </Image>
                </motion.div>
             <div>
                <h2>
                    <br />
                </h2>
             </div>
             <div>
                <p>

                </p>
             </div>
             <motion.div>
                <Image>

                </Image>
             </motion.div>
            </div>
        </section>
        
     </motion.div>
    </motion.div>);
 }