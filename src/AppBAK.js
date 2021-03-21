import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Experience from './experience.js'
import Skills from './skills.js'
import Education from './education.js'
import Menu from './menu.js'
import References from './references.js'
import Float from './float.js'

import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";


class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			showSkills:false,
			showExperience:false,
			showEducation:false,
			showReferences:false
		}
		this.handleClick = this.handleClick.bind(this)
	}
	
	//this is passed as  onclick={this.handleClick}  because we need 'this' for the various show'Variables' mentioned.
	handleClick(event){
		let targetName =  event.target.name.replace("Menu","")
		let selectedKey = "show" + targetName[0].toUpperCase() + targetName.toString().slice(1)
		
		this.setState({showSkills:false})
		this.setState({showExperience:false})
		this.setState({showEducation:false})
		this.setState({showReferences:false})
		this.setState({showTools:false})
		
		/*
		 if (selectedKey === "showSkills")
			 this.setState({showSkills:!this.state.showSkills}, () => console.log(this.state.showSkills))
		 if (selectedKey === "showExperience")
			 this.setState({showExperience:!this.state.showExperience},() => console.log(this.state.showExperience))
		 if (selectedKey === "showEducation")
			 this.setState({showEducation:!this.state.showEducation},() => console.log(this.state.showEducation))
		 if (selectedKey === "showReferences")
			 this.setState({showReferences:!this.state.showReferences},() => console.log(this.state.showReferences))
		 if (selectedKey === "showTools")
			 this.setState({showTools:!this.state.showTools},() => console.log(this.state.showTools))
		*/
		
	}


	handleInputChange(event){
		alert("checked")
	}



  
	render(){
		const skills = this.state.showSkills? <Skills/>: null
		const experience = this.state.showExperience ? <Experience/> : null
		const education = this.state.showEducation ? <Education/> : null
		const references = this.state.showReferences ? <References/> : null
		const dontShow = skills + experience + education + references
		return (
			<div className="App">
			  <header className="App-header">



			<Navbar bg="light" expand="lg">
			  <Navbar.Brand href="#home"><h1>STEVE CRISCI</h1></Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
				<Nav 
			  onSelect={selectedKey =>   
					{
						this.setState({showSkills:false})
						this.setState({showExperience:false})
						this.setState({showEducation:false})
						this.setState({showReferences:false})
						this.setState({showTools:false})
						if (selectedKey === "showSkills")
							this.setState({showSkills:!this.state.showSkills}, () => console.log(this.state.showSkills))
						if (selectedKey === "showExperience")
							this.setState({showExperience:!this.state.showExperience},() => console.log(this.state.showExperience))
						if (selectedKey === "showEducation")
							this.setState({showEducation:!this.state.showEducation},() => console.log(this.state.showEducation))
						if (selectedKey === "showReferences")
							this.setState({showReferences:!this.state.showReferences},() => console.log(this.state.showReferences))
						if (selectedKey === "showTools")
							this.setState({showTools:!this.state.showTools},() => console.log(this.state.showTools))
					}	
			  }>
      <Nav.Link href="showSkills">Skills</Nav.Link>
      <Nav.Link href="showExperience">Experience</Nav.Link>
      <Nav.Link href="showEducation">Education</Nav.Link>
       <Nav.Link href="showReferences">References</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>



	<div className="inline"><a href="mailto:steve_crisci@yahoo.com​">steve_crisci@yahoo.com</a></div>    
	<div className="inline">804-982-1427 </div>               ​		​	
	<div className="inline" style={{marginTop:"auto", float:"right"}}>
		
			<a href="./SteveCrisci2019.docx" download>
			Download Resume</a>
	
	</div>


				<div className="clearFix"/>
					

					/* <div className="menuSection">
						 <Menu onclick={this.handleClick} buttonName="skillsMenu" show={this.state.showSkills}/>
						 <Menu onclick={this.handleClick} buttonName="experienceMenu" show={this.state.showExperience}/>
						 <Menu onclick={this.handleClick} buttonName="educationMenu" show={this.state.showEducation}/>
						 <Menu onclick={this.handleClick} buttonName="referencesMenu" show={this.state.showReferences}/>
						</div>
					 */
					<div className="clearFix"/>
				
				</header>
				<br/><br/><br/>
					<div>
						<Float name="React" leftFlex="1" topFlex="1" dontShow={dontShow}/>		
						<Float name="Angular" leftFlex="1" topFlex="1" dontShow={dontShow}/>	
						<Float name="SQL" leftFlex="1" topFlex="1" dontShow={dontShow}/>	
						<Float name="Bootstrap" leftFlex="1" topFlex="1" dontShow={dontShow}/>	
						<Float name="NODE" leftFlex="-1" topFlex="-1" dontShow={dontShow}/>	
						<Float name="CSharp" leftFlex="-1" topFlex="-1" dontShow={dontShow}/>	
						<Float name="Javascript" leftFlex="-1" topFlex="-1" dontShow={dontShow}/>	
						<Float name="MVC" leftFlex="-1" topFlex="-1" dontShow={dontShow}/>	
					</div>
					{skills}
					{experience}
					{education}
					{references}
				<br/>


			</div>
		);
	}
}

export default App;
