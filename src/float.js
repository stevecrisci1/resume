import React from 'react'
import $ from 'jquery'

export default class Float extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			leftPosition: Math.floor(Math.random() * window.innerWidth-124) + 124,
			topPosition:Math.floor(Math.random() * window.innerHeight),
			interval:60,
			initialMovement:20 ,
			topMovement:20 * props.topFlex ,
			leftMovement: 30 * props.leftFlex 
		}
		
		this.stopMove = this.stopMove.bind(this)
		this.startMove = this.startMove.bind(this)
		this.hideFloats = this.hideFloats.bind(this)
	}
	

	
		tick() {
			this.top();
			this.left();
		
          }
		  
		  top(){
			let movement = this.state.topMovement
		
			if (window.innerHeight-this.state.topMovement * 5 < $("#" + this.props.name).css("top").replace("px",'') )
				//this.setState({topPosition:0})
				this.setState({topMovement:-20})

			if ($("#" + this.props.name).css("top").replace("px",'') < 100)
				this.setState({topMovement:20})

			this.setState(prevState => ({
			  topPosition: prevState.topPosition + movement
			  
            }));
		  }
		  
		  
		  left(){
			let movement = this.state.leftMovement
			if (window.innerWidth-this.state.leftMovement * 5 < $("#" + this.props.name).css("left").replace("px",'') )
				this.setState({leftMovement:-20})
			if ($("#" + this.props.name).css("left").replace("px",'') < 1)
				this.setState({leftMovement:20})
			this.setState(prevState => ({
              leftPosition: prevState.leftPosition + movement
            }));
		  }
		  

			stopMove(e){
				this.setState({leftMovement:0, topMovement:0})
			}

			
			startMove(e){
				this.setState({leftMovement:this.state.initialMovement, topMovement:this.state.initialMovement}, console.log("set to 20"))
			}
			
			hideFloats(){
				$(".float").hide()
			}
			
		  componentDidMount() {
				this.interval = setInterval(() => this.tick(), this.state.interval);
				
				//what is the current position of this unit
				
			
          }

          componentWillUnmount() {
            clearInterval(this.interval);
          }
		  
		  render(){
			  
			  return(
				<div className="float"
					id={this.props.name} 
					onMouseEnter ={this.stopMove}
					onMouseLeave={this.startMove}
					onClick={this.hideFloats}
					style={{ zIndex:"0",color:"#ccc",position:'absolute',top:`${this.state.topPosition}px`,left:`${this.state.leftPosition}px`}}>
					<h1>{this.props.name}</h1>
				</div>
				)
			}
}