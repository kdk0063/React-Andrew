import ProjectRow from '../Components/ProjectRow';
import { personalProjects } from '../constants/projects';

function PersonalProjectPage() {
    return (
        <div className="py-[5rem]">
            <div className="px-4 md:px-10 mb-10">
                <h1 className="text-3xl md:text-5xl">Personal Side Projects</h1>
            </div>
            <div className="border-b border-ink/15">
                {personalProjects.map((project, index) => (
                    <ProjectRow key={project.title} index={index} {...project} />
                ))}
            </div>
        </div>
    );
}
export default PersonalProjectPage;
