import React from 'react'
import Hr from './hr.js'
import $ from 'jquery'


function checkButton(){
    $("#buttonName").removeAttr('disabled');
    debugger
    alert("Thank you. Come again!")
    
}
export default function Form (){
    return(
        <div id="title" name="title" style={{ margin: "30px", border: "1px solid black" }}>
                <Hr />
                <h1>Bootstrap4 Form DEMO</h1>
                <h4>Any data entered DOES NOT get saved anywhere. This is for demo purposes only.</h4>
                <h3>Check the 'Check me out to finish form' checkbox then press submit without entering in any data to see error messages.</h3>
                <div className="inline">
                    <form>
						<div className="form-row">
							<div className="form-group col-md-12">
								<label htmlFor="name">Name</label>
								*<input type="text" required className="form-control" id="name" placeholder="Name"/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Email</label>
								*<input type="email" required className="form-control" id="inputEmail4" placeholder="Email"/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Password</label>
								*<input type="password" required className="form-control" id="inputPassword4" placeholder="Password"/>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress">Address</label>
							<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress2">Address 2</label>
							<input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputCity">City</label>
								<input type="text" className="form-control" id="inputCity" placeholder="City"/>
							</div>
							<div className="form-group col-md-4">
								<label htmlFor="inputState">State</label>
								<select id="inputState" className="form-control">
									<option>Choose...</option>
									<option>AL</option>
									<option>CA</option>
									<option>DE</option>
									<option>FL</option>
									
									<option>GA</option>
									<option>HI</option>
									<option>KA</option>
									<option>VA</option>
								</select>
							</div>
							<div className="form-group col-md-2">
								<label htmlFor="inputZip">Zip</label>
								<input type="text" className="form-control" id="inputZip"/>
							</div>
						</div>
						<div className="form-group">
							<div className="form-check">
								<div className="form-group col-md-2">
									<input className="form-check-input" type="checkbox" id="gridCheck" onClick={checkButton}/>
								</div>
								<div className="form-group col-md-6">
									<label id="finishedForm" className="form-check-label" htmlFor="gridCheck" >
										Check me out to finish form
									</label>
								</div>
							</div>
						</div>
                        <button id="buttonName" name="buttonName" type="submit" 
                        disabled 
                        className="btn btn-primary">
                            REGISTER
                        </button>
                    </form>




                </div>
            </div>
    )}