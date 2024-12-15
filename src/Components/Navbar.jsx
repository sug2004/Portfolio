import logo from "../assets/S1.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
// import { FaInstagram } from "react-icons/fa"
import { ImProfile } from "react-icons/im";

import resumePdf from "../assets/Resume/2SUGRISH V M WEB DEVELOPER ML ENGINNER .pdf"

const handleDownloadResume = () =>{
  const resumeUrl = resumePdf;
  window.open(resumeUrl,"_blank");
};

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo}  alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a className="hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 text-white font-bold rounded " href="https://www.linkedin.com/in/sugrish-v-m-2793702b3/"><FaLinkedin /></a>
            <a className="hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 text-white font-bold rounded " href="https://github.com/sug2004"><FaGithub/></a>
            {/* <a className="hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 text-white font-bold rounded" href="https://www.instagram.com/sugrishvm/"><FaInstagram/></a> */}
            <button className="hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 text-white font-bold rounded" onClick={handleDownloadResume}>
               <ImProfile />
            </button>


        </div>
    </nav>
  )
}

export default Navbar