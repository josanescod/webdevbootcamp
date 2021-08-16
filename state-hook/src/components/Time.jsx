import React, { useState } from 'react';

function Time() {

    setInterval(updateTime, 1000);

    var now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);

    function updateTime() {

        const newTime = new Date().toLocaleTimeString();
        setTime(newTime)
    }
    return (
        <div className="container">
            <h1>{time}</h1>
            <button className="buttonTime" onClick={updateTime}>Get Time</button>
        </div>
    )
}

export default Time;