import React from "react";
import '../App.css';

function Greeting() {

    const date = new Date();
    const currentTime = date.getHours();
    let greeting;
    const customStyle = {
        color: ""
    }

    if (currentTime < 12) {
        greeting = "Good Morning";
        customStyle.color = "red";
    } else if (currentTime < 18) {
        greeting = "Good Afternoon";
        customStyle.color = "green";

    } else {
        greeting = "Good Evening";
        customStyle.color = "blue";
    }

    return (        
            <p className="heading" style={customStyle}>{greeting}</p>        

   );

}
export default Greeting;