import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

import Button from "../Components/Button";

function ButtonPage() {
    const handleClick = () => {
        console.log('clicked')
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
                <Button danger rounded onMouseEnter={handleClick}>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning rounded onMouseLeave={handleClick}>
                    <GoDatabase />
                    Seal Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>Hide Ads!</Button>
            </div>
            <div>
                <Button primary rounded>Bye Bye!</Button>
            </div>
        </>
    )
}

export default ButtonPage;