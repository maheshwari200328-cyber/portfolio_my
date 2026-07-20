import{ useState} from 'react'
function Navbar(){

const[menuOpen,SetMenuOpen]=useState(false)
// SetMenuOpen(true);
// SetMenuOpen(!menuOpen)

    return(
        <nav className="bg-slate-900 text-white px-4 md:px-8 py-5 h-20 flex justify-between  items-center fixed top-0 w-full z-50">
            <a href="#about" className="text-2xl font-bold text-blue-500">Maheshwari</a>
            {
                menuOpen ? <button onClick={()=>{SetMenuOpen(!menuOpen)}} className='md:hidden' >✖</button>:<button className='md:hidden block' onClick={()=>{SetMenuOpen(!menuOpen)
                
              }}> ☰</button>

            }
             
            <div className=" hidden md:gap-5 md:flex">
              
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer h " href="#hero" onClick={()=>SetMenuOpen(false)}>Home</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#about" onClick={()=>SetMenuOpen(false)}>About</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#skills" onClick={()=>SetMenuOpen(false)}>Skills</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#projects" onClick={()=>SetMenuOpen(false)}>Projects</a>
                {/* <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#about">Skills</a> */}
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#education" onClick={()=>SetMenuOpen(false)}>Education</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#certification" onClick={()=>SetMenuOpen(false)}>Certifications</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#contact" onClick={()=>SetMenuOpen(false)}>Contact</a>
            </div>
            {
                menuOpen &&  <div className="   bg-slate-900 absolute top-20 left-0 w-full flex flex-col gap-5 p-5">
              
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer h " href="#hero" onClick={()=>SetMenuOpen(false)} >Home</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#about" onClick={()=>SetMenuOpen(false)}>About</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#skills"onClick={()=>SetMenuOpen(false)} >Skills</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#projects"onClick={()=>SetMenuOpen(false)}>Projects</a>
                {/* <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#about">Skills</a> */}
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#education"onClick={()=>SetMenuOpen(false)}>Education</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#certification"onClick={()=>SetMenuOpen(false)}>Certifications</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#contact"onClick={()=>SetMenuOpen(false)}>Contact</a>
            </div>
            }
            
        </nav>
    )
}
export default Navbar;