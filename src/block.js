import React from 'react'

export default function Block(props){
    
    function markSpot(e) {  
        e.preventDefault()
        if (props.gameOver)
            return
        if(document.getElementById(e.target.id).innerText.length >0)
            return

        if (document.getElementById(e.target.id).style.backgroundColor === "" || document.getElementById(e.target.id).style.backgroundColor === "grey")
            document.getElementById(e.target.id).style.backgroundColor = "red"
        else
            document.getElementById(e.target.id).style.backgroundColor = "grey"
      }

    return(
        <div onClick={props.hitBlock} 
            onContextMenu={markSpot}
            id={props.name} 
            name={props.name} 
            className="cell"
            key={props.key} >
            
            <img onContextMenu={markSpot} src={ require('./bomb.png')} height="28px"  width="28px" className="hiddenBomb" alt="O"/>

        </div>
     )
}