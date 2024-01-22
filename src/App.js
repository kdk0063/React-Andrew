import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

import Button from "./Components/Button";

function App() {
    const handleClick = () => {
        console.log('clicked')
    }

    return(
        <>  
            <div>
                <Button success rounded outline onClick={handleClick}>
                    <GoBell /> 
                    Click me!
                </Button>
            </div>
            <div>
                <Button danger rounded>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning rounded>
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

export default App;