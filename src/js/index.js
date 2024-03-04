//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.css';


// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Home from "./component/home.jsx";
let digito1= 0;
let digito2= 0;
let digito3= 0;
let digito4= 0;
let digito5= 0;
let digito6= 0;

setInterval(function () {
    ReactDOM.render(<Home dijiOne={digito1} dijiTwo={digito2} dijiTree={digito3} dijiFour={digito4} dijiFive={digito5} dijiSix={digito6} />, document.querySelector("#app"));

    digito6++;
    if (digito6 === 10) {
        digito6 = 0;
        digito5++;
    }
    if (digito5 === 10) {
        digito5 = 0;
        digito4++;
    }
    if (digito4 === 10) {
        digito4 = 0;
        digito3++;
    }
    if (digito3 === 10) {
        digito3 = 0;
        digito2++;
    }
    if (digito2 === 10) {
        digito2 = 0;
        digito1++;
    }
    if (digito1 === 10) {
        digito1 = 0;
    }
}, 1000);




















