/*
Any live cell with fewer than two live neighbours dies, as if by underpopulation.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/
import React from 'react'
import Cell from './lifecell.js'
import Hr from './hr.js'


export default class Life extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			population: 0,
			thisRunning: false,
		}

		this.handleChange = this.handleChange.bind(this)
		this.createArray = this.createArray.bind(this)
		this.start = this.start.bind(this)
		this.clear = this.clear.bind(this)
		this.myTimer = this.myTimer.bind(this)
		this.goRandom = this.goRandom.bind(this)
	}

	handleChange(e, name) {
		const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

		this.setState({ [name]: value }, () => {
			if (name === "zipcode") this.checkZipLength()

		});
	};

	start() {
		this.setState({ thisRunning: !this.state.thisRunning });

		document.getElementsByName('start')[0].style.backgroundColor === "red" ?
			document.getElementsByName('start')[0].style.backgroundColor = "green" :
			document.getElementsByName('start')[0].style.backgroundColor = "red"

		document.getElementsByName('start')[0].innerText === "Stop" ?
			document.getElementsByName('start')[0].innerText = "Start" :
			document.getElementsByName('start')[0].innerText = "Stop"

	}

	clear() {
		while (document.getElementsByClassName('live').length > 0) {
			var x = document.getElementsByClassName('live')
			x[0].classList.add('dead')
			x[0].classList.remove('live')
		}
	}

	createArray() {
		var array = new Array(20)
		for (var a = 0; a < array.length; a++) {
			var column = new Array(20)
			for (var b = 0; b < column.length; b++) {
				column[b] = a + "-" + b
			}
			array[a] = column
		}
		return array
	}


	goRandom() {
		for (var i = 0; i < 20; i++) {
			for (var ii = 0; ii < 20; ii++) {

				document.getElementById(i * 100 + ii).classList.remove("dead")
				document.getElementById(i * 100 + ii).classList.remove("live")

				if (Math.random() < .7)
					document.getElementById(i * 100 + ii).classList.add("dead")
				else
					document.getElementById(i * 100 + ii).classList.add("live")

			}
		}
	}

	myTimer() {

		if (!this.state.thisRunning)
			return



		let thereWasAChange = false;

		for (var i = 0; i < 20; i++) {
			for (var ii = 0; ii < 20; ii++) {

				if (!document.getElementById(i * 100 + ii))
					continue;

				var thisElement = document.getElementById(i * 100 + ii)
				//what color is this cell?


				//are there three cells nearby.... then give life
				var count = 0

				if (document.getElementById(i * 100 + ii - 101) && (document.getElementById(i * 100 + ii - 101).classList.contains('live') || document.getElementById(i * 100 + ii - 101).classList.contains('wasLive')))
					count += 1
				if (document.getElementById(i * 100 + ii - 100) && (document.getElementById(i * 100 + ii - 100).classList.contains('live') || document.getElementById(i * 100 + ii - 100).classList.contains('wasLive')))
					count += 1
				if (document.getElementById(i * 100 + ii - 99) && (document.getElementById(i * 100 + ii - 99).classList.contains('live') || document.getElementById(i * 100 + ii - 99).classList.contains('wasLive')))
					count += 1

				if (document.getElementById(i * 100 + ii - 1) && (document.getElementById(i * 100 + ii - 1).classList.contains('live') || document.getElementById(i * 100 + ii - 1).classList.contains('wasLive')))
					count += 1
				if (document.getElementById(i * 100 + ii + 1) && (document.getElementById(i * 100 + ii + 1).classList.contains('live') || document.getElementById(i * 100 + ii + 1).classList.contains('wasLive')))
					count += 1

				if (document.getElementById(i * 100 + ii + 99) && (document.getElementById(i * 100 + ii + 99).classList.contains('live') || document.getElementById(i * 100 + ii + 99).classList.contains('wasLive')))
					count += 1
				if (document.getElementById(i * 100 + ii + 100) && (document.getElementById(i * 100 + ii + 100).classList.contains('live') || document.getElementById(i * 100 + ii + 100).classList.contains('wasLive')))
					count += 1
				if (document.getElementById(i * 100 + ii + 101) && (document.getElementById(i * 100 + ii + 101).classList.contains('live') || document.getElementById(i * 100 + ii + 101).classList.contains('wasLive')))
					count += 1


				//Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
				if (thisElement.classList.contains('dead') && count === 3) {
					thereWasAChange= true
					thisElement.classList.remove('dead')
					thisElement.classList.add("wasDead")
				}


				//Any live cell with fewer than two live neighbours dies, as if by underpopulation.
				//Any live cell with two or three live neighbours lives on to the next generation.
				//Any live cell with more than three live neighbours dies, as if by overpopulation.if (thisElement.style.backgroundColor = ""){
				if (thisElement.classList.contains('live') && count < 2) {
					thereWasAChange= true
					thisElement.classList.remove('live')
					thisElement.classList.add("wasLive")

				}

				if (thisElement.classList.contains('live') && (count === 2 || count === 3)) {


				}
				if (thisElement.classList.contains('live') && count > 3) {
					thereWasAChange= true
					thisElement.classList.remove('live')
					thisElement.classList.add("wasLive")
				}

			}//end 1st loop
		} //end loop

		//now turn all reds yellow and blue to blank
		while (document.getElementsByClassName('wasLive').length > 0) {
			let x = document.getElementsByClassName('wasLive')
			x[0].classList.add('dead')
			x[0].classList.remove('wasLive')

		}

		while (document.getElementsByClassName('wasDead').length > 0) {
			let x = document.getElementsByClassName('wasDead')
			x[0].classList.add('live')
			x[0].classList.remove('wasDead')

		}
		if (thereWasAChange === false){
			//push start button to stop
			this.start()
		}



	}

	render() {
		let array = this.createArray();
		let cellRow = array.map((block, i) =>
			<div style={
				{
					lineHeight: "10px",

				}
			}
				key={
					i
				} > {
					block.map((col, ii) =>
						<div style={
							{
								lineHeight: "10px",
								display: "inline-block"
							}
						}
							key={
								ii
							} >
							<
								Cell name={
									i * 100 + ii
								}
							/>
						</div>
					)
				} </div>
		)

		// eslint-disable-next-line 
		var myVar = setInterval(this.myTimer, 1000);


		return (
			<div id="weather" name="weather" style={{ margin: "30px", border: "1px solid black", maxHeight: "250px", overflowX: "hidden", overflowY: "auto" }}>
				<Hr />
				<div className="row">
					<div className="col-sm-7" style={{ lineHeight: "24px" }}>
						<h1>Conway's Game of Life</h1>
						<ul>
							<li>Yellow cell with &lt; 2 neighbors dies. Underpopulation!</li>
							<li>Yellow cell with 2 or 3 neighbors lives.</li>
							<li>Yellow cell with > 3 neighbors dies. Overpopulation!</li>
							<li>Blank cell with exactly 3 neighbors becomes a live cell, as if by reproduction.</li>
						</ul>

						Click cells or press RANDOM then click START.
				</div>

					<div className="col-sm-3" style={{ marginLeft: "50px", lineHeight: "10px" }}>
						<div>
							<button id="start" name="start" className="controlButton" style={{ color: "white", backgroundColor: "green" }} onClick={this.start}>START</button>
							<button id="clear" name="clear" className="controlButton" onClick={this.clear}>CLEAR</button>
							<button id="clear" name="clear" className="controlButton" onClick={this.goRandom}>RANDOM</button>

							<div> {cellRow} </div>

						</div>
					</div>


				</div>
				<Hr />
			</div>

		)
	}





}

