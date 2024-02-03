import BeonCarrierImage from '../images/beoncarrier.JPG';
import BeonCarrierImage3 from '../images/beoncarrier3.JPG';
import * as BeonCarrerSummary from '../constants/BeonCarrerSummary';

function BeonCarrierPage() {
    return(
        <div className="p-[5rem] h-full">   
            <div className="text-3xl font-bold">
                <span className="text-[#FF0000]">NTG</span> / <span className="text-[#FFEB00]">Beon</span> Carrier
            </div>
            <h1>
                Get moving with NTG.
            </h1>

            <div className="text-xl font-bold mt-8">Role</div>
            <div className="text-lg font-bold">Fullstack Developer</div>
            <ul>
                <li>Updates to SQL Server schema as needed.</li>
                <li>Interface with SQL Server via NHibernate.</li>
                <li>Build and Maintain .NET Core Web API for ReactJS front end.</li>
                <li>Maintain and expand ReactJS front end.</li>
            </ul>

            <div className="text-xl font-bold mt-5">Tools</div>
                <ul>
                    <li>ReactJS</li>
                    <li>.NET Core</li>
                    <li>SQL</li>
                </ul>
                    
            <div className="text-xl font-bold mt-5">Duration</div>
            <div>03/2019 - 01/2024</div>

            <div className="flex flex-wrap mt-8 p-[2rem] w-full">
                <div className="md:w-1/2 sm:w-full xs:w-full">
                    <img className="rounded-t-lg h-auto w-[35rem]" src={BeonCarrierImage} alt=""/>
                </div>

                <div className="md:w-1/3 sm:w-full xs:w-full sm:pl-4 mt-12">
                    <h2 className="text-black font-bold">PROJECT DESCRIPTION</h2>

                    <div className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        { BeonCarrerSummary.BeonCarrierSummary }
                    </div>
                </div>
            </div>    

            <div className="flex flex-wrap mt-8 p-[2rem] w-full">
                <div className="md:w-1/3 sm:w-full xs:w-full sm:pl-4 mt-12">
                    <h2 className="text-black font-bold">USER INTERFACE</h2>

                    <div className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        { BeonCarrerSummary.BeonCarrierSummary2 }
                    </div>
                </div>

                <div className="flex justify-center md:w-2/3 sm:w-full xs:w-full">
                    <img className="rounded-t-lg h-auto w-[35rem]" src={BeonCarrierImage3} alt=""/>
                </div>
            </div>       
            
            <div className="flex justify-center">
                <div className="flex-1 p-4 max-w-2xl aspect-[16/9] mb-[5rem] mt-[3rem] ">
                    <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/pTsTZg_dI_s?si=DUUzDVN5r6TcD8fJ&amp;controls=0" 
                        title="beonCarrierYoutube" 
                        allowFullScreen>                
                    </iframe>
                </div>
            </div> 
        </div>
    )
};
export default BeonCarrierPage;