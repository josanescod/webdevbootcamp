import React, { useState } from "react";

function App() {
    //state
    const [name, setName] = useState("");
    const [headingText, setHeading] = useState("");

    function handleChange(event) {
        console.log(event.target.value);
        setName(event.target.value);
    }

    function handleClick(event) {
        setHeading(name);
        event.preventDefault();

    }
    return (
        <div className="container">
            <form onSubmit={handleClick}>
                <h1>Hello {name} </h1>
                <h2>Hello {headingText}</h2>
                <input onChange={handleChange} type="text" placeholder="What's your name?" value={name} />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

export default App;