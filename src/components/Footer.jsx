import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer =()=> {
    
    return (
            <div className="m-4 grid gap-4 sm:grid-cols-2 pt-20 p-4 border-b-2 border-gray-400 border-t-2 border-gray-700 pt-4">
              <div className="ml-5">
                <h2 className="text-2xl font-semibold mb-4">Shaw</h2>
                <p className="text-gray-300 text-lg">
                    Passionate web developer crafting user-friendly and responsive<br/>websites. Let's connect and build something amazing!
                </p>
               </div>
           
                <div className="">
                 <div className="flex gap-6">
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl relative group">
                         <XIcon/>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl relative group">
                      <LinkedInIcon />
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl relative group">
                        <GitHubIcon /> 
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl relative group">
                        <InstagramIcon/>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    </div>
                    <div className="pt-3">
                    <p className="text-base md:text-2xl font-bold text-gray-800 mb-4">Copywright &copy; {new Date().getFullYear()} Osmakhan</p>
                    </div>
                  
            </div>
        </div>
    )
}
export default Footer;