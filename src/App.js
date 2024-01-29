// import AccordionPage from './Pages/AccordionPage';
// import ButtonPage from "./Pages/ButtonPage";
import { useState } from 'react';

import Dropdown from "./Components/Dropdown";

function App() {
    const [selection, setSelection] = useState(null);

    const options = [
        {
            label: 'Red', value: 'red'
        },
        {
            label: 'Green', value: 'green'
        },
        {
            label: 'Blue', value: 'blue'
        }
    ];
    
    const handleSelect = (optionValue) => {
        setSelection(optionValue);
    };

    return (
        <div className="flex">  
            {/* <ButtonPage /> */}
            {/* <AccordionPage /> */}
            <Dropdown 
                options={options}
                value={selection} 
                onChange={handleSelect}
            />
             <Dropdown 
                options={options}
                value={selection} 
                onChange={handleSelect}
            />
        </div>
    )
};

export default App;