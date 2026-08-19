import Link from './Link';

function RowBody({ title, description, path }) {
    return (
        <div className="group flex items-baseline justify-between gap-6 border-t border-ink/10 py-4">
            <p className={`text-[13px] shrink-0 transition-colors duration-200 ${
                path ? 'text-ink group-hover:text-accent' : 'text-muted'
            }`}>
                {title}
            </p>
            <p className="text-[13px] text-muted text-right">{description}</p>
        </div>
    );
}

function ProjectIndex({ projects }) {
    if (!projects.length) return null;

    return (
        <div className="mt-5 border-b border-ink/10">
            {projects.map(({ title, description, path }) => {
                const body = <RowBody title={title} description={description} path={path} />;
                return path
                    ? <Link key={title} to={path} className="block">{body}</Link>
                    : <div key={title}>{body}</div>;
            })}
        </div>
    );
}
export default ProjectIndex;
