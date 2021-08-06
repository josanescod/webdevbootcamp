import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Joseph Sanx";
const currentYear = new Date().getFullYear();
let copy =  "\u00A9";
const img = "https://picsum.photos/200/300";

ReactDOM.render(
  
      <footer>
        <h1 className="heading">React tutorial</h1>
          <p>
          Created by {name}
          </p>
          <img className="logo-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/83/OpenBSD_Logo_-_Cartoon_Puffy_with_textual_logo_below.svg/1024px-OpenBSD_Logo_-_Cartoon_Puffy_with_textual_logo_below.svg.png" alt="openBSD logo"/>
          <br/>
          <img className="logo-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Freebsd_logo.svg/1920px-Freebsd_logo.svg.png" alt="FreeBSD logo"/>
          <br/>
          <img className="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/249px-Tux.svg.png" alt="Linux logo"/>
          <br/>
          <img className="logo-img" src={img+ '?grayscale'}/>
          <p>
            Copyright <span>{copy}</span> {currentYear}
          </p>
    </footer>
  ,

  document.getElementById("root"));

