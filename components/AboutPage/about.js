 import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
 //import aboutProfile from "../../public/assets/profile/profile2.jpg";
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

   
 }