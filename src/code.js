import React from 'react'

import Csharp from './csharp.js'

export default function Code(){
    return (
        <div>
            <h1>C#</h1>
            
            
            <div>
                <Csharp/>
            </div>


<div className="row margin10">
<div className="col-xs-4">
<h4>SharePoint</h4>
<h5>Creating a site with REST</h5>
<hr/>


	jQuery.ajax(<br/>
		&emsp;url: "https://&lt;site url&gt;/_api/web/webinfos/add", <br/>
		&emsp;type: "POST",<br/>
		&emsp;data: JSON.stringify(<br/>
			&emsp;&emsp;{'{'}'parameters': {'{'}<br/>
				&emsp;&emsp;'__metadata':  {'{'}'type': 'SP.WebInfoCreationInformation' {'}'},<br/>
				&emsp;&emsp;'Url': 'RestSubWeb',<br/>
				&emsp;&emsp;'Title': 'RestSubWeb',<br/>
				&emsp;&emsp;'Description': 'REST created web',<br/>
				&emsp;&emsp;'Language':1033,<br/>
				&emsp;&emsp;'WebTemplate':'sts',<br/>
				&emsp;&emsp;'UseUniquePermissions':false{'}'}<br/>
			&emsp;{'}'}<br/>
		&emsp;),<br/>
		&emsp;headers: {'{'}<br/>
			&emsp;&emsp;"accept": "application/json; odata=verbose",<br/>
			&emsp;&emsp;"content-type":"application/json;odata=verbose",<br/>
			&emsp;&emsp;"content-length": &lt;length of post body&gt;,<br/>
			&emsp;&emsp;"X-RequestDigest": $("#__REQUESTDIGEST").val()<br/>
		&emsp;{'}'},<br/>
		&emsp;success: doSuccess,<br/>
		&emsp;error: doError<br/>
	&emsp;{'}'});<br/>


	
</div>
<div className="col-xs-4 margin10">
<h4>SharePoint</h4>
<h5>Creates a list.</h5>
<hr/>

jQuery.ajax({'{'}<br/>
&emsp;		url: "https://&lt;site url&gt;/_api/web/lists",<br/>
        &emsp;type: "POST",<br/>
        &emsp;data:  JSON.stringify({'{'} <br/>
		
		
		&emsp;&emsp;'__metadata': {'{'} 'type': 'SP.List' {'}'},<br/> 
		&emsp;&emsp;'AllowContentTypes': true,<br/>
		&emsp;&emsp;'BaseTemplate': 100,<br/>
		&emsp;&emsp;'ContentTypesEnabled': true,<br/>
		&emsp;&emsp;'Description': 'My list description',<br/>
		&emsp;&emsp;'Title': 'Test' {'}'}<br/>
&emsp;),<br/>
        &emsp;headers: {'{'}<br/>
            &emsp;&emsp;"accept": "application/json;odata=verbose",<br/>
            &emsp;&emsp;"content-type": "application/json;odata=verbose",<br/>
      &emsp;      &emsp;"content-length": &lt;length of post body&gt;,<br/>
&emsp;            &emsp;"X-RequestDigest": $("#__REQUESTDIGEST").val()<br/>
		&emsp;{'}'},<br/>
        &emsp;success: doSuccess,<br/>
        &emsp;error: doError<br/>
{'}'});<br/>




</div>
<div className="col-xs-3 margin10">
<h4>SharePoint</h4>
<h5>Updating List</h5>
<hr/>


jQuery.ajax({'{'}<br/>
        &emsp;url: "https://&lt;site url&gt;/_api/web/lists/GetByTitle('Test')",<br/>
        &emsp;type: "POST",<br/>
        &emsp;data: JSON.stringify({'{'} '__metadata': {'{'} <br/>
		&emsp;&emsp;'type': 'SP.List' {'}'}, <br/>
		&emsp;&emsp;'Title': 'New title' {'}'}),<br/>
        &emsp;headers: {'{'}<br/>
            &emsp;&emsp;"X-HTTP-Method":"MERGE",<br/>
            &emsp;&emsp;"accept": "application/json;odata=verbose",<br/>
            &emsp;&emsp;"content-type": "application/json;odata=verbose",<br/>
            &emsp;&emsp;"content-length": &lt;length of post body&gt;,<br/>
            &emsp;&emsp;"X-RequestDigest": $("#__REQUESTDIGEST").val(),<br/>
            &emsp;&emsp;"IF-MATCH": "*"<br/>
		&emsp;{'}'},<br/>
        &emsp;success: doSuccess,<br/>
        &emsp;error: doError<br/>
{'}'});




</div>
</div>

        </div>
    )
}
