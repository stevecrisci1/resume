import React from 'react'
import $ from 'jquery'
import Showcode from './showcode'


function getdataset(){
    $(".codeblock").hide()
    $("#getdataset").show()
}

function getdatareader(){
    $(".codeblock").hide()
    $("#getdatareader").show()
}

function uppercasefirst(){
    $(".codeblock").hide()
    $("#uppercasefirst").show()
}


function isvalidimage(){
    $(".codeblock").hide()
    $("#isvalidimage").show()
}

export default function Charp(){
        
    return (
        <div id="csharp" style={{dispay:"none"}}>
         
            <button style={{margin:"10px"}} onClick={getdataset}>DataSet</button>
            <button style={{margin:"10px"}} onClick={getdatareader}>DataReader</button>
            <button style={{margin:"10px"}} onClick={uppercasefirst}>Capitalize Word</button>
            
            <button style={{margin:"10px"}} onClick={isvalidimage}>IsValidImage</button>
            
            <div style={{backgroundColor:"white",margin:"30px", border:"1px solid black"}}>
                <Showcode/>
            </div>

        </div>
    )
}