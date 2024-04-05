//  import {motion} from "framer-motion";
//  import Image from "next/image";
//  import BackImg1 from "../../public/assets/profile/profile6.jpeg";
//  import {overlayData} from "../../data/index"; 
//  import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
//  import { useRouter } from "next/router";

//  export default function Overlay({ toggleView }){
//     const router = useRouter();

//     const WrapperClick = (e) => {
//         e.stopPropagation();
//     };

//     const onClickNext = () => {
//         toggleView();
//         setTimeout(() => {
//             router.push("/#project");
//         }, 200);
//     };

//     return (
//     <motion.div
//     initial={{opacity:0}}
//     animate={{opacity:1 , transition: { duration: 0.5}}}
//     exit={{opacity: 0}}
//     className="fixed top-0 w-full h-full bg-black/50 z-50"
//     onClick={() => toggleView()}
//     key="overlay">
//      <motion.div
//      initial={{opacity: 0, y:10 }}>
        
//      </motion.div>
//     </motion.div>);
//  }