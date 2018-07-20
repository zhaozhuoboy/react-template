import React,{ Component } from 'react';
import Home from './page/Home';
class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="hello"><Home /></div>
        )
    }
}
export default App;