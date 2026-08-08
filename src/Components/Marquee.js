function Marquee({ items }) {
    const loop = [...items, ...items];

    return (
        <div className="w-full bg-butter border-y-2 border-ink overflow-hidden py-3">
            <div className="flex w-max animate-marquee">
                {loop.map((item, index) => (
                    <span
                        key={`${item}-${index}`}
                        className="flex items-center gap-6 px-6 font-display text-lg uppercase tracking-wide whitespace-nowrap"
                    >
                        {item}
                        <span className="text-accent">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
export default Marquee;
