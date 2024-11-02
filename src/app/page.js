"use client";
import Image from "next/image";
import Loader from '../components/Loader'
import Hero from '../components/Hero'
import { useState } from 'react';

export default function Home() {
  const [showHero, setShowHero] = useState(false);

  return (
    <div className="text-black main">

      <div className='h-screen w-full loader fixed'>
        <Loader setShowHero={setShowHero}/>
      </div>
      
      {showHero && <Hero />}
    </div>

    // <div className="text-black main">
    //   {!loaderComplete && ( // Render loader only if it's not complete
    //     <div className='h-screen w-full loader fixed z-50'>
    //       <Loader onLoaderComplete={() => setLoaderComplete(true)} />
    //     </div>
    //   )}

    //   {loaderComplete && ( // Render hero only after loader is complete
    //     <div className='h-screen w-full'>
    //       <Hero />
    //     </div>
    //   )}
    // </div>
  );
}
