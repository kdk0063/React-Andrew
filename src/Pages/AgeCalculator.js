import { useState } from 'react';
import ArrowButton from '../images/svg/icon-arrow.svg';
import './AgeCalculator.css';

const today = new Date();

const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

const isValidDay = (day, month, year) => {
    const d = parseInt(day), m = parseInt(month), y = parseInt(year);
    if (isNaN(d) || isNaN(m) || isNaN(y)) return false;
    return d >= 1 && d <= daysInMonth(m, y);
};

const isValidMonth = (month) => {
    const m = parseInt(month);
    return !isNaN(m) && m >= 1 && m <= 12;
};

const isValidYear = (year) => {
    const y = parseInt(year);
    return !isNaN(y) && y >= 1900 && y <= today.getFullYear();
};

const isFutureDate = (day, month, year) => {
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day)) > today;
};

const InputField = ({ label, placeholder, value, onChange, isValid, errorMessage, touched, onBlur }) => (
    <div className="inputWrapper">
        <label className="input-label">{label}</label>
        <input
            type="text"
            placeholder={placeholder}
            className="input-style"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
        {touched && !isValid && <span className="validation">{errorMessage}</span>}
    </div>
);

const AgeCalculator = () => {
    const [inputDay, setInputDay] = useState('');
    const [inputMonth, setInputMonth] = useState('');
    const [inputYear, setInputYear] = useState('');
    const [dayTouched, setDayTouched] = useState(false);
    const [monthTouched, setMonthTouched] = useState(false);
    const [yearTouched, setYearTouched] = useState(false);
    const [ageResult, setAgeResult] = useState(null);

    const dayValid = inputDay !== '' && isValidDay(inputDay, inputMonth, inputYear);
    const monthValid = inputMonth !== '' && isValidMonth(inputMonth);
    const yearValid = inputYear !== '' && isValidYear(inputYear);
    const allValid = dayValid && monthValid && yearValid && !isFutureDate(inputDay, inputMonth, inputYear);

    const handleCalculate = (e) => {
        e.preventDefault();
        if (!allValid) return;

        const birthday = new Date(parseInt(inputYear), parseInt(inputMonth) - 1, parseInt(inputDay));
        let years = today.getFullYear() - birthday.getFullYear();
        let months = today.getMonth() - birthday.getMonth();
        let days = today.getDate() - birthday.getDate();

        if (days < 0) {
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            months--;
        }

        if (months < 0) {
            months += 12;
            years--;
        }

        setAgeResult({ years, months, days });
    };

    return (
        <div className="dateCounterPage">
            <div className="input-card">
                <h1 className="text-[#8751fa] text-2xl font-bold uppercase">Enter Your Birthday</h1>

                <div className="input-container flex flex-wrap gap-4 lg:gap-8 md:mt-6 w-12/12 lg:w-9/12 md:justify-center lg:justify-start">
                    <InputField
                        label="DAY"
                        placeholder="DD"
                        value={inputDay}
                        onChange={(e) => setInputDay(e.target.value)}
                        isValid={dayValid}
                        errorMessage="Must be a valid day"
                        touched={dayTouched}
                        onBlur={() => setDayTouched(true)}
                    />
                    <InputField
                        label="MONTH"
                        placeholder="MM"
                        value={inputMonth}
                        onChange={(e) => setInputMonth(e.target.value)}
                        isValid={monthValid}
                        errorMessage="Must be a valid month"
                        touched={monthTouched}
                        onBlur={() => setMonthTouched(true)}
                    />
                    <InputField
                        label="YEAR"
                        placeholder="YYYY"
                        value={inputYear}
                        onChange={(e) => setInputYear(e.target.value)}
                        isValid={yearValid}
                        errorMessage="Must be a valid year"
                        touched={yearTouched}
                        onBlur={() => setYearTouched(true)}
                    />
                </div>

                <div className="special relative flex items-center my-12 sm:my-16 lg:my-0">
                    <hr className="border-none h-px bg-gray-300 w-full lg:flex-grow" />
                    <button
                        disabled={!allValid}
                        className="absolute left-1/2 transform -translate-x-1/2 bg-transparent lg:relative lg:left-auto lg:transform-none"
                        onClick={handleCalculate}
                    >
                        <img
                            src={ArrowButton}
                            alt="click button"
                            className="sm:w-20 lg:w-32 submit-arrow bg-[#8751fa] rounded-full text-white p-4 sm:p-6 lg:p-7 cursor-pointer transition duration-500 ease-in-out transform hover:bg-black hover:shadow-lg lg:static"
                        />
                    </button>
                </div>

                <div className="age-display text-left md:p-0 lg:p-2 flex flex-col items-start gap-1">
                    <span className="text-f text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
                        <span className="numbers-f text-[#8751fa] text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl">{ageResult?.years ?? '--'}</span> years
                    </span>
                    <span className="text-f text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
                        <span className="numbers-f text-[#8751fa] text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl">{ageResult?.months ?? '--'}</span> months
                    </span>
                    <span className="text-f text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
                        <span className="numbers-f text-[#8751fa] text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl">{ageResult?.days ?? '--'}</span> days
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AgeCalculator;