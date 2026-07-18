import CertificateCard from "./CertificateCard";
import { useState } from "react";
function Certification(){
    const[showAll,SetShowAll]=useState(false)


const certificates=[{
    title:" HTML, CSS & Tailwind CSS",
    img:"HTML,CSS,TailwindCSS.png"
},
{
    title:" JavaScript Basics",
    img:"JS Basics.png"

},
{
    title:"Advanced JavaScript",
    img:"Advanced Js.png"
},
{
    title:"ReactJS",
    img:"React.JS.png"
},
{
    title:"Node.js",
    img:"Node.js.png"

},
{
    title:"Database",
    img:"Database.png"
},
{
    title:"Full Stack Development",
    img:"FullStack.png"

}]
const visibleCertificates=showAll ? certificates:certificates.slice(0,6)
    return(
        <section id="certification" className="bg-slate-900 items-center py-20 text-white ">
            <div className="max-w-6xl mx-auto px-8 ">
                <h1 className="font-bold text-5xl  text-center">Certifications</h1>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 mt-5  p-4">
                {
                    
                  visibleCertificates.map((cert,index)=>(
                    <div className={showAll && index===visibleCertificates.length-1?"md:col-start-2":""}>
                    <CertificateCard key={cert.title} title={cert.title} img={cert.img} />
                    </div>
                  ))  
                 
                }
                


            </div>
            <div className="flex justify-center mt-8 ">            
                 <button className="bg-slate-600 border hover:bg-slate-900 transition duration-300  rounded-lg p-2 m-3 " onClick={()=>{SetShowAll(!showAll)}}>{showAll?"show Less" :"View More"}</button>
</div>


        </section>

    )
}
export default Certification;