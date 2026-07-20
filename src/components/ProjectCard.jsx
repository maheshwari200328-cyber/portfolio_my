function ProjectCard(props){
    return(
        <div className="bg-slate-800 p-6 m-4 md:m-8 rounded-xl shadow-lg text-center hover:-translate-y-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 ">
            <h2 className="font-bold text-2xl mb-3">
                {props.title}
            </h2>
            <p className="text-gray-300 mb-5">
                {props.tech}
            </p>
            <div className="flex gap-4  flex-col  md:flex-row mt-8 sm:text-sm justify-center   ">
                <a href={props.github} target="_blank" rel="noopener noreferrer" className="border  px-6 py-2 bg-slate-600  hover:cursor-pointer transform duration-300 hover:bg-slate-900 rounded-lg">
                Github
                
            </a>
            <a href={props.demo} target="_blank" rel="noopener noreferrer" className="border px-6 py-2 bg-slate-600 hover:cursor-pointer transform duration-300 hover:bg-slate-900 rounded-lg">
                Demo
                
            </a>
            </div>
            
        </div>
    )
}
export default ProjectCard;