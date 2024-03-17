 import {motion} from "framer-motion";
 import Link from "next/link"

export default function NotFoundPage() {
  return (
     <section id="project">
      <div className="h-[100vh] flex flex-col gap-5 justify-center items-center">
        <h1 className="hover:font-bold cursor-pointer">
          <motion.p
           initial={{ display: "none", opacity: 0}}
           animate={{ display: "inline", opacity: 1}}
           className="text-6xl font-bold"
          >
            {`404 Not Found 🤖`}
          </motion.p>
        </h1>
        <p className="text-5xl font-light">Please check your address.</p>

        <Link 
        href="/"
        className="border bg-gray-300 px-5 py-3 rounded-2xl mt-10">
           🏃‍♂️ HOME
        </Link>
      </div>
     </section>
  );
};
