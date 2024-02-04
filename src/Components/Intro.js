import { useRef } from 'react';
import Link from './Link';

import './intro.css'

function Intro() {
    const elemRef = useRef(null);

    const acceptref = (elem) => {
        elemRef.find('li').each((i, li) => {
            const px = Math.random() * 250 - 125;
            const py = Math.random() * 250 - 125;
            //                             back tags
            elemRef.css('transform', `translate(${px}px, ${py}px)`)
        });
        setTimeout(function () {
            elemRef.addClass('start-fly-in')
        }, 0);
    };

    return (
        <div>
            <Link to='/home'>
                <div className='bodyclick'>
                    <ul ref={acceptref} className='fly-in-text'>
                        <li>G</li>
                        <li>R</li>
                        <li>E</li>
                        <li>A</li>
                        <li>T</li>
                        <li>N</li>
                        <li>E</li>
                        <li>S</li>
                        <li>S</li>
                    </ul>

                    <div className='blinking-text click'>Click To Enter</div>
                </div>
            </Link>
        </div>
    )
}
export default Intro;