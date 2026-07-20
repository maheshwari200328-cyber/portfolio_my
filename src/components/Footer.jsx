function Footer(){
       
    return(
        <footer className="bg-slate-900 items-center text-white space-y-6  py-8 leading-12">
            <div className="max-w-6xl mx-auto px-4 md:px-8   border-t  border-b  mt-6 border-gray-700  pb-6  pt-6 ">
                
                <p className="text-2xl font-bold text-center leading-12">Maheshwari</p>
            <p className="text-xl text-center text-gray-400">Full Stack Developer</p>
            <div className="flex justify-center gap-8  ">
                <a href="https://github.com/maheshwari200328-cyber" target="_blank" rel="noopener noreferrer"  className="hover:text-blue-500 transition duration-300">GitHub</a>
                <a href="https://www.linkedin.com/in/maheshwari-p-bb02a6291/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">LinkedIn</a>
            </div>
            <p className="text-center text-sm text-gray-500 ">© 2026 Maheshwari. All Rights Reserved.</p>

            </div>
            

        </footer>
    )
}
export default Footer;