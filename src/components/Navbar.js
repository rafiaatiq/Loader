import { motion } from "framer-motion";
import { IoTimer } from "react-icons/io5";


export default function Navbar() {
 
  return (
    <div className="w-full px-4 md:px-12 py-12 flex justify-between items-center">

        <div className="flex items-center gap-28">
            <motion.h1 initial={{opacity: 0}} animate={{opacity:1, transition: {duration: 0.7} }} className="text-xl md:text-2xl afacad-flux-bold font-bold">Digital Dynamo</motion.h1>

            <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {duration: 0.7} }} className="flex gap-5 text-lg font-medium hidden md:inline-flex">
                <h1 className="h-8 border-b-black border-b-[1px]">Services</h1>
                <h1 className="">Testimonials</h1>
                <h1 className="">Contact us</h1>
            </motion.div>
        </div>

        <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {duration: 0.7} }} className="flex items-center gap-12 font-medium ">
            <h1 className="text-lg flex justify-center items-center gap-1 hidden md:inline-flex"> <IoTimer className="text-[#ababab]"/>  Darwin, Australia 13:40</h1>

            <div className="flex gap-2 border-b-[1px] border-b-black h-9">
                <h1 className="text-base  md:text-lg pt-1">Let's work together</h1>
            </div>
        </motion.div>

        

    </div>
  );
}