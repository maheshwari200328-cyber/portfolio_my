import SkillCard from "./SkillCard";
function Skills(){
    const skills=["HTML","CSS","Tailwind CSS","JavaScript","React","MongoDB"]
    return(
        <section id="skills" className="bg-slate-900 py-20 text-white ">
            <div className="max-w-6xl mx-auto  px-4 md:px-8">
                <h1 className="font-bold text-center text-3xl md:text-5xl">My Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-5 m-4 md:m-8 p-4 md:p-8 md:text-xl   font-bold ">
                {
                    skills.map((skill)=>(
                       <SkillCard className="" key={skill} name={skill}/>

                    ))
                }
                {/* <div className="bg-slate-600 px-3  py-3 text-center m-2 border  hover:bg-slate-900 rounded-lg cursor-pointer transition duration-300">
                    <h3>HTML</h3>

                </div>
                <div className="bg-slate-600 px-3  py-3 text-center m-2 border  hover:bg-slate-900 rounded-lg cursor-pointer transition duration-300">
                    <h3>CSS</h3>

                </div>
                
                <div className="bg-slate-600 px-3  py-3 text-center m-2 border  hover:bg-slate-900 rounded-lg hover:cursor-pointer transition duration-300 ">
                    <h3>Tailwind CSS</h3>

                </div>
                <div className="bg-slate-600 px-3  py-3 text-center m-2 border  hover:bg-slate-900 cursor-pointer rounded-lg transition duration-300">
                    <h3>JavaScript</h3>

                </div>
                <div className="bg-slate-600 px-3  py-3 text-center m-2 border  hover:bg-slate-900 rounded-lg cursor-pointer transition duration-300">
                    <h3>React</h3>

                </div>
                <div className="bg-slate-600 px-3  py-3 text-center m-2 border  hover:bg-slate-900 rounded-lg cursor-pointer transition duration-300">
                    <h3>MongoDB</h3>

                </div> */}
                
                
                
                

            </div>

            </div>

        </section>
    )
}
export default Skills;