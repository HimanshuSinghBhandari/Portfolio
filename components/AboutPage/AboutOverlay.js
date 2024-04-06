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
        <section>
            <div>
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