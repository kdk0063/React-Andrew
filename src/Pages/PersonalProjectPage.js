import Card from '../Components/Card';

import AgeCalculatorImg from '../images/ageCalc.JPG';
import ScatterEffect from '../images/scatter.JPG';
import TipSplitter from '../images/splitter.JPG';

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
        {
            title: "Tip Splitter",
            description: "Tip Splitter to demonstrate date type logic calculation",
            imageUrl: TipSplitter,
            path: ""
        },
    ];

    console.log('contentItems', contentItems[2])


    return (
        <>
            <div className="p-5">
                <div className="flex flex-col">
                    <h1 className="mb-[2rem] text-center font-bold text-[#5c8d89] text-3xl">Personal Side Projects:</h1>
                    <div className="flex flex-wrap justify-center mt-5">
                        <Card imageUrl={contentItems[0].imageUrl} title={contentItems[0].title} description={contentItems[0].description} link={contentItems[0].path}/>                    
                        <Card imageUrl={contentItems[1].imageUrl} title={contentItems[1].title} description={contentItems[1].description} link={contentItems[1].path}/>                    
                        <Card imageUrl={contentItems[2].imageUrl} title={contentItems[2].title} description={contentItems[2].description} link={contentItems[2].path}/>                                     
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