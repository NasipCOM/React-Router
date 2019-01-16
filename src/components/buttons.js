import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import "../style/index.css"

class buttons extends Component{
    render(){
        return(
            <div className={"buttons"}>
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/comp1">First</NavLink></li>
                    <li><NavLink to="/comp2">Second</NavLink></li>
                    <li><NavLink to="/comp3">Third</NavLink></li>
                    <li className="last"><NavLink to="/">Fourth</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default buttons;