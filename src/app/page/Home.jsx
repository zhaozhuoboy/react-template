import React from 'react';
import asyncComponent from 'util/asyncComponent.jsx';
// const Count = asyncComponent(()=>import(/*webpackChunkName:"count"*/"components/Count.jsx"))
import Count from 'components/Count'
export default class Home extends React.Component{
    render(){
        return (
            <div>
                <header style={styles.header}>Hello React</header>
                <Count />
            </div>
        )
    }
}
const styles={
    header:{
        width:"100%",
        height:60,
        background:"#323232",
        color:"#FFF",
        lineHeight:"60px"
    }
}