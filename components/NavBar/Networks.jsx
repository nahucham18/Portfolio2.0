import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link'
export default function Networks (){
    return (
        <div className='flex gap-x-[1rem] pl-[1rem]'>
            <Link href={"https://github.com/nahucham18"} target='_blank'>
            <AiFillGithub className='w-[25px] h-[25px] hover:hover:text-[#808080]'/>
            </Link>
            <Link href={"https://www.linkedin.com/in/nahuel-chamorro-aaba74238/"} target='_blank'>
            <AiFillLinkedin className='w-[30px] h-[30px] border-[1px] hover:text-[#808080]'/>
            </Link>
        </div>
    )
}