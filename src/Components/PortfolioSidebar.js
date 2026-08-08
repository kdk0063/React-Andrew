import { useState, useEffect } from 'react';

const NAV_ITEMS = [
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'work' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
];

function PortfolioSidebar() {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const observers = [];
        NAV_ITEMS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: '-40% 0px -60% 0px', threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const handleClick = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <aside className="hidden md:flex flex-col justify-between fixed left-0 top-0 h-screen w-[110px] px-6 py-8 z-40 border-r border-ink/10 bg-white">
            <h1 className="text-2xl text-accent">AK.</h1>

            <nav className="flex flex-col gap-5">
                {NAV_ITEMS.map(({ label, id }) => (
                    <button
                        key={id}
                        onClick={() => handleClick(id)}
                        className={`flex items-center gap-2 text-left text-xs uppercase tracking-widest transition-colors duration-200 ${
                            activeSection === id ? 'text-accent' : 'text-ink/35 hover:text-ink'
                        }`}
                    >
                        <span className={`h-px transition-all duration-300 ${
                            activeSection === id ? 'w-4 bg-accent' : 'w-2 bg-ink/25'
                        }`} />
                        {label}
                    </button>
                ))}
            </nav>

            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-ink/30">© {new Date().getFullYear()}</span>
        </aside>
    );
}
export default PortfolioSidebar;
