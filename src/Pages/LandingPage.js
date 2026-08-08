import Introduction from '../Components/Introduction';
import ProjectPage from './ProjectPage';
import ProjectRow from '../Components/ProjectRow';
import Marquee from '../Components/Marquee';
import Reveal from '../Components/Reveal';
import { personalProjects } from '../constants/projects';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const MARQUEE_ITEMS = [
    'React', 'JavaScript', '.NET Core', 'SQL', 'Vite', 'Tailwind', 'Supabase', 'Three.js',
];

function SectionLabel({ children }) {
    return (
        <span className="hidden lg:block absolute left-2 top-24 text-[0.65rem] uppercase tracking-[0.3em] text-ink/35 [writing-mode:vertical-rl]">
            {children}
        </span>
    );
}

function LandingPage() {
    const handleContactClick = (type) => {
        if (type === 'mail') return (window.location.href = 'mailto:kdk0063@gmail.com');
        if (type === 'github') return window.open('https://github.com/kdk0063', '_blank').focus();
        return window.open('https://www.linkedin.com/in/andrewkyukim', '_blank').focus();
    };

    return (
        <>
            <section id="about" className="relative w-full">
                <SectionLabel>About</SectionLabel>
                <Introduction />
            </section>

            <Marquee items={MARQUEE_ITEMS} />

            <section id="work" className="relative w-full">
                <SectionLabel>Work</SectionLabel>
                <Reveal>
                    <ProjectPage />
                </Reveal>
            </section>

            <section id="projects" className="relative w-full py-[5rem]">
                <SectionLabel>Projects</SectionLabel>
                <Reveal>
                    <div className="px-4 md:px-10 mb-10 flex items-end justify-between gap-4">
                        <h1 className="text-3xl md:text-5xl">Personal Projects</h1>
                        <span className="text-xs uppercase tracking-widest text-ink/40 shrink-0">
                            Built for fun
                        </span>
                    </div>
                    <div className="border-b border-ink/15">
                        {personalProjects.map((project, index) => (
                            <ProjectRow key={project.title} index={index} {...project} />
                        ))}
                    </div>
                </Reveal>
            </section>

            <section id="contact" className="relative w-full bg-accent px-4 md:px-10 py-[7rem]">
                <Reveal>
                    <h1 className="font-display text-white text-[13vw] md:text-[9vw] leading-[0.85]">
                        Let's<br />talk.
                    </h1>
                    <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <p className="text-white/70 max-w-[26rem]">
                            Currently open to new opportunities — feel free to reach out.
                        </p>
                        <div className="flex gap-6">
                            <MdOutlineMail
                                onClick={() => handleContactClick('mail')}
                                className="text-4xl cursor-pointer text-white hover:text-butter transition-colors duration-200"
                            />
                            <FaGithub
                                onClick={() => handleContactClick('github')}
                                className="text-4xl cursor-pointer text-white hover:text-butter transition-colors duration-200"
                            />
                            <FaLinkedin
                                onClick={() => handleContactClick('linkedin')}
                                className="text-4xl cursor-pointer text-white hover:text-butter transition-colors duration-200"
                            />
                        </div>
                    </div>
                </Reveal>
            </section>
        </>
    );
}
export default LandingPage;
