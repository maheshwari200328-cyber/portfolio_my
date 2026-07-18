function SkillCard(props){
    return(
         <div className="bg-slate-600 px-3  py-3 text-center m-2 border  hover:bg-slate-900 hover:-translate-y-2
                         rounded-lg cursor-pointer transition duration-300">
                    <h3 className="font-bold text-xl hover:-translate-y hover:shadow-2xl transition-all duration-300">{props.name} </h3>

                </div>
    )
}
export default SkillCard;