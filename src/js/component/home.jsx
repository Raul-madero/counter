import React from "react";
import SecondsCounter from "./SecondsCounter";



//create your first component
const Home = (props) => {
    return <SecondsCounter seconds={props.seconds}/>
}
export default Home;
