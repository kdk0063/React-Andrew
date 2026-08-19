import { useTypewriter, Cursor as TypeCursor } from 'react-simple-typewriter';

function Introduction() {
    const [words] = useTypewriter({
        words: ["Fullstack Developer", "React Wizard", "UX Enthusiast", "Collaborator"],
        loop: {},
    });

    return (
        <div className="max-w-[30rem] mx-auto px-6 py-[8rem] md:py-[11rem] text-center">
            <p className="text-[20px] leading-[1.5] text-ink/70 md:whitespace-nowrap">
                Andrew Kim is a{' '}
                <span className="whitespace-nowrap text-accent">
                    {words}
                    <TypeCursor cursorColor="#0047AB" />
                </span>
            </p>

            <p className="mt-2 text-[20px] leading-[1.5] text-ink/70">
                He turns coffee into components, edge cases into tests, and
                “it works on my machine” into “it works on yours.”
            </p>
        </div>
    );
}
export default Introduction;
