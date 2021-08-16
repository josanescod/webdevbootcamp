import React, { useState } from 'react';
import Time from './Time';

function App() {


    const [count, setCount] = useState(0);
    function increase() {
        setCount(count + 1)
    }

    function decrease() {
        setCount(count - 1)
    }

    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <Time />
        </div>

    )
}

export default App;