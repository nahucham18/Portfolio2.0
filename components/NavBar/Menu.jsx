'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { changeScroll } from "@/redux/slice";
import { useDispatch } from "react-redux";
import { Link as ScrollLink } from "react-scroll";

export default function Menu({ scroll }) {

    const dispatch = useDispatch()

    // const handleScroll = (event) =>{
    //     console.log(event.target.id)
    //     setTimeout(
    //         dispatch(changeScroll(event.target.id)),4000
    //     )
    // }

    return (
        <ul className="flex flex-col gap-x-[1rem] gap-y-[1rem] max-sm:hidden">
            <div className="flex items-center gap-x-[0.4rem]">
                <motion.hr
                    initial={{ width: "15%" }}
                    animate={(scroll >= 200) ? { width: "15%" } : { width: "30%" }}
                    transition={{ duration: 0.3 }}
                />

                <motion.li 
                onMouseEnter={()=>{
                    const section = document.getElementById("section1")
                    section.scrollIntoView({behavior:"smooth"})
                }}
                initial={{textShadow:'none'}}
                animate={scroll >=200 ? {textShadow:'none'} : {textShadow:"0px 0px 20px rgb(255,255,255)"}}
                transition={{duration:0.5}}
                className="font-bold text-[0.9rem] cursor-pointer" >
                    Sobre mi
                </motion.li>

            </div>
            <div className="flex items-center gap-x-[0.4rem]">
                <motion.hr
                    initial={{ width: "15%" }}
                    animate={(scroll >= 200 && scroll <= 640) ? { width: "30%" } : { width: "15%" }}
                    transition={{ duration: 0.3 }} />
                 <motion.li 
                 onMouseEnter={()=>{
                    const section = document.getElementById("section2")
                    section.scrollIntoView({behavior:"smooth"})    
                }}
                 id="educacion"
                // initial={{textShadow:'none'}}
                // animate={(scroll >=200 && scroll <=640) ? {textShadow:"0px 0px 20px rgb(255,255,255"} : {textShadow:'none'}}
                // transition={{duration:0.5}}
                className="font-bold text-[0.9rem] cursor-pointer" >
                   
                    Educacion
                    </motion.li>
            </div>
            <div className="flex items-center gap-x-[0.4rem]">
                <motion.hr
                    initial={{ width: "15%" }}
                    animate={(scroll >= 640 && scroll <= 1070) ? { width: "30%" } : { width: "15%" }}
                    transition={{ duration: 0.3 }}
                />
                <motion.li 
                onMouseEnter={()=>{
                    const section = document.getElementById('section3')
                    section.scrollIntoView({behavior:"smooth"})
                }}
                id="tecnologias"
                initial={{textShadow:'none'}}
                animate={(scroll >=640 && scroll <=1070) ? {textShadow:"0px 0px 20px rgb(255,255,255"} : {textShadow:'none'}}
                transition={{duration:0.5}}
                className="font-bold text-[0.9rem] cursor-pointer" >Tecnologias</motion.li>
            </div>
            <div className="flex items-center gap-x-[0.4rem]">
                <motion.hr
                    initial={{ width: "15%"}}
                    animate={(scroll >= 1070 && scroll <= 1700) ? { width: "30%" } : { width: "15%" }}
                    transition={{ duration: 0.3 }}
                />
                <motion.li
                onMouseEnter={()=>{
                    const section = document.getElementById('section4')
                    section.scrollIntoView({behavior:"smooth"})
                }}
                id="proyectos" 
                initial={{textShadow:'none'}}
                animate={(scroll >=1070 && scroll <=1700) ? {textShadow:"0px 0px 20px rgb(255,255,255"} : {textShadow:'none'}}
                transition={{duration:0.5}}
                className="font-bold text-[0.9rem] cursor-pointer">Proyectos</motion.li>
            </div>
            <div className="flex items-center gap-x-[0.4rem]">
                <motion.hr
                    initial={{ width: "15%" }}
                    animate={(scroll >= 1700) ? { width: "30%" } : { width: "15%" }}
                    transition={{ duration: 0.3 }}
                />
                <motion.li 
                onMouseEnter={()=>{
                    const section = document.getElementById('section5')
                    section.scrollIntoView({behavior:"smooth"})
                }}
                id="contactame"
                initial={{textShadow:'none'}}
                animate={ scroll >=1700 ? {textShadow:"0px 0px 20px rgb(255,255,255"} : {textShadow:'none'}}
                transition={{duration:0.5}}
                className="font-bold text-[0.9rem] cursor-pointer">Contactame</motion.li>
            </div>
        </ul>
    )
}