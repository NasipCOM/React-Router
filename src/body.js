import React,{Component} from "react";
import "./index.css";
import Comp1 from "./comp1";
import Comp2 from "./comp2";
import Comp3 from "./comp3";

class body extends Component{
    render(){
        return(

            <div className={"body"}>
                <Comp1/>
                <Comp2/>
                <Comp3/>
            </div>
        )
    }
}

export default body;