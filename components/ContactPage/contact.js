 import Image from "next/image";
 import {motion} from "framer-motion";
 import ContactPic from "../../public/assets/profile/mini.png.jpeg";
 import HeaderTitle from "../util/HeaderTitle";
 import ContactIconList from "./ContactIconList";

 export default function Contact() {
    return (
        <section>
            <HeaderTitle title=" CONTACT "/>
            <div>
                <Image>

                </Image>
            </div>
            <div>
                <motion.div>
                    <h3>CONTACT ME</h3>
                </motion.div>
                <ContactIconList />
            </div>
        </section>
    )
 }