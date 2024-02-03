import KidianImage from '../images/kidian.JPG';
import KidianImag2 from '../images/kidian2.JPG';
import * as KidianSummary from '../constants/KidianSummary';

function KidianPage() {
    return (
        <div className="p-[5rem] h-full">
            <div className="text-3xl font-bold text-[#3CA9FF]">
                Kidian
            </div>
            <h1>
                Perfect Party for your Kids.
            </h1>

            <div className="text-xl font-bold mt-8">Role</div>
            <div className="text-lg font-bold">Frontend Developer / Contract</div>
            <ul>
                <li>Build, Maintain and expand ReactJS front end.</li>
                <li>Participate in UI/UX design process.</li>
            </ul>

            <div className="text-xl font-bold mt-5">Tools</div>
            <ul>
                <li>ReactJS</li>
                <li>ContextAPI</li>
                <li>Figma</li>
            </ul>

            <div className="text-xl font-bold mt-5">Duration</div>
            <div>04/2018 - 01/2019</div>

            <div className="flex flex-wrap mt-8 p-[2rem] w-full">
                <div className="md:w-1/2 sm:w-full xs:w-full">
                    <img className="rounded-t-lg h-auto w-[30rem]" src={KidianImage} alt="" />
                </div>

                <div className="md:w-1/2 sm:w-full xs:w-full sm:pl-4 mt-5">
                    <h2 className="text-[#3CA9FF] font-bold">PROJECT DESCRIPTION</h2>

                    <div className="mb-4 text-base">
                        {KidianSummary.KidianSummary}
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="flex-1 p-4 max-w-2xl aspect-[16/9] mb-[5rem] mt-[3rem] ">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/9ksmDke-DOw?si=tDepJYjFt7yZCujf"
                        title="kidianYoutube"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>

            <div className="flex flex-col max-w-2xl">
                <h2 className="text-[#3CA9FF] font-bold">USER INTERFACE</h2>

                <div className="mb-4 text-base">
                    {KidianSummary.KidianSummary2}
                </div>
            </div>

            <div className="flex justify-center">
                <img className="rounded-t-lg h-auto w-[60rem]" src={KidianImag2} alt="" />
            </div>
        </div>
    )
}
export default KidianPage;