import { useState } from 'react';

function CalculatorPage() {
    const [inputValue, setInputValue] = useState([]);
    const [finalValue, setFinalValue] = useState(0);

    return (
        <div className="p-[5rem] h-full bg-">
            <div>Calc</div>

            <div>
                <div className="display">989</div>
                <div className="buttons">
                    <button className="btn-number">1</button>
                    <button className="btn-number">2</button>
                    <button className="btn-number">3</button>
                    <button className="btn-operator">+</button>
                    <button className="btn-number">4</button>
                    <button className="btn-number">5</button>
                    <button className="btn-number">6</button>
                    <button className="btn-operator">-</button>
                    <button className="btn-number">7</button>
                    <button className="btn-number">8</button>
                    <button className="btn-number">9</button>
                    <button className="btn-operator">X</button>
                    <button className="btn-clear">C</button>
                    <button className="btn-number">0</button>
                    <button className="btn-equals">=</button>
                    <button className="btn-operator">/</button>
                </div> */}
            </div>
        </div>
    )
};
export default CalculatorPage;