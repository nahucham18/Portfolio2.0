import { PiCertificate } from 'react-icons/pi'
import { LiaCertificateSolid } from 'react-icons/lia'
import Image from "next/image"

export default function Educacion() {

    const certificados = [
        {
            name: "Soy Henry",
            seccion: [
                {
                    titulo: "Bootcamp",
                    espe: ["Full-Stack Developer -/JavaScript - HTML - CSS - NODE - React - Redux - SQL/"]
                }
            ]

        },
        {
            name: "Educacion IT",
            seccion: [
                {
                    titulo: "Cursos",
                    espe: ["HTML5:Fundamentos Web", "Maquetador Web: HTML 5 y CSS3", "Introducción al Paradigma de Objetos", "Javascript desde cero", "Responsive Web Design & Bootstrap", "React.JS"]
                }
            ]

        }
    ]


    return (
        <section className="flex flex-col gap-y-[2rem] pt-[4rem] pb-[1rem]" >
            <h2 className="font-bold text-[0.9rem]">Certificados</h2>
            {
                certificados?.map((cert, index) => {
                    return (
                        <div key={index} className='flex'>
                            <div className='flex gap-x-[1rem] w-[35%]'>
                                <PiCertificate className={`w-[30px] h-[30px] ${cert.name==="Soy Henry" ? "text-[#fafa8c]" : cert.name==="Educacion IT" ? "text-[#5b77ff]" : "text-white"} ${cert.name === "Soy Henry" ? "hover:text-[#FFFF01] " : cert.name === "Educacion IT" ? "hover:text-[#0A2FF1]" : "hover:text-[black]"} cursor-pointer`} />
                                <h3 className='font-medium'>{cert.name}</h3>
                            </div>
                            {
                                cert?.seccion?.map((secc, index) => {
                                    return (
                                        <div
                                            className='flex flex-col w-[65%]'
                                            key={index}>
                                            <h4 className=' text-[0.9rem]' >{secc.titulo}</h4>
                                            <div className='pl-[1rem] pt-[0.4rem]'>
                                                {
                                                    secc?.espe?.map((esp, index) => {
                                                        return (
                                                            <div key={index} className='flex gap-x-[0.4rem]'>
                                                                <LiaCertificateSolid  className='w-[20px] h-[20px]'/>
                                                                <span className='w-[80%] font-light text-[0.8rem]'>{esp}</span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
           
        </section>
    )
}