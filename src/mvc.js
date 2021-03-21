import React from 'react'
import $ from 'jquery'
import CustomRouter from './customRouter.js'
import ForEach from './foreach.js'
import ConditionalClass from './conditionalClass.js'


function showCustomRouter(){
    $(".codeblock").hide()
    $("#customrouter").show()
}

function showForeach(){
    $(".codeblock").hide()
    $("#showForeach").show()
}

function showConditionalClass(){
    $(".codeblock").hide()
    $("#conditionalClass").show()
}

export default function MVC(){
        
    return (
        <div id="mvc" style={{dispay:"none"}}>
         
            <button style={{margin:"10px"}} onClick={showCustomRouter}>Custom Router</button>
            
			<button style={{margin:"10px"}} onClick={showForeach}>For Each</button>
			
			<button style={{margin:"10px"}} onClick={showConditionalClass}>Conditional Class</button>
			
                 <CustomRouter/>
			    <ForEach/>
				 <ConditionalClass/>
            
        </div>
    )
}