import React,{Component} from 'react';
import "./index.css"

class buttons extends Component{
    render(){
        return(
            <div className={"buttons"}>
                <ul>
                    <li><a href={"#"}>Home</a></li>
                    <li><a href={"#"}>First</a></li>
                    <li><a href={"#"}>Second</a></li>
                    <li><a href={"#"}>Third</a></li>
                    <li><a href={"#"} className={"last"}>Fourth</a></li>
                </ul>
            </div>
        )
    }
}

export default buttons;