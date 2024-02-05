import { useReducer } from 'react';
import './CalculatorPage.css';

const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate'
}

function reducer(state, { type, payload }){
    console.log('state', state, type, payload)

    switch(type){
        case ACTIONS.ADD_DIGIT:
            if(payload.digit === "0" && state.currentOperand === "0") return state
            if(payload.digit === "0" && state.currentOperand.includes("")) {
                return state
            }
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`,
            }
        case ACTIONS.CHOOSE_OPERATION:
            if(state.currentOperand == null && state.previousOperand == null){
                return state
            }

            if(state.previousOperand == null){
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                }
            }   
            
            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null

            }
        case ACTIONS.CLEAR:
            return {}
        default: return;
    }
};

function evaluate({currentOperand, previousOperand, operation}){
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)

    if(isNaN(prev) || isNaN(current)) return "";
}

function CalculatorPage() {
    const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {});

    return (
        <div className="p-[5rem] h-screen bg-[#3B4664] rounded-lg">

            <div className="flex flex-col">
                <div className="self-center mt-5">
                    <div className="self-center font-bold text-white">Calc</div>

                    <div className="flex justify-end mt-5 h-20 w-80 bg-[#191F32] text-2xl text-end text-white rounded-lg">
                        {previousOperand} {operation} {currentOperand}
                    </div>
                
                    <div className="w-80 mt-5 bg-[#191F32] text-white rounded-lg p-4">                
                        <div className="flex flex-wrap League">
                            <button className="btn-number" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: "7"})}>7</button>
                            <button className="btn-number" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: 8})}>8</button>
                            <button className="btn-number" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: 9})}>9</button>
                            <button className="btn-del">DEL</button>
                            <button className="btn-number">4</button>
                            <button className="btn-number">5</button>
                            <button className="btn-number">6</button>
                            <button className="btn-number">+</button>
                            <button className="btn-number">1</button>
                            <button className="btn-number">2</button>
                            <button className="btn-number">3</button>
                            <button className="btn-number" onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: '-'})}>-</button>
                            <button className="btn-number">.</button>
                            <button className="btn-number">0</button>
                            <button className="btn-number">/</button>
                            <button className="btn-number">x</button>
                            <button className="btn-reset" onClick={() => dispatch({type: ACTIONS.CLEAR})}>RESET</button>
                            <button className="btn-equal">=</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default CalculatorPage;