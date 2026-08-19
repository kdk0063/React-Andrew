import Link from './Link';

function TileBody({ title, description, image }) {
    return (
        <div className="group bg-card rounded-sm overflow-hidden">
            <div className="flex items-center justify-center px-8 md:px-16 py-16 md:py-24">
                <img
                    src={image}
                    alt={title}
                    className="w-full max-w-[26rem] rounded-md shadow-[0_18px_40px_-12px_rgba(0,0,0,0.28)] group-hover:-translate-y-1 transition-transform duration-500 ease-out"
                />
            </div>
            <div className="flex items-baseline justify-between gap-4 px-5 pb-5">
                <p className="text-[13px] text-ink">{title}</p>
                <p className="text-[13px] text-muted text-right">{description}</p>
            </div>
        </div>
    );
}

function ProjectTile({ title, description, image, path }) {
    const body = <TileBody title={title} description={description} image={image} />;

    if (path) {
        return <Link to={path} className="block">{body}</Link>;
    }
    return <div>{body}</div>;
}
export default ProjectTile;
