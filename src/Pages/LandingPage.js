import Introduction from '../Components/Introduction';
import ProjectSection from '../Components/ProjectSection';
import Reveal from '../Components/Reveal';
import { professionalProjects, personalProjects } from '../constants/projects';

function LandingPage() {
    return (
        <>
            <section id="about">
                <Introduction />
            </section>

            <section id="work" className="px-5 pb-24">
                <Reveal>
                    <ProjectSection
                        label={`${professionalProjects.length} Selected Projects`}
                        projects={professionalProjects}
                    />
                </Reveal>
            </section>

            <section id="projects" className="px-5 pb-32">
                <Reveal>
                    <ProjectSection
                        label={`${personalProjects.length} Personal Projects`}
                        projects={personalProjects}
                    />
                </Reveal>
            </section>

            <section id="contact" className="px-5 pb-24">
                <div className="border-t border-ink/10 pt-10 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                    <p className="text-[20px] text-ink/70 max-w-[26rem] leading-[1.5]">
                        Currently open to new opportunities.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="mailto:kdk0063@gmail.com"
                            className="text-[13px] text-muted hover:text-ink transition-colors duration-200"
                        >
                            Email
                        </a>
                        <a
                            href="https://github.com/kdk0063"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[13px] text-muted hover:text-ink transition-colors duration-200"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/andrewkyukim"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[13px] text-muted hover:text-ink transition-colors duration-200"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
export default LandingPage;
