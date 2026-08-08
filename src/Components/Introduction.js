import { useTypewriter, Cursor as TypeCursor } from 'react-simple-typewriter';
import * as AboutMe from '../constants/AboutMe';
import { GoChevronDown } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import './Introduction.css';


function Introduction() {
    const [words] = useTypewriter({
        words: ["Fullstack Developer.", "React Wizard.", "UX Enthusiast.", "Collaborator."],
        loop: {},
    });

    const handleContactClick = (props) => {
        const mailto = "mailto:kdk0063@gmail.com";

        switch (props) {
            case 'mail':
                return window.location.href = mailto;
            case 'github':
                return window.open('https://github.com/kdk0063', '_blank').focus();
            default:
                return window.open('https://www.linkedin.com/in/andrewkyukim', '_blank').focus();
        };
    };

    const handleScroll = () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative min-h-screen flex flex-col justify-center px-4 md:px-10 pt-24 pb-32">
            {/* Name — one line, aligned with the content column */}
            <h1 className="font-display leading-[0.9] text-ink text-[8vw] md:text-[3.5vw] md:pl-[18vw]">
                Andrew <span className="text-accent">Kim</span>
            </h1>

            {/* The role line is the hero */}
            <div className="mt-6 md:mt-8 md:pl-[18vw]">
                <div className="text-[8vw] md:text-[4vw] leading-[1.15]">
                    I'm a <span className="relative inline-block whitespace-nowrap font-semibold text-ink">
                        <span className="absolute inset-x-0 bottom-1 h-4 md:h-6 bg-butter" />
                        <span className="relative">{words}</span>
                    </span>
                    <TypeCursor cursorColor="#0047AB" />
                </div>

                <div className="mt-8 md:mt-10 flex flex-col md:flex-row gap-8 md:gap-16">
                    <p className="flex-1 max-w-[34rem] text-base text-ink/60">
                        {AboutMe.introA}
                    </p>

                    <div className="flex md:flex-col items-center gap-5 md:pt-1">
                        <MdOutlineMail
                            onClick={() => handleContactClick('mail')}
                            className="text-3xl cursor-pointer text-ink hover:text-accent transition-colors duration-200"
                        />
                        <FaGithub
                            onClick={() => handleContactClick('github')}
                            className="text-3xl cursor-pointer text-ink hover:text-accent transition-colors duration-200"
                        />
                        <FaLinkedin
                            onClick={() => handleContactClick('linkedin')}
                            className="text-3xl cursor-pointer text-ink hover:text-accent transition-colors duration-200"
                        />
                    </div>
                </div>
            </div>

            {/* Scroll chevron */}
            <div className="absolute inset-x-0 bottom-8 flex justify-center cursor-pointer">
                <GoChevronDown onClick={handleScroll} className="text-4xl blinking-icon text-accent" />
            </div>
        </div>
    )
};
export default Introduction;
