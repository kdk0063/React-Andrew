import Accordion from './Components/Accordion';
// import ButtonPage from "./Pages/ButtonPage";

function App() {
    const items = [
        {
            label: "Can I use React on a Project",
            content: "You can use React You can use React You can use React You can use React"
        },
        {
            label: "Can I use React on a Project",
            content: "You can use React You can use React You can use React You can use React"
        },
        {
            label: "Can I use React on a Project",
            content: "You can use React You can use React You can use React You can use React"
        }
    ];

    return(
        <>  
            {/* <ButtonPage /> */}
            <Accordion items={items} />
        </>
    )
}

export default App;