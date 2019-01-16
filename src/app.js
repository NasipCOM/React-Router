import React, {Component} from 'react'
import Title from "./components/title"
import Comp1 from "./components/comp1"
import Comp2 from "./components/comp2"
import Comp3 from "./components/comp3"
import Home from "./components/home"
import Buttons from "./components/buttons"
import "./style/index.css"
import {BrowserRouter as Router, Route} from 'react-router-dom'



class App extends Component{
    render(){
        return(
            <Router>
            <div className={"main"}>
                <Route path='/' component={Home} exact/>
                <Route path='/home' component={Home}/>
                <Route path='/' component={Buttons}/>
                <Route path='/' component={Title}/>
                <Route path='/Comp1' component={Comp1}/>
                <Route path='/Comp2' component={Comp2}/>
                <Route path='/Comp3' component={Comp3}/>
            </div>
            </Router>
            );
        }   
    }
    
    export default App;