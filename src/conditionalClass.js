import React from 'react'

export default function ConditionalClass(){

return(

		<div id="conditionalClass" name="conditionalClass" className="codeblock" style={{display:"none", backgroundColor:"white",margin:"30px", border:"1px 	solid black"}}>
			<span style={{margin:"20px"}}></span>@&#123;<br/>
			<span style={{margin:"30px"}}></span>var className = Model.Customers.Count > 5 ? "popular" : null;<br/>
			<span style={{margin:"20px"}}></span>&#125;<br/>
			<span style={{margin:"20px"}}></span>&lt;h2 class="@className"&gt; @Model.Movie.Name &lt;/h2&gt;<br/>
			<br/>
			<br/>
			<br/>
			
		</div>
	)
}