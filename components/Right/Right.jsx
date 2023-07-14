'use client'
import { useSelector } from "react-redux";
import About from "./About";
import Contactame from "./Contactame";
import Educacion from "./Educacion";
import Footer from "./Footer";
import Proyectos from "./Proyectos";
import Tecnologias from "./Tecnologias";

import { Element } from "react-scroll";
import { animateScroll as scroll, scroller } from "react-scroll";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeScroll } from "@/redux/slice";
import NavBar from "../NavBar/NavBar";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import Link from "next/link";

export default function Right() {
    const dispatch = useDispatch()
    const scrollPoint = useSelector(state => state.portfolio.scroll)
    const scrollType = { duration: 1000, delay: 50, smooth: true, offset: -100 }

    // useEffect(() => {
    //     setTimeout(
    //         scroller.scrollTo(scrollPoint, scrollType),3000
    //         )
    //     }, [scrollPoint])

    // useEffect(()=>{
    //     const scr = window.screenY
    //     console.log(scr)
    //     dispatch(changeScroll(""))
    // },[scrollPoint])

    return (
        <main className="w-[100%] sm:w-[55%] md:w-[60%] sm:ml-[45%] md:ml-[40%] bg-[#111111]">
            <div className="w-[90%] md:w-[70%] mx-[auto] pt-[4rem] ">
            <div className="flex flex-col gap-y-[2rem] justify-between">
                <div className="block sm:hidden">
                    <h1 className="font-bold text-[2.4rem]">Nahuel Chamorro</h1>
                    <span className="font-medium text-[1rem]">Full-Stack Developer</span>
                    <p className="font-light text-[0.8rem]">Construyo productos y experiencias digitales accesibles e inclusivos para la web.</p>
                    <div className="flex gap-x-[1rem] mt-[2rem]">
                        <Link href={"https://github.com/nahucham18"} target="_blank">
                        <AiFillGithub className="w-[35px] h-[35px] hover:text-[#808080]"/>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/nahuel-chamorro-aaba74238/"} target="_blank">
                        <AiFillLinkedin className="w-[35px] h-[35px] hover:text-[#808080]"/>

                        </Link>
                    </div>
                </div>                
            </div>
                <Element name="section1" id="section1">
                    <About />
                </Element>
                <Element name="section2" id="section2">
                    <Educacion />
                </Element>
                <Element name="tecnologias" id="section3">
                    <Tecnologias />
                </Element>
                <Element name="proyectos" id='section4'>
                    <Proyectos />
                </Element>
                <Element name="contactame" id="section5">
                    <Contactame />
                </Element>
                <Footer />
            </div>

        </main>
    )
}