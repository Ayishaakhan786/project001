
import { ImYoutube2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { ImGoogle } from "react-icons/im";
export default function ContactUs (){
    return(
        <div className="box bg-white p-6 sm:p-8 flex flex-col items-center sm:flex-row sm:justify-start">
            <div className="box1 w-full sm:w-1/2 text-center sm:text-left">
                <h1 className = "text-2xl font-bold text-center sm:text-left mb-4">Conatct Us</h1>
                <h1 className="text-xl italic text-black">Ayisha Khan</h1>
                <ImGoogle size={30} className="mr-3 text-red-600 flex items-center mt-4"/>
      <h1 className="text-black text-lg hover:underline"><a href="mailto:ayeshakhan228276@gmail.com">ayeshakhan228276@gmail.com</a></h1>
      <ImGithub size={30} className="flex items-center mt-4 mr-3 text-gray-800"/>
      <h1 className="text-black text-lg hover:underline"><a href="https://github.com/Ayishaakhan786">Ayishakhan786</a></h1>
      <ImLinkedin size={30} className="ml-3 mt-3 flex items-center mt-4 mr-3 text-blue-600"/>
      <h1 className="text-black text-lg hover:underline"><a href="https://www.linkedin.com/in/ayesha-khan-8103a7246/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BACltPS2BQTyWXxYwH4g0JA%3D%3D">Ayishakhan786</a></h1>
      <ImYoutube2 size={30} className="ml-3 mt-3 flex items-center mt-4 mr-3 text-red-500"/>
      <h1 className="text-black text-lg hover:underline"><a href="http://www.youtube.com/@Buggs_____________bunnyyy">http://www.youtube.com/@Buggs_____________bunnyyy</a></h1>
        </div> 
        </div>
    );
}