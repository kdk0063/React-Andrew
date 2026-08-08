import Link from './Link';

function RowBody({ index, title, description, image, path }) {
    const isLive = Boolean(path);

    return (
        <div className="group relative border-t border-ink/15 overflow-hidden">
            {/* Cobalt sweep fill on hover */}
            {isLive && (
                <div className="absolute inset-0 bg-accent origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />
            )}

            <div className="relative flex items-center gap-6 px-4 md:px-10 py-7 md:py-10">
                <span className={`font-display text-sm md:text-base w-10 shrink-0 transition-colors duration-300 ${
                    isLive ? 'text-butter group-hover:text-white' : 'text-ink/25'
                }`}>
                    {String(index + 1).padStart(2, '0')}
                </span>

                <div className="flex-1 min-w-0">
                    <h3 className={`font-display text-3xl md:text-5xl lg:text-6xl leading-none transition-all duration-300 ${
                        isLive
                            ? 'text-ink group-hover:text-white group-hover:translate-x-3'
                            : 'text-ink/30'
                    }`}>
                        {title}
                    </h3>
                    <p className={`text-sm md:text-base mt-2 max-w-[38rem] transition-colors duration-300 ${
                        isLive ? 'text-ink/50 group-hover:text-white/70' : 'text-ink/25'
                    }`}>
                        {description}
                    </p>
                </div>

                {/* Hover thumbnail — only for projects that have artwork */}
                {image && (
                    <div className="hidden lg:block w-40 h-24 shrink-0 rounded-md overflow-hidden opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>
                )}

                <span className={`shrink-0 text-xs md:text-sm uppercase tracking-widest transition-colors duration-300 ${
                    isLive ? 'text-ink/40 group-hover:text-white' : 'text-ink/25'
                }`}>
                    {isLive ? 'View →' : 'In progress'}
                </span>
            </div>
        </div>
    );
}

function ProjectRow({ index, title, description, image, path }) {
    const body = <RowBody index={index} title={title} description={description} image={image} path={path} />;

    if (path) {
        return <Link to={path} className="block">{body}</Link>;
    }
    return <div>{body}</div>;
}
export default ProjectRow;
