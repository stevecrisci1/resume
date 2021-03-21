import React from 'react'
import cvfox from './images/cvfox.jpg'
import msnet from './images/msnet.jpg'
import asp from './images/asp.jpg'
import dreamweaver from './images/dreamweaver.jpg'
import securitycertificate from './images/securitycertificate.jpg'

function hidePictureDiv(event){
	const fox = document.getElementById(event.target.name);
	fox.style.display="none"
	fox.style.position = "absolute";
	fox.style.top = "1000px";
	fox.style.left = "3000px";
	
}


export default function Cvfox(props) {
	return (
	<>
         <div id={props.name} onClick={hidePictureDiv}>
			<img name="cvfox"  className="cvfox" src={cvfox} alt="cvfox" />
         </div>
		  <div id={props.name}  onClick={hidePictureDiv}>
			<img name="msnet" className="cvfox" src={msnet} alt="msnet"/>
         </div>
		  <div id={props.name} onClick={hidePictureDiv}>
			<img name="asp"  className="cvfox" src={asp} alt="asp"/>
         </div>
		  <div id={props.name} onClick={hidePictureDiv}>
			<img name="dreamweaver"  className="cvfox" src={dreamweaver} alt="dreamweaver"/>
         </div>
		  <div id={props.name} onClick={hidePictureDiv}>
			<img name="securitycertificate"  className="cvfox" src={securitycertificate} alt="securitycertificate"/>
         </div>
	 </>
 )
}
