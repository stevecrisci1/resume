import React from 'react'




export default class Menu extends React.Component{
	render(){
		return(
			<div id={this.props.buttonName} className="menuButton">
				<button 
					id={this.props.buttonName} 
					name={this.props.buttonName} 
					onClick={this.props.onclick} 
					value={this.props.buttonName}>
					{this.props.buttonName.replace("Menu","").toUpperCase()}
				</button>
			</div>
		)
	}
}