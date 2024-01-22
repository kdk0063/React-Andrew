import Button from "./Components/Button";


function App() {
    return(
        <>  
            <div>
                <Button success rounded outline>Click me!</Button>
            </div>
            <div>
                <Button danger outline>Buy Now!</Button>
            </div>
            <div>
                <Button warning>Seal Deal!</Button>
            </div>
            <div>
                <Button secondary outline>Hide Ads!</Button>
            </div>
            <div>
                <Button secondary rounded>Bye Bye!</Button>
            </div>
        </>
    )
}

export default App;