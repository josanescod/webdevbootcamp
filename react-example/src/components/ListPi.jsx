import React from "react";
import PI, { doblePi,triplePi } from "../math";
//import * from "../math";
//import * as pi from "../math";


function ListPi(){

    return (

        <ol>
            <li>{PI}</li>
            <li>{doblePi()}</li>
            <li>{triplePi()}</li>
        </ol>


    );

}



export default ListPi;