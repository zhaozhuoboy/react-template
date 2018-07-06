import React from 'react';
import asyncComponent from 'util/asyncComponent.jsx';
const Count = asyncComponent(()=>import(/*webpackChunkName:"count"*/"components/Count.jsx"))
export default class Home extends React.Component{
    render(){
        return (
            <div>

                <Count />
            </div>
        )
    }
}