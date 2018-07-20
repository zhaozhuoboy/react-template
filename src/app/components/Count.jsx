import React from 'react';
export default class Count extends React.Component {
	state={
		count:0
	}
	jia=()=>{
		this.setState({
			count:this.state.count+1
		})
	}
	render() {
		const style = {
			color: "blue",
		}

		return (
			<div>
				<h1>计数器</h1>
				<h3>{this.state.count}</h3>
				<button onClick={()=>this.jia()}>+</button>
				<button>-</button>
			</div>
		)
	}
}