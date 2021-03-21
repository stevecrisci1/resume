import React from 'react'

function changeColor(e){
		if (e.target.classList.contains('dead')){
			e.target.classList.remove('dead')
			e.target.classList.add('live')
		}else{
			e.target.classList.remove('live')
			e.target.classList.add('dead')
		}
}

export default function Cell(props){

	return(
		<div id={props.name} name={props.name} className="cell dead" onClick={changeColor} >
			
		</div>
		
	)

}