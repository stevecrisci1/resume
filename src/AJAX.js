import React from 'react'
//import $ from 'jquery'

export default function AJAX(){


    function showCustomer() {
        var xhttp;

        //var str = $("#tableSearchText")["0"].value
        
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {

            if (this.readyState ===0) document.getElementById("tableSearchResponse").innerHTML = "request not initialized"
            if (this.readyState ===1) document.getElementById("tableSearchResponse").innerHTML = "server connection established"
            if (this.readyState ===2)document.getElementById("tableSearchResponse").innerHTML = "request received"
            if (this.readyState ===3)document.getElementById("tableSearchResponse").innerHTML = "processing request"
            if (this.readyState ===4)document.getElementById("tableSearchResponse").innerHTML = "request finished and response is ready"
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById("tableSearchResponse").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "http://stevecrisci-003-site3.htempurl.com/person/1", true);
        xhttp.send();
      }


    return(

        <div className="row">
            <div className="col-sm-6">
                <h1>AJAX</h1>
                <h5>What is this about?</h5>
                Here a <b>XMLHttpRequest</b> is made to <b>http://stevecrisci-003-site3.htempurl.com/person/1</b> and the results are show.  Press GO to see the results.

                
            </div>
            <div className="col-sm-6">
                <button className="btn btn-primary" onClick={showCustomer}>Go</button>
                Response: 
                <span id="tableSearchResponse"></span>
            </div>
        </div>

    )
}
