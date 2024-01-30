import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

import Button from "../Components/Button";

function ButtonPage() {
    const handleClick = () => {
        //do something on click
    }

    return(
        <>  
            <div>
                <Button success rounded outline className="mb-5" onClick={handleClick}>
                    <GoBell /> 
                    Click me!
                </Button>
            </div>
            <div>
                <Button danger rounded className="mb-5" onMouseEnter={handleClick}>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning rounded className="mb-5" onMouseLeave={handleClick}>
                    <GoDatabase />
                    Seal Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline className="mb-5">Hide Ads!</Button>
            </div>
            <div>
                <Button primary rounded className="mb-5">Bye Bye!</Button>
            </div>
        </>
    )
}

export default ButtonPage;