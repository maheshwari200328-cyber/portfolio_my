import ContactCard from "./ContactCard";
function Contact(){
    const contact={
        email:"maheshwari200328@gmail.com",
        phone:"8056145544",
        location:"Thiruvottiyur,Chennai-600019,TamilNadu",
        github:"https://github.com/maheshwari200328-cyber",
        linkedin:"https://www.linkedin.com/in/maheshwari-p-bb02a6291/"
    }
    return(
        <section id="contact" className="bg-slate-900 items-center py-20 text-white">
            <div className="max-w-6xl mx-auto px-8 ">
                <h1 className="font-bold text-center  text-5xl">Contact Me</h1>
            </div>
            
              
                    <ContactCard  email={contact.email} phone={contact.phone} location={contact.location} github={contact.github} linkedin={contact.linkedin} />
                    
            
            

        </section>
    )
}
export default Contact;