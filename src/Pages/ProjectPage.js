import ProjectSection from '../Components/ProjectSection';
import { professionalProjects } from '../constants/projects';

function ProjectPage() {
    return (
        <div className="px-5 py-16">
            <ProjectSection
                label={`${professionalProjects.length} Selected Projects`}
                projects={professionalProjects}
            />
        </div>
    );
}
export default ProjectPage;
