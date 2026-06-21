import { useState } from 'react';
import DollarImg from '../images/svg/icon-dollar.svg';
import PersonImg from '../images/svg/icon-person.svg';

const TIP_PRESETS = [5, 10, 15, 25, 50];

function TipSplitterPage() {
    const [bill, setBill] = useState('');
    const [selectedTip, setSelectedTip] = useState(null);
    const [customTip, setCustomTip] = useState('');
    const [people, setPeople] = useState('');

    const tipPercent = selectedTip !== null ? selectedTip : (customTip !== '' ? parseFloat(customTip) : 0);
    const billNum = parseFloat(bill) || 0;
    const peopleNum = parseInt(people) || 0;

    const tipPerPerson = peopleNum > 0 ? (billNum * (tipPercent / 100)) / peopleNum : 0;
    const totalPerPerson = peopleNum > 0 ? (billNum + billNum * (tipPercent / 100)) / peopleNum : 0;

    const handleReset = () => {
        setBill('');
        setSelectedTip(null);
        setCustomTip('');
        setPeople('');
    };

    const handleTipSelect = (tip) => {
        setSelectedTip(tip);
        setCustomTip('');
    };

    const handleCustomTip = (e) => {
        setCustomTip(e.target.value);
        setSelectedTip(null);
    };

    const isResetEnabled = bill !== '' || selectedTip !== null || customTip !== '' || people !== '';

    return(
        <div className="bg-[#C5E4E7] min-h-screen w-full flex flex-col flex-wrap justify-center items-center py-12">
            <div className="flex mb-12">
                <h2 className="uppercase tracking-[0.5rem] font-bold block">
                    spli
                    <span className="block">tter</span>
                </h2>
            </div>

            <div className="w-full max-w-[1000px] bg-white grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 rounded-lg p-6 md:p-8">
                <div className="left-container flex flex-col">
                    <label className="subTitle">Bill</label>
                    <div className="relative mt-2">
                        <img src={DollarImg} alt="icon dollar" className="absolute top-1/2 transform -translate-y-1/2 left-4 w-5 h-5" />
                        <input
                            type="number"
                            min="0"
                            value={bill}
                            onChange={(e) => setBill(e.target.value)}
                            className="w-full bg-[#F4FAFA] pl-10 py-2 pr-4 border rounded-md focus:outline-none focus:ring focus:border-[#26C0AB] text-end"
                            placeholder="0.00"
                        />
                    </div>

                    <div className="button-container mt-5">
                        <span className="subTitle">Select Tip %</span>
                        <div className="grid grid-cols-3 gap-4 mt-2">
                            {TIP_PRESETS.map((tip) => (
                                <button
                                    key={tip}
                                    onClick={() => handleTipSelect(tip)}
                                    className={`font-bold py-2 px-4 rounded transition-colors duration-150 ${
                                        selectedTip === tip
                                            ? 'bg-[#26C0AB] text-[#00494D]'
                                            : 'bg-[#00494D] hover:bg-[#26C0AB] text-white'
                                    }`}
                                >
                                    {tip}%
                                </button>
                            ))}
                            <input
                                type="number"
                                min="0"
                                max="100"
                                value={customTip}
                                onChange={handleCustomTip}
                                className={`font-bold py-2 px-4 rounded text-center bg-[#F4FAFA] focus:outline-none focus:ring focus:border-[#26C0AB] ${
                                    customTip !== '' ? 'text-[#00494D]' : 'text-[#9CA3AF]'
                                }`}
                                placeholder="custom"
                            />
                        </div>
                    </div>

                    <div className="mt-5">
                        <span className="subTitle text-sm">Number of People</span>
                        <div className="relative mt-2">
                            <img src={PersonImg} alt="icon person" className="absolute top-1/2 transform -translate-y-1/2 left-4 w-5 h-5" />
                            <input
                                type="number"
                                min="1"
                                value={people}
                                onChange={(e) => setPeople(e.target.value)}
                                className="w-full bg-[#F4FAFA] pl-10 py-2 pr-4 border rounded-md focus:outline-none focus:ring focus:border-[#26C0AB] text-end"
                                placeholder="0"
                            />
                        </div>
                        {people === '0' && (
                            <p className="text-red-400 text-xs mt-1">Can't be zero</p>
                        )}
                    </div>
                </div>

                <div className="right-container flex flex-col gap-8 md:gap-12 md:p-8 bg-[#00494D] rounded-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="tip-person text-white text-sm md:text-base">Tip Amount</p>
                            <p className="person text-white text-xs md:text-sm opacity-70">/ person</p>
                        </div>
                        <span className="text-2xl font-bold text-[#26C0AB]">
                            ${tipPerPerson.toFixed(2)}
                        </span>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <p className="tip-person text-white text-sm md:text-base">Total</p>
                            <p className="person text-white text-xs md:text-sm opacity-70">/ person</p>
                        </div>
                        <span className="text-2xl font-bold text-[#26C0AB]">
                            ${totalPerPerson.toFixed(2)}
                        </span>
                    </div>

                    <button
                        onClick={handleReset}
                        disabled={!isResetEnabled}
                        className={`uppercase tracking-wide py-2 px-4 border-none rounded-lg mt-8 md:mt-12 font-bold text-sm tracking-[0.2rem] transition-colors duration-150 ${
                            isResetEnabled
                                ? 'bg-[#26C0AB] text-[#00494D] hover:bg-[#F4FAFA] cursor-pointer'
                                : 'bg-[#0D686D] text-[#00494D] cursor-not-allowed opacity-50'
                        }`}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TipSplitterPage;