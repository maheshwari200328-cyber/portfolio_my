import ProjectCard from "./ProjectCard";

function Projects(){

    const projects=[{
        title:"Social Media App",
        tech:"React,js,tailwindcss,html,Express js,mongoDB",
        github:"https://github.com/maheshwari200328-cyber/socialmedia",
        demo:"https://socialmediaappnavi30.netlify.app/"
    },
{
        title:"Notes App",
        tech:"React,js,tailwindcss,html",
        github:"https://github.com/maheshwari200328-cyber/mynotesnavi30",
        demo:"https://mynotesapp-navi30.netlify.app/"
    },
{
        title:"Movie Search",
        tech:"React,js,tailwindcss,html",
        github:"https://github.com/maheshwari200328-cyber/moviesearchhh",
        demo:"https://navimoviesearch.netlify.app/"
    },
{
        title:"E-Commerce Website",
        tech:"React,js,tailwindcss,html",
        github:"https://github.com/maheshwari200328-cyber/addtocart30",
        demo:"https://navirouteraddtocart.netlify.app/"
    },]
    return(
        <section id="projects" className="bg-slate-900 items-center py-20 text-white">
            <div className="max-w-6xl mx-auto px-8">
                <h1 className="font-bold text-5xl text-center">
                    My Projects
                </h1>

            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-5 p-4 ">
                {
                    projects.map((proj)=>(
                        <ProjectCard key={proj.title} title={proj.title} tech={proj.tech} github={proj.github} demo={proj.demo} />

                    ))
                }

            </div>

        </section>
    )
}
export default Projects;