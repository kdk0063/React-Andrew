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
        <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-[200px] bg-[#003F7F] px-8 py-10 z-40">
            <h1 className="text-3xl font-bold text-[#F58426] mb-16">AK.</h1>
            <nav className="flex flex-col gap-8">
                {NAV_ITEMS.map(({ label, id }) => (
                    <button
                        key={id}
                        onClick={() => handleClick(id)}
                        className={`text-left text-sm font-medium transition-all duration-200 pl-3 ${
                            activeSection === id
                                ? 'text-[#F58426] border-l-2 border-[#F58426]'
                                : 'text-white/50 hover:text-white border-l-2 border-transparent'
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </nav>
        </aside>
    );
}
export default PortfolioSidebar;
