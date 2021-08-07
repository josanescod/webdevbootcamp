import React from "react";
import { add, substract, multiply, divide } from "../calculator";


function Calc() {

    return (

        <ul>
            <li>2 + 3 = {add(2, 3)}</li>
            <li>5 * 7 = {multiply(5, 7)}</li>
            <li>8 - 3 = {substract(8, 3)}</li>
            <li>10 / 2 = {divide(10, 2)}</li>
        </ul>


    );

}


export default Calc;