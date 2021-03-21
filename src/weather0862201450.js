import React from 'react'
import $ from 'jquery'
import Hr from './hr.js'
import Arrow from './arrow.png'; // with import

export default class Weather extends React.Component{

    constructor(props){
        super(props)
        this.state={
            lat:"",
            lon:"",
            city:"",
            zipcode:'90210',
            data:[],
            temp:"0",
            humidity:"0",
            pressure:"",
            temp_min:"",
            temp_max:"",
            country:"",
            date:"",
            sunrise:"",
            sunset:"",
            timezone: "",
            visibility: "",
            description: "",
            icon: "",
            main: "",
            windDirection: "217",
            windspeed: "3.6",
            windDescription:"",
            clouds:"",


        }

        
        this.handleChange = this.handleChange.bind(this)
        this.checkWindSpeed = this.checkWindSpeed.bind(this)

    }

    componentDidMount(){
        //do api call here
        this.getData(this.state.city)

    }

    handleChange(e, name) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        this.setState({ [name]: value },  () => {
            if (name==="zipcode") this.checkZipLength()

           });
      };

      checkWindSpeed(){

        let speed = this.state.windspeed

        switch(true){
            case (speed > 157):
                this.setState({windDescription:"Catastrophic damage will occur: A high percentage of framed homes will be destroyed, with total roof failure and wall collapse. Fallen trees and power poles will isolate residential areas. Power outages will last for weeks to possibly months. Most of the area will be uninhabitable for weeks or months."})
                break;
            case (speed > 130):
                this.setState({windDescription:"Catastrophic damage will occur: Well-built framed homes can sustain severe damage with loss of most of the roof structure and/or some exterior walls. Most trees will be snapped or uprooted and power poles downed. Fallen trees and power poles will isolate residential areas. Power outages will last weeks to possibly months. Most of the area will be uninhabitable for weeks or months."})
                break;
            case (speed > 111):
                this.setState({windDescription:"Devastating damage will occur: Well-built framed homes may incur major damage or removal of roof decking and gable ends. Many trees will be snapped or uprooted, blocking numerous roads. Electricity and water will be unavailable for several days to weeks after the storm passes."})
                break;
            case (speed > 96): 
                this.setState({windDescription:"Extremely dangerous winds will cause extensive damage: Well-constructed frame homes could sustain major roof and siding damage. Many shallowly rooted trees will be snapped or uprooted and block numerous roads. Near-total power loss is expected with outages that could last from several days to weeks."})
                break;
            case (speed > 75):
                this.setState({windDescription:"Very dangerous winds will produce some damage: Well-constructed frame homes could have damage to roof, shingles, vinyl siding and gutters. Large branches of trees will snap and shallowly rooted trees may be toppled. Extensive damage to power lines and poles likely will result in power outages that could last a few to several days."})
                break;
            default:
                    this.setState({windDescription:""})
        }
      }



      checkZipLength(){
          if(this.state.zipcode.length === 5)
            this.getData()
          this.setState({windDescription:""})
      }
      
	  
	   getData( cityID ) {
		  var url = "https://api.openweathermap.org/data/2.5/weather?"
		  
		  if  (this.state.zipcode.length === 5)
			    url += `&zip=${this.state.zipcode}`
			
		  //and finally add API key last
		  url += "&APPID=6c04d4350d3f8f1cff59124de08929b7";
		
		
		  fetch(url)  
		  .then(function(resp) { return resp.json() }) // Convert data to json
		  .then(function(data) {
			console.log(data);
			
			this.setState({
				temp:data.main.temp
			})
			
		  })
		  .catch(function() {
			// catch any errors
		  });
		
	   }




    render(){
		
/* 	
	function ucfirst(str,force){
          str=force ? str.toLowerCase() : str;
          return str.replace(/(\b)([a-zA-Z])/,
                   function(firstLetter){
                      return   firstLetter.toUpperCase();
                   });
     }


     $(function () {
         var focusedElement;
         $(document).on('focus', 'input', function () {
             if (focusedElement === this) return; //already focused, return so user can now place cursor at specific point in input.
             focusedElement = this;
             setTimeout(function () { focusedElement.select(); }, 100); //select all text in any field on focus for easy re-entry. Delay sightly to allow focus to "stick" before selecting.
         });
     })
 */

        return(
		
		
		<div id="weather" name="weather" style={{margin:"30px",border:"1px solid black",maxHeight:"250px",overflowX:"hidden", overflowY:"auto"}}>
					<Hr/>
                    <div className="row">
                        <div className="col-sm-5">
                
					<h1>{this.state.data.name} Weather</h1>
                    <div>
                        <h4>
						   {ucfirst(this.state.description,true)} 
							<img src={this.state.icon} alt="icon"></img>
							{Math.round(this.state.temp)}&deg;  
							Wind: 
							<img id="image_canv" alt="icon" src={Arrow} className="margin10" style={{transform: "rotate(" + this.state.windDirection + "deg)", height:"50px"}}/>
							{this.state.windspeed} m/h
						</h4>
                        <h5>
							<br/>Humidity: 
							<span className="margin10">{this.state.humidity} %	</span>
							<br/>
							Latitude: {this.state.lat}&nbsp;
							Longitude: {this.state.lon}
							<br/>Sunrise: 
							<span className="margin10">{(new Date(this.state.sunrise * 1000)).toLocaleTimeString()}</span> EST
							Sunset: 
							<span className="margin10">{(new Date(this.state.sunset * 1000)).toLocaleTimeString()}</span> EST
						</h5>
                        <br/>
						Not sure what I wish to do with this additional data from openweathermap.org:			
						<br/>pressure: 
						{this.state.pressure} hpa
						<br/>range: 
						{this.state.temp_min}
						{this.state.temp_max}
						
                        <div>
                        visibility: 
						{this.state.visibility} Meters
                        
                            <div className="inline" style={{border:"1px solid black"}}>
                                <input type="radio" id="dewey" name="drone" value="Meters"/>
                                <label htmlFor="dewey">Meters</label>
                                <input type="radio" id="louie" name="drone" value="Miles"/>
                                <label htmlFor="louie">Miles</label>
                            </div>
                        </div>
						<br/>clouds: 
						{this.state.clouds} %
						<br/>date: 
                   
                       { (new Date(this.state.date * 1000)).toLocaleDateString()}
						<br/>country: 
						{this.state.country}
						<br/>timezone: 
						{this.state.timezone}
                    </div>
                    <Hr/>
                </div>
                        <div id="weatherControl" name="weatherControl" className="col-sm-5" style={{height: "3em",margin:"30px", padding:"1em"}}>
                        Enter Zip Code: 
                        <input  type="number" 
                            id="zipcode" 
                            name="zipcode" 
                            placeholder={this.state.zipcode} 
                            maxLength="5" 
                            onChange={ (e) => this.handleChange(e, 'zipcode') }
                        />
                    
                    
                    <p style={{marginTop:"10px", padding:"10px",border:"1px solid black",whiteSpace:"nowrap"}}>
                            Change wind speed:
                            <input type="range" 
                                    id="windspeed"
                                    name="windspeed"
                                    min="0" 
                                    max="200"  
                                    step="0.01" 
                                    value= {this.state.windspeed} 
                                    className="inline slider" 
                                    onChange={ (e) =>{ this.handleChange(e, 'windspeed')
                                    this.checkWindSpeed() }
                                } 
                                    />
                                {this.state.windspeed} MPH
                        </p>

                        <p style={{fontSize:"smaller"}}>
                            {this.state.windDescription}
                        </p>

                        <p>
                            What is this about?  Here a request call is made to an API located at openweathermap.org providing weather data for US zip codes. 
                        </p>

                        <p>
                        No. Changing the windspeed will NOT affect the weather. Try it!
                        </p>
                    </div>
                    </div>
		</div>
        )
    }
}
