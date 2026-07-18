function EducationCard(props){
    return(
        <div className="bg-slate-800  m-8 mx-8 p-6 text-center shadow-lg leading-8  text-white rounded-xl hover:-translate-y-2 transition duration-300 border ">
            <h2 className="font-bold text-xl ">{props.degree}</h2>
            <p className="font-bold text-xl">{props.college}</p>
            <p className="font-bold text-xl">{props.year}</p>
            <p className="font-bold text-xl">{props.percentage}</p>


        </div>
    )
}
export default EducationCard;