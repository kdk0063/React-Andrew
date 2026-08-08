import ProjectRow from '../Components/ProjectRow';
import { professionalProjects } from '../constants/projects';

function ProjectPage() {
    return (
        <div className="py-[5rem]">
            <div className="px-4 md:px-10 mb-10 flex items-end justify-between gap-4">
                <h1 className="text-3xl md:text-5xl">Selected Work</h1>
                <span className="text-xs uppercase tracking-widest text-ink/40 shrink-0">
                    {professionalProjects.length} projects
                </span>
            </div>
            <div className="border-b border-ink/15">
                {professionalProjects.map((project, index) => (
                    <ProjectRow key={project.title} index={index} {...project} />
                ))}
            </div>
        </div>
    );
}
export default ProjectPage;
