import Card from '../Components/Card';

import AgeCalculatorImg from '../images/ageCalc.JPG';
import ScatterEffect from '../images/scatter.JPG';

function PersonalProjectPage() {
    const contentItems =[
        {
            title: "Scatter Intro Effect",
            description: "Scatter Effect to demonstrate DOM element manipulation and styling",
            imageUrl: ScatterEffect,
            path: "/scatter-css-page"
        },
        {
            title: "Age Calculator",
            description: "Age calculator to demonstrate date type logic calculation and form validation",
            imageUrl: AgeCalculatorImg,
            path: "/age-calculator"
        },
    ];


    return (
        <>
            <div className="p-5">
                <div className="flex flex-col">
                    <h1 className="mb-[2rem] text-center font-bold text-[#5c8d89] text-3xl">Personal Side Projects:</h1>
                    <div className="flex flex-wrap justify-center mt-5">
                        <Card imageUrl={contentItems[0].imageUrl} title={contentItems[0].title} description={contentItems[0].description} link={contentItems[0].path}/>                    
                        <Card imageUrl={contentItems[1].imageUrl} title={contentItems[1].title} description={contentItems[1].description} link={contentItems[1].path}/>                    
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