import ProjectSection from '../Components/ProjectSection';
import { personalProjects } from '../constants/projects';

function PersonalProjectPage() {
    return (
        <div className="px-5 py-16">
            <ProjectSection
                label={`${personalProjects.length} Personal Projects`}
                projects={personalProjects}
            />
        </div>
    );
}
export default PersonalProjectPage;
