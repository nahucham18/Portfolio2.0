'use client'

import NavBar from '@/components/NavBar/NavBar'
import Right from '@/components/Right/Right'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {

  const [scroll,setScroll] = useState("")

    useEffect(()=>{
      const handleScroll = ()=>{
        const scrollPos = window.scrollY;
        setScroll(scrollPos)
      }

        window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    },[])
    console.log(scroll)
  return (

    <main className='flex '>
      <div className='hidden sm:block'>
      <NavBar scroll={scroll}/>
      </div>
      <Right className="w-[60%]"/>
    </main>    
    )
}
