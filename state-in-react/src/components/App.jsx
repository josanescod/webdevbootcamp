import React from "react";

var isDone = true;

function strike() {
    isDone = true;

}
function unstrike() {
    isDone = false;

}

const lineThrough = { texDecoration: "line-through" };

function App() {
    return (
        <div>
            <p style={isDone ? lineThrough : null}>Buy milk</p>
            <button onClick={strike}>Change to strike through </button>
            <br />
            <button onClick={unstrike}>Change back </button>
        </div>
    )

}

export default App;
