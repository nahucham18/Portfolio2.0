import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoNodejs, BiLogoPostgresql, BiLogoFigma} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiExpress, SiSequelize, SiSqlite, SiAdobephotoshop} from 'react-icons/si'

export default function Tecnologias(){
    return (
        
       <section className='flex flex-col gap-y-[2rem]  pt-[5rem] pb-[1rem]'>
        <h2 className='font-bold text-[0.9rem]'>Tecnologias.</h2>
         <div className="flex gap-[1rem] flex-wrap w-[80%] mx-[auto]">
             <AiFillHtml5 className='w-[50px] h-[50px]'/>
             <BiLogoCss3 className='w-[50px] h-[50px]'/>
             <BiLogoJavascript className='w-[50px] h-[50px]'/>
             <TbBrandNextjs className='w-[50px] h-[50px]'/>
             <BiLogoReact className='w-[50px] h-[50px]'/>
             <BiLogoRedux className='w-[50px] h-[50px]'/>
             <BiLogoTailwindCss className='w-[50px] h-[50px]'/>
             <BiLogoNodejs className='w-[50px] h-[50px]'/>
             <SiExpress className='w-[50px] h-[50px]'/>
             <BiLogoPostgresql className='w-[50px] h-[50px]'/>
             <SiSequelize className='w-[50px] h-[50px]'/>
             <SiSqlite className='w-[50px] h-[50px]'/>
             <BiLogoFigma className='w-[50px] h-[50px]'/>
             <SiAdobephotoshop className='w-[50px] h-[50px]'/>
         </div>
       </section>
    )
}