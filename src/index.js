import React from "react";
import ReactDOM from "react-dom"
import Body from "./body"
import Title from "./title"
import Buttons from "./buttons"
import "./index.css"



var destination = document.querySelector("#container");

ReactDOM.render(
    <div className={"main"}>
        <Buttons />
        <Title />
        <Body />
    </div>,
    destination

);