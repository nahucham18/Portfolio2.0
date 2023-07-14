import Menu from "./Menu";
import Networks from "./Networks";

export default function NavBar ({scroll}){
    return (
        <nav className="bg-[#111111] w-[40%] h-[100vh] flex items-center fixed ">
            <div className="flex flex-col h-[70%]  w-[75%] ml-[25%] justify-between">
            <div className="flex flex-col gap-y-[2rem]">
                <div>
                    <h1 className="font-bold text-[2.4rem]">Nahuel Chamorro</h1>
                    <span className="font-medium text-[1rem]">Full-Stack Developer</span>
                    <p className="font-light text-[0.8rem]">Construyo productos y experiencias digitales accesibles e inclusivos para la web.</p>
                </div>
                <Menu scroll={scroll}/>
            </div>
            <Networks/> 
            </div>
        </nav>
    )
}