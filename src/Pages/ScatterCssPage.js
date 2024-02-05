import { useEffect, useRef } from 'react';
import './ScatterCssPage.css';

function ScatterCssPage() {
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
        };

        if (listRef.current) {
            acceptRef(listRef.current);
        }
    }, [listRef]);

    const reloadCurrent = () => {
        window.location.reload();
    }

    return (
        <div>
            <div>
                <ul ref={listRef} className='fly-in-text'>
                   <li>S</li>
                    <li>C</li>
                    <li>A</li>
                    <li>T</li>
                    <li>T</li>
                    <li>E</li>
                    <li>R</li>
                </ul>
            </div>
            
            <div className='blinking-text cursor-pointer' onClick={reloadCurrent}>
                Click To to refresh
            </div>
        </div>
    )
}
export default ScatterCssPage;