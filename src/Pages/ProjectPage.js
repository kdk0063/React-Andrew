import Link from '../Components/Link';
import Panel from '../Components/Panel';
import BeonCarrierImage from '../images/beoncarrier.JPG';
import KidianImage from '../images/kidian.JPG';
import BableDabbleImage from '../images/babelDabble.JPG'

function ProjectPage() {
    return (
        <>
            <h1 className="mb-[2rem] text-center font-bold text-[#5c8d89]">Professional Projects:</h1>
            <div className="min-h-[85rem] pl-[5rem] pr-[5rem] max-w-[70rem] ml-auto mr-auto">
                <Link to={'/beonCarrierProject'} className="no-underline">
                    <Panel className="group hover:shadow-lg hover:bg-[#FBFBFB]">
                        <div className="flex flex-wrap w-[90%] ml-auto mr-auto">    
                            <div>
                                <img className="w-full h-auto w-[20rem] md:rounded-none md:rounded-s-lg" src={BeonCarrierImage} alt="" />
                            </div>                    
                            <div className="flex flex-col self-center mr-auto ml-auto mt-5">
                                <h5 className="mb-2 text-2xl font-bold text-black group-hover:text-[#5c8d89] underline decoration-2">Beon Carrier</h5>
                                <p className="mb-3 text-black group-hover:text-[#5c8d89] decoration-[none]">Logistics Web Service Application</p>
                            </div>      
                        </div>            
                    </Panel>
                </Link>


                <Link className="no-underline" to={'/kidianProject'} >
                    <Panel className="group hover:shadow-lg hover:bg-[#FBFBFB] mt-[8rem]">
                        <div className="flex flex-wrap-reverse w-[90%] ml-auto mr-auto">  
                            <div className="flex flex-col self-center mr-auto ml-auto mt-5">
                                <h5 className="mb-2 text-2xl font-bold text-black group-hover:text-[#5c8d89] underline decoration-2">Kidian</h5>
                                <p className="mb-3 text-black group-hover:text-[#5c8d89]">Marketplace app for parties and events</p>
                            </div>      
                            <div>
                                <img className="w-full h-auto w-[20rem] md:rounded-none md:rounded-s-lg" src={KidianImage} alt="" />
                            </div>                    
                        </div>            
                    </Panel>
                </Link>     

                <Link className="no-underline" to={'/kidianProject'} >
                    <Panel className="group hover:shadow-lg hover:bg-[#FBFBFB] mt-[8rem]">
                        <div className="flex flex-wrap w-[90%] ml-auto mr-auto">    
                            <div>
                                <img className="w-full h-auto w-[20rem] md:rounded-none md:rounded-s-lg" src={BableDabbleImage} alt="" />
                            </div>                    
                            <div className="flex flex-col self-center mr-auto ml-auto  mt-5">
                                <h5 className="mb-2 text-2xl font-bold text-black group-hover:text-[#5c8d89] underline decoration-2">Babel Dabble</h5>
                                <p className="mb-3 text-black group-hover:text-[#5c8d89]">International Competitive Calligraphy</p>
                            </div>      
                        </div>            
                    </Panel>
                </Link>    

            </div>  
        </>              
    )
};
export default ProjectPage