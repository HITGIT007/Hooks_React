import React, {useState} from 'react'

const StateTutorial = () => {

    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const increment = () => {
        setCounter(counter + 1);
    };

    let changed = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    return (
        <div>
            <div>
                {counter}
                <button onClick={increment}>Increment</button>
            </div>
            <div>
                <input placeholder="Enter Something" onChange={changed}/>
                {inputValue}
            </div>
            

            
        </div>
    )
}

export default StateTutorial
