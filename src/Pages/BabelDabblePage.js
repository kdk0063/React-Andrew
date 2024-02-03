import BableDabbleImage from '../images/bableDabble.JPG';
import * as BableDabbleSummary from '../constants/BableDabbleSummary';

function BableDabblePage() {
    return (
        <div className="p-[5rem] h-full">
            <div className="text-3xl font-bold text-[#44507C]">
                Bable Dabble
            </div>
            <h1>
                Global competitive calligraphy platform.
            </h1>

            <div className="text-xl font-bold mt-8">Role</div>
            <div className="text-lg font-bold">Junior Fullstack Developer / Contract</div>
            <ul>
                <li>Contributed to every layer of full stack for developing web application.</li>
                <li>Communicated directly with product owner to create and manage wire frames of web application.</li>
                <li>Developed HTML client with combination of React and AngularJS using.</li>
                <li>Managed database via SQL Server using stored procedures and incorporated new JSON functionality to improve back-end performance.</li>
            </ul>

            <div className="text-xl font-bold mt-5">Tools</div>
            <ul>
                <li>ReactJS</li>
                <li>AngularJS</li>
                <li>ASP.Net Web API</li>
                <li>ADO .NET</li>
                <li>SQl</li>
            </ul>

            <div className="text-xl font-bold mt-5">Duration</div>
            <div>09/2017 - 03/2018</div>


            <div className="flex flex-wrap mt-8 p-[2rem] w-full">
                <div className="md:w-1/2 sm:w-full xs:w-full">
                    <img className="rounded-t-lg h-auto w-[30rem]" src={BableDabbleImage} alt="" />
                </div>

                <div className="md:w-1/2 sm:w-full xs:w-full sm:pl-4 mt-5">
                    <h2 className="text-[#3CA9FF] font-bold">PROJECT DESCRIPTION</h2>

                    <div className="mb-4 text-base">
                        {BableDabbleSummary.BableDabbleSummary}
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center">
                <div className="md:w-1/2 sm:w-full xs:w-full">
                    <div className="flex-1 p-4 max-w-2xl aspect-[16/9] mb-[5rem] mt-[3rem] ">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/U9hCPYpjdY0?si=Y0t78Mp-PbQvUv_n"
                            title="babledabbleYoutube"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>


                <div className="flex-1 p-4 max-w-2xl aspect-[16/9] mb-[5rem] mt-[3rem] ">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/azHo0YFKuuc?si=WCgNk35TrwfMJ6GX"
                        title="babledabbleYoutube2"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
};
export default BableDabblePage;