import Link from '../Components/Link';
import { TbTrafficCone } from 'react-icons/tb';

import AgeCalculatorImg from '../images/ageCalc.JPG';
import ScatterEffect from '../images/scatter.JPG';
import TipSplitter from '../images/splitter.JPG';

const projects = [
    {
        title: "Scatter Intro Effect",
        description: "DOM element manipulation and CSS animation",
        image: ScatterEffect,
        path: "/scatter-css-page",
    },
    {
        title: "Age Calculator",
        description: "Date logic, form validation, and real-time calculation",
        image: AgeCalculatorImg,
        path: "/age-calculator",
    },
    {
        title: "Tip Splitter",
        description: "State management and real-time calculation",
        image: TipSplitter,
        path: "/tip-splitter",
    },
    {
        title: "Coming Soon",
        description: "More side projects in the works",
        image: null,
        path: "",
    },
];

function ProjectCard({ title, description, image, path }) {
    const inner = (
        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-transparent hover:border-[#F58426] transition-all duration-300 flex flex-col h-full">
            <div className="h-44 overflow-hidden bg-[#E8EDF2] flex-shrink-0">
                {image
                    ? <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
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

    if (path) {
        return <Link to={path} className="no-underline h-full">{inner}</Link>;
    }
    return <div className="h-full">{inner}</div>;
}

function PersonalProjectPage() {
    return (
        <div className="py-[4rem] px-[2rem]">
            <h1 className="mb-[2rem] text-center font-bold text-[#F58426] uppercase tracking-widest">Personal Side Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[70rem] mx-auto">
                {projects.map((p) => (
                    <ProjectCard key={p.title} {...p} />
                ))}
            </div>
        </div>
    );
}
export default PersonalProjectPage;