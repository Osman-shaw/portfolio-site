import Webdev from "../assets/skills/Webdev.jpeg";
import DataAnalytics  from "../assets/skills/Dataguy.png";
import ForexTrader from "../assets/skills/Forex.jpeg";
import Wordpress from '../assets/skills/wordpress.png'



const Service =()=> {
    
    return(
        <div className="">
            <div className="pt-3">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-300 text-center mb-6">Services</h2>
            </div>
             <div className="container mx-auto px-4 py-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg duration-300 overflow-hidden flex flex-col">
            <img
                src={Webdev}
                alt=""
                className="w-full h-48 object-contain"
            />
            <div className="p-6 flex-grow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Web Developer
            </h3>
             <p className="text-gray-600 dark:text-gray-300 text-sm">
              I thrive on solving problems and designing intuitive software architectures. I am available for any kind of job opportunity that suits my
               skills and interests.
            </p>
         </div>
        </div>
         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg duration-300 overflow-hidden flex flex-col">
         <img
            src={DataAnalytics}
            alt="Card 2"
            className="w-full h-48 object-contain"
        />
            <div className="p-6 flex-grow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
             Data Analytics
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
                As a data analyst, my primary role is to collect, process, and analyze large sets of data to extract valuable insights that can inform decision-making within an organization
            </p>
       </div>

      </div>
     <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg duration-300 overflow-hidden flex flex-col">
      <img
        src={ForexTrader}
        alt="Card 3"
        className="w-full h-48 object-contain"
      />
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Forex & Stock Trader
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          I specialize in analyzing currency pairs, stocks and executing strategic trades to make profitable return on price Actions
        </p>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg duration-300 overflow-hidden flex flex-col">
      <img
        src={Wordpress}
        alt=""
        className="w-full h-48 object-contain"
      />
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Wordpress Freelancer
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
         A WordPress Freelancer, skilled in designing and developing digital solutions for clients.
        </p>
      </div>
      </div>
     </div>
    </div>
    </div>
    )
}
export default Service;