import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Switch, Route } from 'react-router-dom'

import Skills from './skills.js'
import Experience from './experience.js'
import Education from './education.js'
import References from './references.js'
import Samples from './samples.js'

export default function Routercode () {
  return (
    <div>
      <div>
        <Navbar bg='dark' expand='xl'>
          <Navbar.Brand href='/'>
            <h1 style={{ color:'white', position: 'relative', left: '50px' }}>
              STEVE CRISCI
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav style={{ position: 'relative', left: '100px', top: '0px' }}>
              <div className="navButtonDiv" href="/">
                <Nav.Link href='/' style={{ color: 'orange' }}><span class="navButtonText">Home</span></Nav.Link>
              </div>
              <Nav.Link className="navButtonDiv" href='/skills' style={{ color: 'orange' }}><span class="navButtonText">Skills</span></Nav.Link>
              <Nav.Link className="navButtonDiv"  href='/experience' style={{ color: 'orange' }}><span class="navButtonText">Experience</span></Nav.Link>
              <Nav.Link className="navButtonDiv"  href='/education' style={{ color: 'orange' }}><span class="navButtonText">Education</span></Nav.Link>
              <Nav.Link className="navButtonDiv"  href='/references' style={{ color: 'orange' }}><span class="navButtonText">References</span></Nav.Link>
              {/* <Nav.Link className="navButtonDiv"  href='/samples' style={{ color: 'orange' }}><span class="navButtonText">Samples</span></Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
          <div className='col-sm-2' style={{marginLeft:"auto", marginRight:"auto", backgroundColor: 'orange' }}>
            <h5 style={{textAlign:"center"}}>
              RESUME
            </h5>
            <div className="col-sm-6" style={{ display: 'block', float: 'left' }}>
              <a
                href='http://www.stevecrisci.com/SteveCrisci.docx'
                rel='noopener noreferrer'
                target='_blank'
                download
              >
                <div className="downloadButtonDiv">
                  <h3>DOC</h3>
                </div>
              </a>
            </div>
            <div className="col-sm-6" style={{ display: 'block', float: 'left', paddingLeft: '20px' }}>
              <a
                href='http://www.stevecrisci.com/SteveCrisci.pdf'
                rel='noopener noreferrer'
                target='_blank'
                download
              >
                <div className="downloadButtonDiv">
                  <h3>PDF</h3>
                </div>
              </a>
            </div>
          </div>
        </Navbar>
        <div className="row" style={{backgroundColor:"yellow", border:"2px solid black"}}>
        <div className="col-sm-6" style={{textAlign:"center"}}>
          <a href="mailto:steve_crisci@yahoo.com">STEVE_CRISCI@YAHOO.COM</a>
        </div>
          <div className="col-sm-6" style={{textAlign:"center"}}>
            <h5>804-982-1427</h5>
          </div>
        </div>
      </div>

      <Switch>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/experience'>
          <Experience />
        </Route>
        <Route path='/education'>
          <Education />
        </Route>
        <Route path='/references'>
          <References />
        </Route>
        <Route path='/samples'>
          <Samples />
        </Route>
      </Switch>
    </div>
  )
}
