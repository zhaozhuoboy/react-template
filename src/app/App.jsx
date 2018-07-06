import React,{ Component } from 'react';
import Home from './page/Home';
export default class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="hello"><Home /></div>
        )
    }
}