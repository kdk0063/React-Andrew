import { useState } from 'react';

import ArrowButton from '../images/svg/icon-arrow.svg'

import './AgeCalculator.css';

function AgeCalculator() {
    const [inputDate, setInputDate] = useState('');
    const [inputMonth, setInputMonth] = useState('');
    const [inputYear, setInputYear] = useState('');
    const [ageDifference, setAgeDifference] = useState([]);

    const date = new Date();

    const handleAgeCalculate = (e) => {
        e.preventDefault();

        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        const dDate = Math.abs(dd - inputDate);
        const dMonth = Math.abs(mm - inputMonth);
        const dYear = yyyy - inputYear;

        setAgeDifference([dDate, dMonth, dYear]);
    }

    return (
        <div className="dateCounterPage">
            <div className="inputCard novalidate" >
                <div className="input-container flex flex-wrap gap-4 lg:gap-8 md:mt-6 w-12/12 lg:w-9/12 md:justify-center lg:justify-start">
                    <div className="inputWraper">
                        <label className="inputLable">DAY</label>
                        <input
                            type="text" id="day" placeholder="DD"
                            className="inputStyle"
                            max="31"
                            onChange={e => setInputDate(e.target.value)} />
                        <span className="validation" id="ErrorDay"></span>
                    </div>
                    <div className="inputWraper">
                        <label className="inputLable">MONTH</label>
                        <input
                            type="text" id="month" placeholder="MM"
                            className="inputStyle"
                            max="12"
                            onChange={e => setInputMonth(e.target.value)} />
                        <span className="validation" id="ErrorMonth"></span>
                    </div>
                    <div className="inputWraper">
                        <label className="inputLable">YEAR</label>
                        <input
                            type="text" id="year" placeholder="YYYY"
                            className="inputStyle"
                            max={new Date().getFullYear()}
                            onChange={e => setInputYear(e.target.value)} />
                        <span className="validation" id="ErrorYear"></span>
                    </div>
                </div>

                <div className="special relative flex items-center my-12 sm:my-16 lg:my-0">
                    <hr className="border-none h-px bg-gray-300 w-full lg:flex-grow" />
                    <button
                        className="absolute left-1/2 transform -translate-x-1/2 bg-transparent lg:relative lg:left-auto lg:transform-none" onClick={e => handleAgeCalculate(e)}>
                        <img src={ArrowButton} alt="click button"
                            className="w-14 sm:w-20 lg:w-32 submit-arrow bg-[#8751fa] rounded-full text-white p-4 sm:p-6 lg:p-7 cursor-pointer transition duration-500 ease-in-out transform hover:bg-black hover:shadow-lg lg:static"></img>
                    </button>
                </div>

                <div class="age-display text-left md:p-0  lg:p-2 flex flex-col items-start gap-1">
                    <span class="text-f text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
                        <span class="numbers-f text-[#8751fa] text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl"
                            id="years">{ageDifference[2] || "--"}</span>
                        years
                    </span>
                    <span class="text-f text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
                        <span class="numbers-f text-[#8751fa] text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl"
                            id="months">{ageDifference[1] || "--"}</span> months
                    </span>
                    <span class="text-f text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
                        <span class="numbers-f text-[#8751fa]  text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl"
                            id="days">{ageDifference[0] || "--"}</span>
                        days
                    </span>
                </div>



            </div>
        </div>
    )
}
export default AgeCalculator;