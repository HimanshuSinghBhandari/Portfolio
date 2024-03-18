import {motion} from "framer-motion";

export default function Button({ children , onClick}){
  return (
    <div className="scale-75 sm:scale-100">
      <motion.div
      className="absolute w-full bottom-[-15vh] flex flex-col justify-center items-center"
      onClick={onClick}
      whileTap={{scale: 0.9, transition: {duration: 0.2 }}}>
      <motion.div
      >

      </motion.div>

      </motion.div>

    </div>
  );
}