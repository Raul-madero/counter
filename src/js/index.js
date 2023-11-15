//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./component/home";
let counter = 0
//import your own components
//render your react application
setInterval(function() {
    ReactDOM.render(<Home seconds={counter}/>, document.querySelector("#app"))
    counter++
},
1000)

