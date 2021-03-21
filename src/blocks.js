import React from 'react'
import Block from './block.js'
import Hr from './hr.js'
import $ from 'jquery'
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';


//create array A1...A10/B1...B10/...
let blocksArray = []
let checkBlockArray = []
let gameOver = false;
let blocksChosen = 0
let bombBlocks = []

//create blocksArray 10X10 (not zero indexed)
for (let letter = 65; letter < 75; letter++) {
    for (let number = 1; number < 11; number++) {
        blocksArray.push(String.fromCharCode(letter) + number)
    }
}

//choose 10 random blocks
do {
    var randomLetter = String.fromCharCode(64 + Math.floor(Math.random() * 10) + 1)
    var randomNumber = (Math.floor(Math.random() * 10) + 1)
    var randomBlock = randomLetter + randomNumber
    if (bombBlocks.includes(randomBlock) === false)
        bombBlocks.push(randomBlock);
} while (bombBlocks.length < 10)

export default function Blocks() {
    function neighborCount(hitBlock){
        var thisLetter = hitBlock.substring(0, 1)
            var thisNumber = hitBlock.substring(1)
            var nearby = 0
            //check 1 row up left
            nearby += checkBlock(String.fromCharCode(thisLetter.charCodeAt(0) - 1) + (Number(thisNumber) - 1))
            //check 1 row up center
            nearby += checkBlock(String.fromCharCode(thisLetter.charCodeAt(0) - 1) + (Number(thisNumber)))
            //check 1 row up right
            nearby += checkBlock(String.fromCharCode(thisLetter.charCodeAt(0) - 1) + (Number(thisNumber) + 1))
            //check left
            nearby += checkBlock((thisLetter) + (Number(thisNumber) - 1))
            //check right
            nearby += checkBlock((thisLetter) + (Number(thisNumber) + 1))
            //check 1 row left
            nearby += checkBlock(String.fromCharCode(thisLetter.charCodeAt(0) + 1) + (Number(Number(thisNumber)) - 1))
            //check 1 row center
            nearby += checkBlock(String.fromCharCode(thisLetter.charCodeAt(0) + 1) + (Number(thisNumber)))
            //check 1 row right
            nearby += checkBlock(String.fromCharCode(thisLetter.charCodeAt(0) + 1) + (Number(thisNumber) + 1))
            return nearby
    }
    
    function clearBlock(block){
        if(document.getElementById(block)){
            var neighborcount = neighborCount(block);
            //check to see NOT in blockArray
            //check background color.... grey only!
            if (!bombBlocks.includes(block)  && $("#" + block).css("backgroundColor")==="rgb(128, 128, 128)"){
                //do not act on something already in push chckBlockArray
                if(!checkBlockArray.includes(block)){
                    //this cell not in checkblockArray 
                    addToScore()
                    $("#" + block).css("backgroundColor", "silver")//clear cell
                    if (neighborcount === 0 )
                    {
                        //ok add cell to list to be processed
                        checkBlockArray.push(block)
                    }
                    else{
                        //just tell me how many nearby
                        $("#" + block).text(neighborcount)
                    }
                    console.log(checkBlockArray)
                }
            }
        }
    }

    //done while there are any items in checkBlockArray
    function clearNeighbors(hitBlock){
        do{
            var thisLetter = checkBlockArray[0].substring(0, 1)
            var thisNumber = checkBlockArray[0].substring(1)
            clearBlock(String.fromCharCode(thisLetter.charCodeAt(0) - 1) + (Number(thisNumber) - 1))
            clearBlock(String.fromCharCode(thisLetter.charCodeAt(0) - 1) + (Number(thisNumber) ))
            clearBlock(String.fromCharCode(thisLetter.charCodeAt(0) - 1) + (Number(thisNumber) + 1))
            clearBlock(String.fromCharCode(thisLetter.charCodeAt(0) ) + (Number(thisNumber) - 1))
            clearBlock(String.fromCharCode(thisLetter.charCodeAt(0) ) + (Number(thisNumber) + 1))
            clearBlock(String.fromCharCode(thisLetter.charCodeAt(0) + 1) + (Number(thisNumber) - 1))
            clearBlock(String.fromCharCode(thisLetter.charCodeAt(0) + 1) + (Number(thisNumber) ))
            clearBlock(String.fromCharCode(thisLetter.charCodeAt(0) + 1) + (Number(thisNumber) + 1))
            //remove this cell from array
            checkBlockArray.shift(hitBlock)
        }while(checkBlockArray.length > 0)
    }

    function addToScore(){
        blocksChosen += 1 
        $("#blocksChosen")[0].innerText = blocksChosen
        if (blocksChosen > 89) {
           //WINNER!
            gameOver = true;
            $("#gameOver").show();
            $("#winner").show();
            //show bombs
            showBombs();
        }
    }

    function hitBlock(event) {
        if (gameOver === true)
            return

        const hitBlock = event.target.getAttribute('name')

        if ( $("#" + hitBlock)[0].innerText!=="")
            return
        

        var x = $("#" + hitBlock)

        //do not process if red - "accidental hit"
        if (x.css("backgroundColor") === "rgb(255, 0, 0)")
            return
            
        
        if (bombBlocks.includes(hitBlock)) {
            //THEY HIT A BOMB!!!
            //show all bomb blocks
            showBombs();
            x.css("backgroundColor", "red")
            gameOver = true
            //$(".cell").css({backgroundColor: 'grey'});
            $("#gameOver").show()
            explode(hitBlock)
            setTimeout($("#" + hitBlock).css("display", "inline-block"), 2000)
        }
        else {
            //we have to find out the values of nearby blocks
            //what is this letter value
            var nearby = neighborCount(hitBlock)
            addToScore()
            x.css("backgroundColor", "silver")
            if (nearby === 0) {
                checkBlockArray.push(hitBlock)
                clearNeighbors(hitBlock)
            }
            else {
                x[0].innerText = nearby;
            }
        }

 
    }


    function showBombs() {
        for (var i = 0; i < bombBlocks.length; i++) {
            //$('#' + bombBlocks[i]).html('<img onContextMenu={markSpot} src={Bomb} height="28px"  width="28px" className="hiddenBomb" alt="O"/>')
            $('#' + bombBlocks[i]).addClass("exploded");
            $('#' + bombBlocks[i] + " img").removeClass("hiddenBomb");
        }
    }

    function checkBlock(check) {
        //if value passed in exists in bombBlocks array return 1
        if (bombBlocks.includes(check)) {
            return 1;
        } else {
            return 0;
        }
    }

    function explode(bombBlock) {
        $("#" + bombBlock).hide("explode", { pieces: 100 }, 500)
        $("#" + bombBlock).show("explode", { pieces: 100 }, 500)

        setTimeout(function () {
            $("#" + bombBlock).css("display", "inline-block")
            $("#" + bombBlock).css("backgroundColor", "silver")
            $("#" + bombBlock).css("color", "silver")
        }, 1001);
        return
    }

    function refreshPage() {
        window.location.reload();
    }

    function missedMarkSpot(e){ 
        e.preventDefault()
    }

    return (
        <div id="minesweeper" name="minesweeper" style={{ margin: "30px", border: "1px solid black" }}>
            <Hr />
            <h1>M i n e s w e e p e r</h1>
            <div className="row">

                <div className="col-xs-12 col-md-6" min-width="360px">
                    <div className="inline"  onContextMenu={missedMarkSpot}>
                        {blocksArray.map((block, i) =>
                            <React.Fragment key={i}>
                                <Block name={block} hitBlock={hitBlock} gameOver={gameOver} />
                                {(block.toString().indexOf("10") > -1 ?
                                    (<br />)
                                    : ("")
                                )}
                            </React.Fragment>
                        )}
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="inline" style={{ position: "absolute", visibilty: gameOver ? 'visible' : 'hidden' }}>

                        <div id="directions">
                            <h5>Rules</h5>
                            <ul>
                                <li>Click on grey boxes.  AVOID MINES!</li>
                                <li>Mark possible bombs by right clicking on cell.</li>
                                <li>Numbers shown reflect count of adjacent cells containing bombs.</li>
                            </ul>
                        </div>
                        
                        <div id="score" style={{fontSize:"3em",fontWeight:"bold"}}>
                            SCORE:
                            <span id="blocksChosen" style={{marginLeft:"18px"}}>
                                0
                            </span>
                        </div>

                        <div id="gameOver" name="gameOver" style={{ display: "none", backgroundColor: "red", color: "white" }}>

                            <div id="winner" style={{ display: "none" }}><h1>WINNER!!</h1></div>

                            <h2 style={{ textAlign: "center" }}>Game OVER!</h2>

                            <button
                                type="button"
                                onClick={refreshPage}
                                style={{ width: "100%" }}>
                                <span>Start Over</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Hr className="row" />
        </div>
    )
}