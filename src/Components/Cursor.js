import { useEffect, useRef } from 'react';

function Cursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        if (!window.matchMedia('(pointer: fine)').matches) return;

        const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const ring = { x: target.x, y: target.y };
        let scale = 1;
        let targetScale = 1;
        let frame;

        const handleMove = (event) => {
            target.x = event.clientX;
            target.y = event.clientY;
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
            }
        };

        const handleOver = (event) => {
            const interactive = event.target.closest('a, button, [data-cursor-grow]');
            targetScale = interactive ? 2.2 : 1;
            ringRef.current?.classList.toggle('bg-accent/20', Boolean(interactive));
        };

        const tick = () => {
            ring.x += (target.x - ring.x) * 0.18;
            ring.y += (target.y - ring.y) * 0.18;
            scale += (targetScale - scale) * 0.18;
            if (ringRef.current) {
                ringRef.current.style.transform =
                    `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${scale})`;
            }
            frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseover', handleOver);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseover', handleOver);
        };
    }, []);

    return (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-[70]">
            <div ref={dotRef} className="absolute top-0 left-0 w-2 h-2 rounded-full bg-accent" />
            <div
                ref={ringRef}
                className="absolute top-0 left-0 w-8 h-8 rounded-full border border-accent transition-colors duration-200"
            />
        </div>
    );
}
export default Cursor;
