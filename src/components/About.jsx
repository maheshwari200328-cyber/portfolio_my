function About(){
    return(
        <section id="about" className="bg-slate-900 text-white py-20 ">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <h1 className=" text-3xl md:text-5xl font-bold text-white mb-12">About Me</h1>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <p className="text-gray-300 leading-8 ">
                         I am a passionate Full Stack Developer who enjoys building responsive and user-friendly web applications using React, JavaScript and Tailwind CSS.
                    </p>
                    <div className="space-y-4 bg-slate-700 p-5 rounded-lg">
                    <p><span className="font-bold">Name :</span>Maheshwari</p>
                    <p><span className="font-bold">Degree :</span>MSc Computer Science</p>
                    <p><span className="font-bold">Location :</span>Chennai</p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=maheshwari200328@gmail.com"
  target="_blank"
  rel="noopener noreferrer" className="text-blue-400 hover:underline"><span className="font-bold">Email :</span>maheshwari200328@gmail.com</a>
                    </div>

                </div>
            </div>

        </section>

    );

}
export default About;