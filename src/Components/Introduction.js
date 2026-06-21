import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import * as AboutMe from '../constants/AboutMe';
import { GoChevronDown } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TbTrafficCone } from 'react-icons/tb';

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
        window.scrollTo({ top: 1000, behavior: "smooth" })
    }

    return (
        <div className="relative h-screen flex items-center px-[4rem] gap-12">
            {/* Left: intro text */}
            <div className="flex-1">
                <h1 className="text-[3rem] font-bold">Hi! I'm Andrew,</h1>
                <div className="mt-8 text-[2rem]">
                    I'm a <span className='ml-1 text-[#F58426] font-semibold'>{words}</span>
                    <Cursor cursorColor='#F58426' />
                </div>
                <p className="mt-4 text-[1.1rem] text-gray-600 max-w-[32rem]">
                    {AboutMe.introA}
                </p>
                <div className="flex items-center space-x-4 mt-6">
                    <MdOutlineMail
                        onClick={() => handleContactClick('mail')}
                        className="text-3xl cursor-pointer text-[#F58426] hover:text-[#006BB6] transition-colors duration-200"
                    />
                    <FaGithub
                        onClick={() => handleContactClick('github')}
                        className="text-3xl cursor-pointer text-[#F58426] hover:text-[#006BB6] transition-colors duration-200"
                    />
                    <FaLinkedin
                        onClick={() => handleContactClick('linkedin')}
                        className="text-3xl cursor-pointer text-[#F58426] hover:text-[#006BB6] transition-colors duration-200"
                    />
                </div>
            </div>

            {/* Right: portrait placeholder */}
            <div className="hidden md:flex flex-1 justify-center items-center">
                <div className="w-[280px] h-[360px] rounded-2xl bg-[#E8EDF2] border-2 border-dashed border-[#F58426]/30 flex flex-col items-center justify-center gap-3">
                    <TbTrafficCone className="text-[#F58426]/50 text-3xl" />
                    <span className="text-[#F58426]/50 font-bold tracking-widest uppercase text-xs">Photo Coming Soon</span>
                    <TbTrafficCone className="text-[#F58426]/50 text-3xl" />
                </div>
            </div>

            {/* Scroll chevron */}
            <div className='absolute inset-x-0 bottom-8 flex justify-center cursor-pointer'>
                <GoChevronDown onClick={handleScroll} className="text-4xl blinking-icon text-[#F58426]" />
            </div>
        </div>
    )
};
export default Introduction;
