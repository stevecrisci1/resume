import React from 'react'

export default function Code(){


	return (
<div id="showForeach" name="showForeach" className="codeblock" style={{display:"none", backgroundColor:"white",margin:"30px", border:"1px solid black"}}>
            		
	<span style={{margin:"30px"}}></span>@foreach (var customer in Model.Customers)<br/>
	<span style={{margin:"30px"}}></span>&#123;<br/>
	<span style={{margin:"40px"}}></span>&lt;li&gt; @customer.Name &lt;/li&gt;<br/>
	<span style={{margin:"30px"}}></span>&#125;<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	
	
	
</div>

	)
}