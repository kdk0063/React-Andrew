import React, { useEffect, useRef } from 'react';
import './Intro.css';

const Intro = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const acceptRef = (elem) => {
        const liElements = elem.querySelectorAll('li');

        //loop thorugh each ref element which is li element and add random initial position
        liElements.forEach((li, index) => {
        const px = Math.random() * 250 - 125;
        const py = Math.random() * 250 - 125;
        li.style.transform = `translate(${px}px, ${py}px)`;
        });

        //add predefined css class which is 'start-fly-in
        setTimeout(function () {
        elem.classList.add('start-fly-in');
        }, 0);

        //blinking text css
        // document.querySelector(".blinking-text");

        // setTimeout(() => blinker(), 3500);

        // const blinker = () => {
        //     const blinkingText = document.querySelector('.blinking-text');
        //     if (blinkingText) {
        //         blinkingText.style.display = blinkingText.style.display === 'none' 
        //             ? 'block' 
        //             : 'none'
        //         }
        // };
    
        // setInterval(blinker, 2000);
    };

    if (listRef.current) {
      acceptRef(listRef.current);
    }
  }, []);

  return (
    <div>
        <div className='bodyclick'>
          <ul ref={listRef} className='fly-in-text'>
            <li>S</li>
            <li>C</li>
            <li>A</li>
            <li>T</li>
            <li>T</li>
            <li>E</li>
            <li>R</li>            
          </ul>

            <div className='blinking-text'>
                Click To to refresh
            </div>
        </div>
    </div>
  );
};

export default Intro;