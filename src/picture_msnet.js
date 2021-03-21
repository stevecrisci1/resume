import React from 'react'

function hidePictureDiv(event){
	const fox = document.getElementById(event.target.name);
	if (fox == null){
		console.log("missing",event.target.name)
		return
	}
	fox.style.visibility="visible"
	fox.style.position = "absolute";
	fox.style.top = "1000px";
	fox.style.left = "3000px";
	
}


export default function Image(props) {
	return (

         <div id={props.name}  className="popup" onClick={hidePictureDiv}>
			<img name={props.name} src={require('./images/' + props.name   + '.jpg')} alt={props.name} />
         </div>

 )
}
