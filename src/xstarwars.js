import React from 'react'
import Hr from './hr.js'

export default class StarWars extends React.Component {
	constructor() {
		super()
		this.state = {
			character:{name:'...loading...'},
            loading:true,
            characterNumber:1,
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.getData = this.getData.bind(this)
	}

	componentDidMount(){
        this.getData(this.state.characterNumber)
    }
    
    getData(charNum){
        const fetchParams = {
            method: 'GET',
            mode: 'no-cors'
        };
        const url = "https://swapi.co/api/people/" + charNum;
        fetch(url, fetchParams)
            .then(response => response.json())
            .then(data => {
                this.setState({character:data},  ()=>{
                    if (data.detail === "Not found")  this.setState({character:{name:"Missing data."} })
                })
            })
    }

    
    handleChange(event){
        this.setState({character:{name:"loading..."} })
        this.setState({characterNumber:event.target.value})
        this.getData(event.target.value);
    }

	render() {
        
        
		return (
            <div id="starwars" name="starwars" style={{margin:"30px",border:"1px solid black"}} className="row">
                <Hr/>
                <div className="col-sm-12">
                
                    <div className="row">
                        <div className="col-xs-12">
                            <h1>Star Wars</h1>
                        </div>
                    </div>
                    <div className="row">
                    
                        <div className="col-xs-12 col-sm-6" style={{backgroundColor:"#eee"}}>
                            <div style={{fontSize:"14px"}}>
                                <span style={{textDecoration:"underline", fontWeight:"bold", fontSize:"16px"}}>What is this about? </span> 
								
								<h3 >The SWAPI site has shut down and potentialy return someday... hence I am leaving this code online in hopes that is back soon.</h3>
								
								
                                A <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank" rel="noopener noreferrer">
                                REST API</a> call was made with the value you see to the right to <span style={{fontWeight:"bolder",fontSize:"14px"}}> https://swapi.co/api/people/</span> to retrieve the character name you see there.
                                Change the number. This will generate another call to be made.  The character name will change according to the response.
                            </div>
                        </div>
                        
                        
                        <div className="col-xs-12 col-sm-6" >
                            <div className="row">
                                <div className="col-sm-4">
                                    <h5>Change this: </h5><input type="number" 
                                        name="quantity" 
                                        className="margin10"
                                        value={this.state.characterNumber} 
                                        min="1" max="88" 
                                        onChange={this.handleChange}/>
                                </div>
                                <div className="col-sm-4">
                                    <h4>Character:</h4>
                                    <h5>{this.state.character.name}</h5>
                                </div>
                                
                            </div>
                        </div>
                        <div className="clearfix"/>


                    </div>
                    
                </div>
                <Hr/>
            </div>
		);
	}
}
