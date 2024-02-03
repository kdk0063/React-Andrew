import React from 'react'
import {useTypewriter, Cursor } from 'react-simple-typewriter';
import * as AboutMe from '../constants/AboutMe';
import { GoChevronDown } from "react-icons/go";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


function Introduction() {
    const [words] = useTypewriter({
        words: ["Fullstack Developer.", "UX Enthusiast.", "Collaborator."],
        loop: {},
    });

    return (
        <>
            <div className="h-screen lg:pt-[25%] md:pt-[35%] sm:pt-[40%] xs:pt-[45%] flex justify-end">
                <div className="lg:pr-[10rem] md:pr-[10rem] xs:pr-[5rem]">
                    <h1 className="text-[3rem]">Hi!, I'm Andrew,</h1>
                    <div className="mt-12 text-[2rem]">
                        I'm a <span className='ml-1 text-[#5c8d89]'>{words}</span>
                        <Cursor cursorColor='#a7d7c5' />
                    </div>
                
                    <p className="lg:w-[36rem] md:w-[30rem] xs:w-[25rem] mt-4 text-[1.25rem] text-wrap">
                        { AboutMe.introA }
                    </p>
                    <div className="flex items-start space-x-4 mt-5">
                        <MdOutlineMail className="text-3xl"/> <FaGithub className="text-3xl"/> <FaLinkedin className="text-3xl"/>
                    </div> 
                </div>     

                <div className='grid justify-items-center absolute inset-x-0 bottom-0 pb-20'>
                    <GoChevronDown  className="text-4xl"/>
                </div>
            </div>
        </>
    )
};
export default Introduction;