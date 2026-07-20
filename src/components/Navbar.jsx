function Navbar(){
    return(
        <nav className="bg-slate-900 text-white px-4 md:px-8 py-5 h-20 flex justify-between  items-center fixed top-0 w-full z-50">
            <a href="#about" className="text-2xl font-bold text-blue-500">Maheshwari</a>
            <div className=" hidden md:gap-5 md:flex">
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer h " href="#hero">Home</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#about">About</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#skills" >Skills</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#projects">Projects</a>
                {/* <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#about">Skills</a> */}
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#education">Education</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#certification">Certifications</a>
                <a className="hover:text-blue-400 transition duration-300 cursor-pointer" href="#contact">Contact</a>
            </div>
            
        </nav>
    )
}
export default Navbar;