import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin"
//import { FaLaptopCode } from "@react-icons/all-files/fa/FaLaptopCode";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import {motion} from "framer-motion";
import ContactIcon from "./ContactIcon";

export default function ContactIconList()
{
    return (
        <motion.ul
        className="flex flex-row justify-center lg:mt-5 lg:gap-20 items-center"
        initial={{opacity: 0, y: 50}}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: {delay: 0.5},
        }}>
            <ContactIcon
            title="Linkdin"
            url="https://www.linkedin.com/in/himanshu-singh-5226a628a"
            >
                <FaLinkedin size="70" />
            </ContactIcon>
            <ContactIcon title="GitHub" url="https://github.com/HimanshuSinghBhandari">
                <FaGithub size="70"/>
            </ContactIcon>
            <ContactIcon title="Instagram" url="https://www.instagram.com/imhimanshubhandari">
                <FaInstagram size="75" />
            </ContactIcon>
            <ContactIcon title="gmail" url="himanshubhandari4675@gmail.com">
                <MdEmail size="75" />
            </ContactIcon>
            <ContactIcon title="twitter" url="https://twitter.com/himanshu_14rt">
                <FaTwitter size="75" />
            </ContactIcon>
        </motion.ul>
    )
}