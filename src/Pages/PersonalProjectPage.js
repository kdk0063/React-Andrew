import Link from "../Components/Link";

function PersonalProjectPage() {
    return (
        <>
            <div className="p-5">
                <div className="flex flex-col">
                    <h1 className="mb-[2rem] text-center font-bold text-[#5c8d89] text-3xl">Personal Side Projects:</h1>

                    <div className="flex justify-center mt-5">
                        <ul className="list-disc">
                            <li className="hover:bg-sky-700 rounded-lg">
                                <Link className="no-underline cursor-pointer hover:text-white " to={"/scatterCssPage"}>
                                    Custom Intro CSS Flying text Effect
                                </Link>
                            </li>

                            <li className="hover:bg-sky-700 rounded-lg">
                                <Link className="no-underline cursor-pointer hover:text-white " to={"/ageCalculator"}>
                                    AgeCalculator
                                </Link>
                            </li>
                            {/* <li>
                                <Link className="no-underline cursor-pointer" to={'/calculator'}>
                                    Calculator
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                    <div className="flex justify-center mt-[15rem] font-bold">
                        <h1>MORE SIDE PROJECTS COMING SOON.</h1>
                    </div>
                </div>
            </div>
        </>
    )
};
export default PersonalProjectPage;