//import osman from '../assets/osman.jpg'
import { Link } from "react-router";
import khan from '../assets/khan.jpeg'
import DownloadIcon from '@mui/icons-material/Download';
import ContactMailIcon from '@mui/icons-material/ContactMail';


const Home =()=> {

    const resumeUrl="https://drive.google.com/file/d/1GC9ilfuKrZu3ilIJCunn0mPCGPRQOWgC/view";

    const handleDownload =()=> {
    // Optional: Add analytics tracking or other logic here
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf'; // Suggests a filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    }

    
    return(
        <div className="m-4 grid gap-4 sm:grid-cols-2 pt-5">
            <div className="min-h-[100px] bg-indigo-980 shadow ml-5">
                    <div className="mb-6">
                        <img className="w-48 h-48 rounded-full object-cover" src={khan} alt="icon"/>
                    </div>
                    <div className="pt-3">
                        <span className="text-lg md:text-3xl font-bold text-gray-800 mb-4">Osman Shaw</span>
                        <p className="">A curious developer who excel in solving business problems and <br/>  have ability to design intuitive software architectures.</p>
                    </div>

            </div>
             <div className="min-h-[100px] rounded-lg bg-indigo-980 shadow">
                <div className="px-4">
                    <h1 className="text-2xl md:text-3xl font-semibold text-yellow-750 mb-4 pt-3">Full Stack Developer</h1>
                      <p className="text-lg text-white-600">
                        building eye-catching web and mobile applications.<br/>
                        Strong problem-solving skills and ability to understand <br/>
                        and develop software for enterprises.Able to architect, <br/>
                        enhance and recommend software designs, deliver high-quality work, <br/>
                        and stay current with industry tools and technologies. 
                    </p>
                     <div className="flex flex-col md:flex-row gap-4 mt-6 w-full pt-3 ">
                        <Link to="/contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
                           <button 
                                className="bg-blue-600 text-white px-6 py-3 rounded-full  hover:bg-blue-700 transition w-full md:w-auto">
                                Contact Me
                                <ContactMailIcon className='ml-2' />
                                </button>
                                </Link>     
                                <button 
                                 onClick={handleDownload}
                                 className="bg-green-600 text-white px-6 py-3 rounded-full  hover:bg-green-700 transition w-full md:w-auto" 
                                 aria-label="Download resume PDF"
                                 >
                                 Get Resume
                                <DownloadIcon />
                            </button>
                 </div>
                </div>
                 
            </div>
        </div>
    )
}
export default Home;