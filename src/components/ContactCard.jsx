function ContactCard(props){
    return (
        <div className="bg-slate-800 shadow-lg m-8 p-8 text-center rounded-xl  space-y-4 ">
            {/* <a href={`mailto:${props.email}`} className="font-bold text-3xl text-blue-600 block">Email: {props.email}</a> */}
           <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=maheshwari200328@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="font-bold text-3xl text-blue-600 block"
>
  Email: {props.email}
</a>
            <a href={`tel:${props.phone}`} className="font-bold text-3xl ">Phone No:{props.phone}</a>
            <p className="font-bold text-xl">Location:{props.location}</p>
            <div className="flex justify-center gap-8">
                <a href={props.github} target="_blank" rel="noopener noreferrer" className="p-2 m-4 bg-slate-600 hover:bg-slate-900 border rounded-lg cursor-pointer">GitHub</a>
            <a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 m-4 bg-slate-600 hover:bg-slate-900 border rounded-lg cursor-pointer" >LinkedIn</a>


            </div>
            
        </div>
    )
}
export default ContactCard;