import Introduction from '../Components/Introduction';
import ProjectPage from './ProjectPage';
import Link from '../Components/Link';
import { TbTrafficCone } from 'react-icons/tb';
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
        path: "/age-calculator",
        imagePosition: "top"
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

function ProjectCard({ title, description, image, path, imagePosition = "center" }) {
    const inner = (
        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-transparent hover:border-[#F58426] transition-all duration-300 flex flex-col h-full">
            <div className="h-44 overflow-hidden bg-[#E8EDF2] flex-shrink-0">
                {image
                    ? <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" style={{ objectPosition: imagePosition }} />
                    : <div className="w-full h-full flex items-center justify-center gap-2 border-2 border-dashed border-[#F58426]/30">
                        <TbTrafficCone className="text-[#F58426]/60 text-lg" />
                        <span className="text-[#F58426]/60 font-bold tracking-widest uppercase text-xs">Coming Soon</span>
                        <TbTrafficCone className="text-[#F58426]/60 text-lg" />
                      </div>
                }
            </div>
            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg group-hover:text-[#F58426] transition-colors duration-200">{title}</h3>
                <p className="text-gray-500 text-sm mt-1 flex-1">{description}</p>
                <span className={`mt-4 self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                    path
                        ? 'bg-[#F58426]/10 text-[#F58426] group-hover:bg-[#F58426] group-hover:text-white'
                        : 'bg-gray-100 text-gray-400'
                } transition-colors duration-200`}>
                    {path ? 'View Project' : 'Coming Soon'}
                </span>
            </div>
        </div>
    );
    if (path) return <Link to={path} className="no-underline h-full">{inner}</Link>;
    return <div className="h-full">{inner}</div>;
}

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[70rem] mx-auto">
                    {sideProjects.map((p) => (
                        <ProjectCard key={p.title} title={p.title} description={p.description} image={p.imageUrl} path={p.path} imagePosition={p.imagePosition} />
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
