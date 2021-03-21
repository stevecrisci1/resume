import React from 'react'


export default function Movie(props){



	var displayMovie = <div style={{margin:"30px"}} className="inline">
			<hr/>
			Title: {props.results.Title}
			<br/>Type: {props.results.Type}
			<br/>Year: {props.results.Year}
			<br/><button id={props.results.imdbID} onClick={props.getMore}>More...</button>
			<hr/>
		</div>
	
	return(
		<div>
			<div style={{border:"1px solid black",margin:"10px"}}>
				<img src={props.results.Poster} width="100" style={{verticalAlign:"top"}} alt={props.results.Title}/>
				{displayMovie}
			</div>
		</div>
	)
}