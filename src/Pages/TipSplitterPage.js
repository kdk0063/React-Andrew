import DollarImg from '../images/svg/icon-dollar.svg';
import PersonImg from '../images/svg/icon-person.svg';


function TipSplitterPage() {
    return(
        <div className="bg-[#C5E4E7] h-screen w-full flex flex-col flex-wrap justify-center items-center">
            <div className="flex mb-12">
                <h2 className="uppercase tracking-[0.5rem] font-bold block">
                    spli
                    <span className="block">tter</span>
                </h2>
            </div>

            <div className="w-full max-w-[1000px] bg-white grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 rounded-lg p-6 md:p-8 ">
                <div className="left-container flex flex-col ">  
                    <label className="subTitle">Bill</label>
                    <div className="relative mt-2">
                        <img src={DollarImg} alt="icon dollar" className="absolute top-1/2 transform -translate-y-1/2 left-4 w-5 h-5" />
                        <input type="text" className="w-full bg-[#F4FAFA] pl-10 py-2 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-end" placeholder="0.00" />
                    </div>

                    <div className="button-container mt-5">
                        <span className="subTitle">Select Tip %</span>
                        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-2">
                            <button className="bg-[#00494D] hover:bg-[#26C0AB] text-white font-bold py-2 px-4 rounded">5%</button>
                            <button className="bg-[#00494D] hover:bg-[#26C0AB] text-white font-bold py-2 px-4 rounded">10%</button>
                            <button className="bg-[#00494D] hover:bg-[#26C0AB] text-white font-bold py-2 px-4 rounded">15%</button>
                            <button className="bg-[#00494D] hover:bg-[#26C0AB] text-white font-bold py-2 px-4 rounded">25%</button>
                            <button className="bg-[#00494D] hover:bg-[#26C0AB] text-white font-bold py-2 px-4 rounded">50%</button>
                            <input className="bg-[#F4FAFA] text-[#9CA3AF] font-bold py-2 px-4 rounded text-center" placeholder="custom" />
                        </div>
                    </div>
                   
                    <div className="mt-5">
                        <span className="subTitle text-sm">Number of People</span>
                        <div className="relative mt-2">
                            <img src={PersonImg} alt="icon dollar" className="absolute top-1/2 transform -translate-y-1/2 left-4 w-5 h-5" />
                            <input type="text" className="w-full bg-[#F4FAFA] pl-10 py-2 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-end" placeholder="0" />
                        </div>
                    </div>
                </div>

                <div className="right-container flex flex-col gap-8 md:gap-12 md:p-8 bg-[#00494D] rounded-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="tip-person text-white text-sm md:text-base">Tip Amount</p>
                            <p className="person text-white text-xs md:text-sm opacity-70">/ person</p>
                        </div>
                        <div className="tip-total flex items-center">
                            <div className="dollar w-5 h-5"></div>
                            <span className="text-lg font-bold text-[#26C0AB]" id="result-tip">0.00</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <p className="tip-person text-white text-sm md:text-base">Total</p>
                            <p className="person text-white text-xs md:text-sm opacity-70">/ person</p>
                        </div>
                        <div className="tip-total flex items-center">
                            <div className="dollar w-5 h-5"></div>
                            <span className="text-lg font-bold text-[#26C0AB]" id="result-total">0.00</span>
                        </div>
                    </div>

                    <button className="cursor-pointer uppercase tracking-wide py-2 px-4 border-none rounded-lg mt-8 md:mt-12 bg-transparent text-[#00494D] bg-[#26C0AB] hover:bg-[#F4FAFA] font-bold text-sm tracking-[0.2rem]">Reset</button>
                </div>
            </div>
        </div>     
    )
}
export default TipSplitterPage;