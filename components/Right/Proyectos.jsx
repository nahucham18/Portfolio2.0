'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"
import { AiFillGithub } from 'react-icons/ai'
import { SiWebmoney } from 'react-icons/si'
import {BsRocketTakeoff} from 'react-icons/bs'


export default function Proyectos() {

    const [proyects, setProyects] = useState()

    const getProyecto = async () => {
        const response = await axios('http://localhost:3000/proyectos.json')
        console.log(response.data)
        setProyects(response.data)
    }

    useEffect(() => {
        getProyecto();
    }, [])

    return (
        <section className="flex flex-col gap-y-[2rem] pt-[5rem] pb-[1rem] ">
            <h2 className="font-bold text-[0.9rem]">Proyectos construccion</h2>
            <div className="flex flex-col gap-y-[2rem]">
                {
                    proyects?.map((proyect, index) => {
                        return (
                            <div
                                key={index}
                                className=" p-[1rem] rounded-[1rem] flex gap-x-[0.6rem]">
                                <Image
                                    className="rounded-[0.8rem]"
                                    src={"https://firebasestorage.googleapis.com/v0/b/nahuelchamorro-e4019.appspot.com/o/fashion%20finds.png?alt=media&token=e593d036-ec6c-4904-8edd-7668de29a39a"} alt="img-fashion" width={150} height={150} />
                                <div>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-bold text-[0.8rem]">{proyect.titulo}</h3>
                                        <p className="font light text-[0.8rem]">{proyect.descripcion}</p>
                                    </div>
                                    <article className="flex gap-x-[0.4rem]">
                                        <AiFillGithub />
                                        <BsRocketTakeoff/>
                                    </article>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}