import { useState } from "react"
import propTypes from 'prop-types'
export const FunctionalCounter = (props) => {
    const [ count, setCount] = useState(0)
    const handleIncrement = () => {
        const counter = count +1;
        if (count >= 10) {
            setCount (0)
            props.onCounterChanged(0)
            props.onReachMax()
            return
        }
        setCount (counter)
        props.onCounterChanged(counter)
        
    }

    return <div>
        <h2> Counter: {props.name}</h2>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
    </div>
}

function isAlphabet (prop, propName, componentName) {
    if(typeof prop[propName] !== 'string') {
        return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expected a string`)
    }
    const regex = /^[a-zA-Z]+$/;
    if(!regex.test(prop[propName])) {
        return new Error (`Invalid prop ${propName} supplied to ${componentName}. Expected an alphabet`)
    }
}

FunctionalCounter.propTypes = {
    name:isAlphabet,
    onReachMax : propTypes.func,
    onCounterChanged: propTypes.func
}
FunctionalCounter.defaultProps = {
    name:'Counter',
    onReachMax: () => {},
    onCounterChanged: () => {}
}

