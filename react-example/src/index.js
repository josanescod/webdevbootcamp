import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Jhon";
const lastName = "Smith";
const luckyNumber = 8;

ReactDOM.render(
  <div>
    <h1>React Tutorial</h1>
    <h2>Hello {name} {lastName}</h2> {/* adding expresions and comments */}
    <p>Food</p>
    <ul>
      <li>
        Bacon
      </li>
      <li>
        Noodles
      </li>
      <li>
        Jamon
      </li>
    </ul>
    <p>Your lucky number is {luckyNumber + 4}</p>
    <p>Random number {Math.floor(Math.random()*10)}</p>
    <p>{
      
      
      }</p>
  </div>,

  document.getElementById("root"));

