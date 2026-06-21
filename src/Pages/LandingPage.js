import Introduction from '../Components/Introduction';
import ProjectPage from './ProjectPage';
import Card from '../Components/Card';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import AgeCalculatorImg from '../images/ageCalc.JPG';
import ScatterEffect from '../images/scatter.JPG';
import TipSplitter from '../images/splitter.JPG';

const sideProjects = [
    {
        title: "Scatter Intro Effect",
        description: "DOM element manipulation and styling",
        imageUrl: ScatterEffect,
        path: "/scatter-css-page"
    },
    {
        title: "Age Calculator",
        description: "Date logic calculation and form validation",
        imageUrl: AgeCalculatorImg,
        path: "/age-calculator"
    },
    {
        title: "Tip Splitter",
        description: "State management and real-time calculation",
        imageUrl: TipSplitter,
        path: "/tip-splitter"
    },
    {
        title: "Grandstands",
        description: "F1 fan website — race schedules, standings, and more",
        imageUrl: null,
        path: ""
    },
    {
        title: "LightWeight!",
        description: "Workout tracking app — log sets, track progress, stay consistent",
        imageUrl: null,
        path: ""
    },
];

function LandingPage() {
    const handleContactClick = (type) => {
        if (type === 'mail') return (window.location.href = 'mailto:kdk0063@gmail.com');
        if (type === 'github') return window.open('https://github.com/kdk0063', '_blank').focus();
        return window.open('https://www.linkedin.com/in/andrewkyukim', '_blank').focus();
    };

    return (
        <>
            <section id="about" className="w-full bg-white">
                <Introduction />
            </section>

            <section id="work" className="w-full bg-[#EBF4FF]">
                <ProjectPage />
            </section>

            <section id="projects" className="w-full bg-white py-[4rem] px-[2rem]">
                <h1 className="mb-[2rem] text-center font-bold text-[#F58426] uppercase tracking-widest">Personal Projects</h1>
                <div className="flex flex-wrap justify-center max-w-[70rem] mx-auto gap-4">
                    {sideProjects.map((p) => (
                        <Card
                            key={p.title}
                            imageUrl={p.imageUrl}
                            title={p.title}
                            description={p.description}
                            link={p.path}
                        />
                    ))}
                </div>
            </section>

            <section id="contact" className="w-full bg-[#003F7F] py-[6rem] flex flex-col items-center gap-6">
                <h1 className="font-bold text-[#F58426] uppercase tracking-widest">Get In Touch</h1>
                <p className="text-white/60 text-sm">Currently open to new opportunities — feel free to reach out.</p>
                <div className="flex gap-6 mt-2">
                    <MdOutlineMail
                        onClick={() => handleContactClick('mail')}
                        className="text-4xl cursor-pointer text-white hover:text-[#F58426] transition-colors duration-200"
                    />
                    <FaGithub
                        onClick={() => handleContactClick('github')}
                        className="text-4xl cursor-pointer text-white hover:text-[#F58426] transition-colors duration-200"
                    />
                    <FaLinkedin
                        onClick={() => handleContactClick('linkedin')}
                        className="text-4xl cursor-pointer text-white hover:text-[#F58426] transition-colors duration-200"
                    />
                </div>
            </section>
        </>
    );
}
export default LandingPage;
