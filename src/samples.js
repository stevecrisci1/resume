import React from 'react'
import $ from 'jquery'
import Tasklist from './tasklist.js'
import Form from './form.js'
//import StarWars from './starwars.js'
import Blocks from './blocks.js'
import OMDb from './OMDb.js'
import Weather from './weather.js'
import Life from './life.js'
import Bootdemo from './bootdemo.js'
import MSSQL from './mssequel.js'
import AJAX from './AJAX.js'
import Person from './person.js'
import Code from './code.js'
import MVC from './mvc.js'

function ajax(){
  $('.exampleBlock').hide();
  $("#ajaxSample").toggle();
}

function mssql() {
  $('.exampleBlock').hide();
  $("#mssqlSample").toggle();
}

function weather() {
  $('.exampleBlock').hide();
  $("#weatherSample").toggle();
}

function minesweeper() {
  $('.exampleBlock').hide();
  $("#minesweeperSample").toggle();
}


function conway() {
  $('.exampleBlock').hide();
  $("#conwaySample").toggle();
}


// function starwars() {
  // $('.exampleBlock').hide();
  // $("#starWarsSample").toggle();
// }


function movies() {
  $('.exampleBlock').hide();
  $("#moviesSample").toggle();
}

function bootdemo() {
  $('.exampleBlock').hide();
  $("#bootdemoSample").toggle();
}

function tasklist() {
  $('.exampleBlock').hide();
  $("#tasklistSample").toggle();
}

function bootform() {
  $('.exampleBlock').hide();
  $("#bootformSample").toggle();
}

function code() {
  $('.exampleBlock').hide();
  $("#codeSample").toggle();
}



function mvc() {
  $('.exampleBlock').hide();
  $("#mvc").toggle();
}
export default function samples() {
  return (
    <div>


      <h1 className="inline">Samples</h1>



      <button className="sampleButton inline btn btn-primary" onClick={mvc}>
        MVC
      </button>


      <button className="sampleButton inline btn btn-primary" onClick={code}>
        Code Library
      </button>


      <button className="sampleButton inline btn btn-primary" onClick={ajax}>
        AJAX
      </button>
      
      <button className="sampleButton inline btn btn-primary" onClick={mssql}>
        MS SQL
      </button>
      
      <button className="sampleButton inline btn btn-primary" onClick={weather}>
        Weather API
      </button>

      <button className="sampleButton inline btn btn-primary" onClick={minesweeper}>
        Minesweeper
      </button>

      <button className="sampleButton inline btn btn-primary" onClick={conway}>
        Game of Life
      </button>


      <button className="sampleButton inline btn btn-primary" onClick={movies}>
        Movies API
      </button>

      <button className="sampleButton inline btn btn-primary" onClick={bootdemo}>
        Bootstrap 4 Demo
      </button>

      <button className="sampleButton inline btn btn-primary" onClick={tasklist}>
        React Task List
      </button>

      <button className="sampleButton inline btn btn-primary" onClick={bootform}>
        Bootstrap Registration Form
      </button>


      <div id="mvc" name="mvc" className="exampleBlock" style={{ display: "none", overflow: "hidden" }}>
        <MVC/>
      </div>
	  
      <div id="codeSample" name="codeSample" className="exampleBlock" style={{ display: "none", overflow: "hidden" }}>
        <Code/>
      </div>

      <div id="personSample" name="personSample" className="exampleBlock" style={{ display: "none", overflow: "hidden" }}>
        <Person/>
      </div>

      <div id="ajaxSample" name="ajaxSample" className="exampleBlock" style={{ display: "none", overflow: "hidden" }}>
        <AJAX/>
      </div>

      <div id="mssqlSample" name="mssqlSample" className="exampleBlock" style={{ display: "none", overflow: "hidden" }}>
        <MSSQL/>
      </div>

      <div id="weatherSample" name="weatherSample" className="exampleBlock" style={{ display: "none", overflow: "hidden" }}>
        <Weather />
      </div>

      <div id="minesweeperSample" name="minesweeperSample" className="exampleBlock" style={{ display: "none" }} >
        <Blocks />
      </div>

      <div id="conwaySample" name="conwaySample" className="exampleBlock" style={{ display: "none" }} >
        <Life />
      </div>


      <div id="moviesSample" name="moviesSample" className="exampleBlock" style={{ display: "none" }}>
        <OMDb />
      </div>

      <div id="bootdemoSample" name="bootdemoSample" className="exampleBlock" style={{ display: "none" }}>
        <Bootdemo />
      </div>

      <div id="tasklistSample" name="tasklistSample" className="exampleBlock" style={{ display: "none" }}>
        <Tasklist />
      </div>

      <div id="bootformSample" name="bootformSample" className="exampleBlock" style={{ display: "none" }}>
        <Form />
      </div>

    </div>
  )
}