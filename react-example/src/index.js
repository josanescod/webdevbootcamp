import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const date = new Date(2019,1,1,12);
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
}

if (currentTime < 12){
  greeting = "Good Morning";
  customStyle.color = "red";
  
}else if (currentTime < 18){
  greeting = "Good Afternoon";
  customStyle.color = "green";
  
}else {
  greeting = "Good Night";
  customStyle.color = "blue";

}


ReactDOM.render(

  <div>
    <h1 className="heading" style={customStyle}> {greeting} {currentTime}</h1>
  </div>
  ,

  document.getElementById("root"));

