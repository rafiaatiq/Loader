import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useMemo} from "react";
import "../app/globals.css"


export default function Loader({ setShowHero }) {

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [textColor, setTextColor] = useState("black");
  const description = useMemo(() => "Digital Dynamo", []);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Start the first animation for both elements
    controls2.start({ y: -900, transition: { duration: 1, delay: 0.6, ease: [0.76, 0, 0.24, 1] } }).then(() => {
      // After the first animation finishes, move both upwards from bottom to top
      controls2.start({ y:-2000, transition: { duration:1.5, ease: [0.12, 0, 0.39, 0] } });
      controls1.start({ y: -2000, transition: { duration:1.5, ease: [0.12, 0, 0.39, 0]  } });
    });

    setTimeout(() => {
      setTextColor("white");
    }, 1000); // 
  }, [controls1, controls2]);

  useEffect(() => {
    const timer = setTimeout(() => {
        setAnimateOut(true);
        return () => clearTimeout(timer);
    }, 1800 ); // Delay for the upward animation

    return () => clearTimeout(timer);
},[]);

// Trigger showHero state after loader finishes
  useEffect(() => {
    if (animateOut) {
      const heroTimer = setTimeout(() => setShowHero(true), 800);
      return () => clearTimeout(heroTimer);
    }
  }, [animateOut, setShowHero]);


  return (
    <>
      <motion.div
        animate={controls1}
        className="h-screen w-full bg-[#fffbf2] text-black flex justify-center items-center"
        style={{ zIndex: 1 }} // Lower z-index for the background layer
      >
        {/* Background Layer */}
      </motion.div>

      {/* Description Layer */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 2 }} // Higher z-index to overlay
      >
        {description.split(" ").map((word, index) => (
          <p
            key={index}
            style={{ zIndex: 3, color: textColor, transition: "color 0.6s ease-in-out" }}
            className="overflow-hidden inline-flex text-5xl font-bold h-14"
          >
            <motion.span
              initial={{ y: "100%" }}
              animate={animateOut ? { y: "-100%" } : { y: "0%" }}
              transition={{ duration: 0.8, delay: 0.07 }}
              className="mr-4 afacad-flux-bold"
            >
              {word}
            </motion.span>
          </p>
        ))}
      </div>

      <motion.div
        initial={{ y: "0%" }}
        animate={controls2}
        className="h-[110vh] w-full bg-black absolute flex justify-center items-center text-2xl font-bold"
        style={{ zIndex: 0 }} // Lower z-index for the background layer
      >
        {/* Background Layer */}
      </motion.div>
    </>
  );
}

// <p key={index} style={{ zIndex: 3, color: textColor, transition: "color 0.5s ease-in-out"}}  className='relative overflow-hidden inline-flex text-4xl font-bold'><motion.span initial={{y: "100%"}}   animate={{ 
            //   y: "0%", // Move upwards into view
            //   transition: { duration: 0.7 }, // Wait for a delay before starting
            // }}
            // exit={{ 
            //   initial: {y : "0%"},
            //   y: "-100%", // Move upwards out of view
            //   transition: { duration: 0.7, delay: 1 }, // Delay before exiting
            // }} key={index} className='mr-1'>{word}</motion.span></p>


// <p key={index} style={{ zIndex: 3, color: textColor, transition: "color 0.5s ease-in-out"}} className='relative overflow-hidden inline-flex text-4xl font-bold'>
          // <motion.span 
          // initial={{ y: "100%" }} 
          // animate={{ y: "0%", transition: { duration: 0.7, delay: 0.01 * index } }} 
          // className='mr-1'
          // >
          // {word}
          // </motion.span>
          // <motion.span 
          // initial={{ y: "0%" }} 
          // animate={{ y: "-100%", transition: { duration: 0.7, delay: 0.01 * index } }} 
          // className=''
          // >
          // {word}
          // </motion.span>
          // </p>