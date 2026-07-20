import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import {motion} from "framer-motion"
function Hero(){
    const name="Maheshwari"
    const role="Junior Full Stack Developer"
    const description=`I am passionate about building responsive and user-friendly web
            applications using React, JavaScript and Tailwind CSS.`



    return(
       <section id="hero" className="bg-slate-900 text-white py-20 pb-12 flex    items-center scroll-mt-20 " >
        <div className="max-w-6xl grid md:grid-cols-2 mx-auto px-4  md:pt-12 md:px-8 gap-12 items-center">
            {/* left side  max-w-6xl mx-auto px-4 md:px-8   --bg-slate-800 text-white py-20 */}
            <motion.div initial={{
                x:-100,
                opacity:0
            }} animate={{
                x:0,
                opacity:1,
            }} transition={{
                duration:0.8
            }}
            >
                <p className="text-lg  text-blue-500 mb-2">Hello I'm</p>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{name}</h1>
                <h2 className="text-2xl text-gray-300 mb-6">{role}</h2>
                <p className=" text-gray-400 mb-6 leading-8">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <a className=" bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 transition-all hover:scale-105 duration-300 " href="#projects">View Projects</a>
                <a className="border border-blue-500 px-6 p-3 rounded-lg hover:bg-blue-500 hover:cursor-pointer transition-all duration-300 hover:scale-105 " href="/Maheshwari_resume.pdf" download onClick={()=>console.log("Clicked")}>Download Resume</a>
            </div>
            </motion.div>
            {/* Right Side */}
            <div className="flex justify-center">
  <div className="grid grid-cols-2 gap-6 md:gap-8 text-5xl md:text-7xl">

    <FaReact className="text-cyan-400 hover:scale-110 hover:rotate-6 transition-all duration-300" />

    <FaHtml5 className="text-orange-500 hover:scale-110 hover:rotate-6 transition-all duration-300" />

    <FaCss3Alt className="text-blue-500 hover:rotate-6 hover:scale-110 transition-all duration-300" />

    <FaJsSquare className="text-yellow-400 hover:rotate-6 hover:scale-110 transition-all duration-300" />

    <SiTailwindcss className="text-sky-400 hover:rotate-6 hover:scale-110 transition-all duration-300 " />

    <FaNodeJs className="text-green-500 hover:rotate-6 hover:scale-110 transition-all duration-300" />

  </div>
</div>

        </div>

       </section>
    )
}
export default Hero;