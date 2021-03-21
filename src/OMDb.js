
import React from 'react'
import Movie from './movie.js'
import Hr from './hr.js'
import MoreMovie from './moremovie.js'

export default class OMDb extends React.Component{

	constructor(){
		super()
		this.state = {
			searchTerm:"",
			type:"xml",
			y:"",
			r:[],
			page:"",
			apikey:"918b2a59",
			result:"",
			value: ''
		}
		this.submitForm = this.submitForm.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleTitleChange = this.handleTitleChange.bind(this)
		this.handleYearChange = this.handleYearChange.bind(this)
		this.getMore = this.getMore.bind(this)
	}
	
	//https://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1&r=xml&apikey=918b2a59
			/*
				s			Yes		<empty>							Movie title to search for.
				type		No		movie, series, episode	<empty>	Type of result to return.
				y			No		<empty>							Year of release.
				r			No		json, xml				json	The data type to return.
				page 		New!	No	1-100				1		Page number to return.
				callback	No								<empty>	JSONP callback name.
			*/

	componentDidMount(){
	}
	
	handleChange(event) {
		// const target = event.target;
		// const value = target.type === 'checkbox' ? target.checked : target.value;
		// const name = target.name;
		// this.setState({
		  // [name]: value
		// });
	}
	
	
	handleTitleChange(event) {
		this.setState({searchTerm: event.target.value});
	}

	handleYearChange(event) {
		this.setState({y: event.target.value});
	}
  /*
	handleChange(e) {
		this.setState({ 
			[e.target.name] : e.target.value 
		});
	}

	*/
	
	submitForm(event){
		event.preventDefault()
		
		// const fetchParameters = {
		  // method: 'GET',
		  // mode: 'cors'
		// };
		
		let url = "https://www.omdbapi.com/?"
		
		if (this.state.searchTerm.length > 0)
			url += "&s=" + this.state.searchTerm
		/*if (this.state.type.length > 0)
			url += "&type=" + this.state.type*/
		if (this.state.y.length > 0)
			url += "&y=" + this.state.y
		if (this.state.r.length > 0)
			url += "&r=" + this.state.r

		url += "&apikey=" + this.state.apikey //918b2a59
	
		console.log(url)
		
		
		fetch(url).then(response => response.json()).then(data => {
			//Response: "False", Error: "Something went wrong."
			if (data.Response !== "False")
				this.setState({result:data.Search})
			else
				this.setState({result:data.Error})
		});

		
		/*fetch(url)
		.then(response => response.json())
		.then(data => {
			//Response: "False", Error: "Something went wrong."
			if (data.Response !== "False")
				this.setState({result:data.Search})
			else
				this.setState({result:data.Error})
		});*/
		
		
	}
	


	getMore(event){
		const id = event.target.id
		let url = "https://www.omdbapi.com/?i=" + id 
		const fetchParams = {
			method: 'GET',
			mode: 'cors'
		  };
		  url += "&apikey=" + this.state.apikey //918b2a59
		  console.log("Getting more from " + url)
		  fetch(url, fetchParams)
		  .then(response => response.json())
		  .then(data => {
			  //Response: "False", Error: "Something went wrong."
			  if (data.Response !== "False"){
				this.setState({result:data})
			  }
			  else{
				  this.setState({result:data.Error})
			  }
		  })
		  console.log("Result:",this.state.result);
	}
	  
	render(){
		console.log(this.state.result);
		var movieData
	
		if(this.state.result){
			if (this.state.result !== "Too many results."){
				if(typeof(this.state.result) === "object"){

					if (Array.isArray(this.state.result)){
						movieData = this.state.result.map((data) => {
							return (
							<div key={data.imdbID}>
								<Movie getMore={this.getMore} apikey={this.state.apikey} results={data}/>
							</div>
							);
						});
					}else{
						//this is not an array
						movieData =<div>
							<MoreMovie results={this.state.result}/>
						</div>
					} 
				}
					
			}else{
				movieData = (<div>Too many results</div>)
			}
		}
	


		return(
			<div id="movies" name="movies" style={{border:"1px solid black",margin:"30px", maxHeight:"350px", overflowY: "hidden"}}>
				<Hr/>
				<h1>Movie Database</h1>
				<div className="inline" style={{width:"25%", textAlign:"end",verticalAlign:"top"}}>
					<form onSubmit={this.submitForm}>
						<br/>Title:	<input id="title" 		name="title" 		type="text" onChange={this.handleTitleChange} value={this.state.searchTerm}/>
						<br/><input type="Submit"   disabled={!this.state.searchTerm}/>
					</form>
				</div>
				<div id="resultDiv"  style={{width:"60%", overflowY:"auto", maxHeight:"250px"}} className="inline">
					{movieData}
				</div>
				<Hr/>
			</div>
		)
	}
}
