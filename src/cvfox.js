import React from 'react'
import cvfox from './images/cvfox.jpg'

function hideCvfox(){
	
	const fox = document.getElementById("cvfox");
	fox.style.display="none"
	fox.style.position = "absolute";
	fox.style.top = "1000px";
	fox.style.left = "3000px";
	
}


export default function Cvfox(props) {

	return (

         <div id={props.name} name="cvfox" className="cvfox" onClick={hideCvfox}>

			<img src={cvfox} alt="cvfox"/>

         </div>

 )
}
