import {motion , useScroll, useAnimate, useTransform} from 'framer-motion'
import { ScrollTrigger } from 'gsap/all';
import ProjectcardContent from "./ProjectCardContent";
import { useEffect, useRef } from 'react';
import HeaderTitle from '../util/HeaderTitle';
import { gsap } from 'gsap/gsap-core';

export default function Project()
{
    const { scrollYProgress } = useScroll();
    const backgroundColor = useTransform(
        scrollYProgress,
        [0.7, 0.75],
        ["rgb(253 224 71)", "rgb(190 242 100)"]
    );

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    //horizontal Gsap
    useEffect(() => {

    }, []);

    return(
        <motion.section>
            <HeaderTitle />
            <div>
                <div>
                    <ProjectcardContent />
                </div>
            </div>
        </motion.section>
    );
}