import ProjectTile from './ProjectTile';
import ProjectIndex from './ProjectIndex';

function ProjectSection({ label, projects }) {
    const tiled = projects.filter((p) => p.image);
    const listed = projects.filter((p) => !p.image);

    return (
        <div>
            <p className="font-serif italic text-[13px] tracking-[-0.5px] text-muted mb-3">
                {label}
            </p>

            {tiled.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {tiled.map((project) => (
                        <ProjectTile key={project.title} {...project} />
                    ))}
                </div>
            )}

            <ProjectIndex projects={listed} />
        </div>
    );
}
export default ProjectSection;
