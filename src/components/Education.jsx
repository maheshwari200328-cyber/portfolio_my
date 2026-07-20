import EducationCard from "./EducationCard";
function Education(){
    const education=[{
        degree:"B.Sc Computer Science",
        college:"K.C.S. Kasi Nadar College",
        year:"2021-2024",
        percentage:"72%"
    },
{
    degree:"M.Sc Computer Science",
        college:"Thiru Thangal  Nadar College",
        year:"2024-2026",
        percentage:"70%",

}]
    return(
       <section id="education" className="bg-slate-900 items-center py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h1 className="font-bold text-3xl md:text-5xl text-center">Education</h1>
        </div>
        <div className="grid md:grid-cols-2 mt-5 p-4 gap-8">
            {
                education.map((edu)=>(
                    <EducationCard key={edu.degree} degree={edu.degree}college={edu.college} year={edu.year} percentage={edu.percentage}  />
                ))

            }

        </div>

       </section>
    )
}
export default Education;