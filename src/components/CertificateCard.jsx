
function CertificateCard(props){
    return(
        <div className="bg-slate-800 shadow-lg rounded-xl p-6 text-white mx-auto hover:scale-105 hover:-translate-y-2 overflow-hidden transition-all duration-300 ">
            <h2 className="font-bold text-center mb-4 ">{props.title}</h2>
            <img src={props.img} className="w-full h-56 object-contain rounded-lg hover:scale-110 transition-transform duration-300  "/>
        </div>

    )
}
export default CertificateCard