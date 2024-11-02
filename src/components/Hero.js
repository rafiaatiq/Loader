import { motion, useInView } from "framer-motion";
import Navbar from './Navbar'
import { FiArrowUpRight } from "react-icons/fi";
import { LuArrowDown } from "react-icons/lu";


export default function Hero() {
  const description = "We specialize in crafting digital solutions that not only meet the unique needs of your business but also resonate with your target audience. From stunning web design to impactful digital marketing strategies, we bring creativity and expertise together to drive your growth.";
  // const isInView = useInView(description);
 
  return (
    <div className="h-screen w-full bg-[#fffbf2] text-black">
        <Navbar/>

        <div className="px-4 md:px-12 pt-0 md:pt-3">

          <div>
            {"Innovative digital solutions for modern businesses.".split(" ").map((word, index) => (
              <h1 className="text-5xl md:text-9xl overflow-hidden inline-flex font-bold  md:leading-[100px] tracking-tighter"><motion.span initial={{ opacity: 0.7, y: "7%" }} // Adding a slight scale down effect for smoothness
              animate={{ 
                opacity: 1, 
                y: "0%",
                transition: { 
                  duration: 1.2, 
                  ease: [0.42, 0, 0.58, 1]  // Custom cubic-bezier easing for smooth ease in-out
                } 
              }} className="mr-2 md:mr-7">{word}</motion.span></h1>
            ))}
          </div>
          

          <div className="h-20 w-full mt-6 md:mt-56 flex flex-col md:flex-row gap-2">

            <div className="md:w-1/2 ">
              {/* <h1 className="text-xl"></h1> */}
              <div className="pl-1 md:pl-2">
                {description.split(" ").map((word, index) => (
                    <p key={index}  className='overflow-hidden inline-flex text-base md:text-xl'><motion.span initial={{y: "100%"}}  animate={{ y: "0%", transition: {duration: 0.7, delay: 0.001 * index}}}  key={index} className='mr-1'>{word}</motion.span></p>
                ))}
              </div>

              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} className="h-10 w-[8rem] md:h-12 md:w-40 bg-black text-white text-sm md:text-base rounded-full mt-6 flex justify-center items-center md:pl-2">Get Started
                <button className="h-6 w-6 md:h-8 md:w-8 bg-white ml-2 md:ml-4 rounded-full text-black text-lg md:text-xl flex justify-center items-center"><FiArrowUpRight/></button>
              </motion.div>
            </div>

            <div className="w-1/2 text-black pt-52 md:pt-40">
              {/* <h1 className="text-lg">Let’s Transform Your Digital Presence.</h1> */}
              <motion.h1 initial={{opacity: 0}} animate={{opacity:1, transition: {duration: 0.7} }} className="text-base md:text-lg font-semibold pr-10 md:pr-0 pl-0 md:pl-[30rem] flex justify-center items-center">(Explore more &nbsp; <LuArrowDown/> )</motion.h1>
              
            </div>

          </div>

        </div>
    </div>
  );
}