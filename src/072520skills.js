import React from 'react'
import Image from './picture_msnet.js'

export default function Skills(){

	
function showCVFox(event){
	var elementId = event.target.id; //moreCvfox
	elementId = elementId.replace("more","").toLowerCase();
	const fox = document.getElementById(elementId);
	if (fox == null){
		console.log("missing",event.target.name)
		return
	}
	fox.style.visibility="visible"
	fox.style.position = "absolute";
	fox.style.top = "150px";
	fox.style.left = "0px";

}


var years = [{subject:"HTML",date:2007},
{subject:"CSS",date:2008},
{subject:"C#",date:2008},
{subject:"SQL",date:1992},
{subject:"MS SQL ",date: 2006},
{subject:".NET VB ",date: 2003},
{subject:".NET C# ",date: 2008},
{subject:"Javascript ",date: 2009},
{subject:"AJAX ",date: 2007},
{subject:"REST API ",date: 2016},
{subject:"VSS/TFS",date: 2006},
{subject:"Visual Studio",date: 2008},
{subject:"XML ",date: 2008},
{subject:"JSON ",date: 2016},
{subject:"MVC3 ",date: 2012},
{subject:"MVC5 ",date: 2014},
{subject:"Jquery",date:2016},
{subject:"HL7 ",date: 2006},
{subject:"NoSQL ",date: 2016},
{subject:"RAZOR ",date: 2014},
{subject:"Bootstrap ",date: 2014},
{subject:"MS CRM ",date: 2014},
{subject:"MarkLogic ",date: 2016},
{subject:"AngularJS ",date: 2016},
{subject:"React ",date: 2018},
{subject:"Agile",date:2014},
{subject:"LINQ ",date: 2008},
{subject:"Selenium ",date:2017},
{subject:"SSRS ",date: 2011},
{subject:"SSIS ",date: 2011},
{subject:"VB Script ",date: 2011},
{subject:"ASP.NET ",date: 2007},
{subject:"Dundas Charts ",date: 2009},
{subject:"WCF",date:2015},
{subject:"MongoDB",date:2016},
{subject:"Node",date:2016},
{subject:"Entity Framework 6",date:2016},
{subject:"ESRI GIS",date:1996},
]



function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const subjectA = a.subject.toUpperCase();
  const subjectB = b.subject.toUpperCase();

  let comparison = 0;
  if (subjectA > subjectB) {
    comparison = 1;
  } else if (subjectA < subjectB) {
    comparison = -1;
  }
  return comparison;
}

years.sort(compare)

var today = new Date
var currentYear = today.getFullYear()

years.forEach(element => console.log(element.subject + " - " + (currentYear - element.date) + " years"));





return(

<div id="skillsPart" className="skills part">
	<div className="title">
			<h3>SKILLS</h3>
		</div>
<div id="skillsHeader" className="headline">
			<div id="skills" className="row">
		
				  <div className="column">
				  <div id="frontendTitle">
				<h3>Front End</h3>
					<div id="frontend">
						<ul>
						<li>
						HTML5
						</li>
						<li>
						Javascript 
						</li>
						<li>
						Angular
						</li>
						<li>
						React
						</li>
						<li>
						Bootstrap 
						</li>
						<li>
						CSS3
						</li>
						<li> 
						Jquery 
						</li>
						<li>
						XML
						</li>
						<li> 
						JSON
						</li>
						<li>
						HL7 
						</li>
						<li>
						Crystal Reports
						</li>
						
						</ul>
					</div>
				</div></div>
				  <div className="column">
				  <div id="languageTitle">
				<h3>Middle Tier</h3>
					<div id="language">
					<ul>
					<li>
					ASP <span id="morebrainbench_asp" onClick={showCVFox} className="more">View...</span>
						</li>
						<li>
					ASP.NET 
					<span id="moreasp" onClick={showCVFox} className="more">View...</span>
						</li>
						<li>
					C#.NET  <span id="morebrainbench_c" onClick={showCVFox} className="more">View...</span>
						</li>
						<li>
					MVC5
						</li>
						<li> 
					Entity Framework 6 
						</li>
						<li>
					REST - API 
						</li>
						<li>
					SOAP - API
						</li>
						<li>
					RAZOR
						</li>
						<li> 

					Selenium
						</li>
						<li>
					
					TFS
						</li>
						<li> 
					GIT 
						</li>
						
					</ul>
					</div>
				</div>
				  </div>
				  <div className="column">
				  <div id="backendTitle">
					<h3>Back End</h3>
					
					<div id="backend">
						<ul>
						<li>
						MS-SQL <span id="moresql_test" onClick={showCVFox} className="more">View...</span>
						</li>
						<li>
						MongoDB 
						</li>
						<li>
						MarkLogic 
						</li>
						<li>
						NoSQL 
						</li>
						<li>
						NODE
						</li>
						<li>
						MySQL
						</li>
						</ul>
					</div>
				</div>
				  </div>
			</div>
		</div>
		
		<Image name ="sql_test"/>
		<Image name ="brainbench_asp"/>
		<Image name ="brainbench_c"/>
		<Image name ="asp"/>
		
		
		</div>
		
		)}
		
       