import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Joseph Sanx";
const currentYear = new Date().getFullYear();
let copy =  "\u00A9";

ReactDOM.render(
  <body>
      <footer>
          <p>
          Created by {name}
          </p>
          <p>
            Copyright <span>{copy}</span> {currentYear}
          </p>
    </footer>
  </body>,

  document.getElementById("root"));

