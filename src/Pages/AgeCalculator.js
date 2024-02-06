import { useState } from 'react';

import ArrowButton from '../images/svg/icon-arrow.svg'

import './AgeCalculator.css';

function AgeCalculator() {
    const [inputDate, setInputDate] = useState('--');
    const [inputMonth, setInputMonth] = useState('--');
    const [inputYear, setInputYear] = useState('--');
    const [ageCalculate, setAgeCalculate] = useState([]);
    const [isDateValid, setIsDateValid] = useState(false);
    const [isMonthValid, setIsMonthValid] = useState(false);
    const [isYearValid, setIsYearValid] = useState(false);


    const date = new Date();

    const isValidDate = (inputDate) => {
        const isDate = parseInt(inputDate);
        return isDate >= 1 && isDate <= new Date(inputYear, inputMonth, 0).getDate();
    }

    const isValidMonth = (inputMonth) => {
        const isMonth = parseInt(inputMonth);
        return isMonth >= 1 && isMonth <= 12;
    }

    const isValidYear = (inputYear) => {
        const isYear = parseInt(inputYear);
        return isYear <= date.getFullYear();
    };

    const handleChange = (inputValue, pram) => {
        if(pram === 'date'){
            setIsDateValid(isValidDate(inputValue))
            setInputDate(inputValue)   
        };

        if(pram === 'months'){
            setIsMonthValid(isValidMonth(inputValue))
            setInputMonth(inputValue)            
        }

        if(pram === 'year'){
            setIsYearValid(isValidYear(inputValue)) 
            setInputYear(inputValue)                
        };        
    }

    const handleAgeCalculate = (e) => {
        e.preventDefault();
        
        console.log('valid', isDateValid, isMonthValid, isYearValid)

        const birthday = new Date(inputYear, inputMonth-1, inputDate);
        let years = date.getFullYear() - birthday.getFullYear();
        let months = date.getMonth() - birthday.getMonth()
        let days = date.getDate() - birthday.getDate();
        
        if (days < 0) {
            const previousMonth = new Date(date.getFullYear(), date.getMonth(), 0);
            days += previousMonth.getDate();
            months--;
        };

        console.log('months', months)

        if (months < 0){
            months = (12 + months)%12;
            years--;
        };
         
        setAgeCalculate([days, months, years]);
        console.log('ageCalculate', ageCalculate)
    }

    return (
        <div className="dateCounterPage">
            <div className="input-card">
                <div className="input-container flex flex-wrap gap-4 lg:gap-8 md:mt-6 w-12/12 lg:w-9/12 md:justify-center lg:justify-start">
                    <div className="inputWrapper">
                        <label className="input-label">DAY</label>
                        <input
                            type="text" id="day" placeholder="DD"
                            className="input-style"
                            onChange={e => handleChange(e.target.value, 'date')} />
                        { !isDateValid && <span className="validation" id="ErrorDay">Need Valid Date</span>}
                    </div>
                    <div className="inputWrapper">
                        <label className="input-label">MONTH</label>
                        <input
                            type="text" id="month" placeholder="MM"
                            className="input-style"
                            onChange={e => handleChange(e.target.value, 'months')} />
                        { !isMonthValid && <span className="validation" id="ErrorMonth">Need Valid Month</span>}
                    </div>
                    <div className="inputWrapper">
                        <label className="input-label">YEAR</label>
                        <input
                            type="text" id="year" placeholder="YYYY"
                            className="input-style"
                            onChange={e => handleChange(e.target.value, 'year')} />
                        { !isYearValid && <span className="validation" id="ErrorYear">Need Valid Year</span>}
                    </div>
                </div>

                <div className="special relative flex items-center my-12 sm:my-16 lg:my-0">
                    <hr className="border-none h-px bg-gray-300 w-full lg:flex-grow" />
                    <button
                        disabled={!isDateValid || !isMonthValid || !isYearValid}
                        className="absolute left-1/2 transform -translate-x-1/2 bg-transparent lg:relative lg:left-auto lg:transform-none" onClick={e => handleAgeCalculate(e)}>
                        <img src={ArrowButton} alt="click button"
                            className="sm:w-20 lg:w-32 submit-arrow bg-[#8751fa] rounded-full text-white p-4 sm:p-6 lg:p-7 cursor-pointer transition duration-500 ease-in-out transform hover:bg-black hover:shadow-lg lg:static"></img>
                    </button>
                </div>

                <div className="age-display text-left md:p-0  lg:p-2 flex flex-col items-start gap-1">
                    <span className="text-f text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
                        <span className="numbers-f text-[#8751fa] text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl"
                            id="years">{ageCalculate[2] || '--'}</span>
                        years
                    </span>
                    <span className="text-f text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
                        <span className="numbers-f text-[#8751fa] text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl"
                            id="months">{ageCalculate[1] || '--' }</span> months
                    </span>
                    <span className="text-f text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
                        <span className="numbers-f text-[#8751fa]  text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl"
                            id="days">{ageCalculate[0] || '--'}</span>
                        days 
                    </span>
                </div>



            </div>
        </div>
    )
}
export default AgeCalculator;