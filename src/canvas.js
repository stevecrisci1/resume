import React from 'react'
import Hr from './hr.js'

export default class Canvas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            canvasID:1
        }
        this.handleChange = this.handleChange.bind(this)
        this.drawCanvas = this.drawCanvas.bind(this)
        this.earth = this.earth.bind(this)
        


    }


    earth(){
        var sun = new Image();
        var moon = new Image();
        var earth = new Image();
        function init() {
          sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
          moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
          earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
          window.requestAnimationFrame(draw);
        }
        
        function draw() {
          var ctx = document.getElementById('myCanvas').getContext('2d');
        
          ctx.globalCompositeOperation = 'destination-over';
          ctx.clearRect(0, 0, 300, 300); // clear canvas
        
          ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
          ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
          ctx.save();
          ctx.translate(150, 150);
        
          // Earth
          var time = new Date();
          ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
          ctx.translate(105, 0);
          ctx.fillRect(0, -12, 40, 24); // Shadow
          ctx.drawImage(earth, -12, -12);
        
          // Moon
          ctx.save();
          ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
          ctx.translate(0, 28.5);
          ctx.drawImage(moon, -3.5, -3.5);
          ctx.restore();
        
          ctx.restore();
          
          ctx.beginPath();
          ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
          ctx.stroke();
         
          ctx.drawImage(sun, 0, 0, 300, 300);
        
          window.requestAnimationFrame(draw);
        }
        
        init();
    }



    drawCanvas(){
        var canvas = document.getElementById('myCanvas');
        var ctx;

        //get the context
        var ctx = canvas.getContext('2d');

        if (canvas.getContext) {
            switch(this.state.canvasID){
                case "1":
                    
                        ctx.fillStyle = 'rgb(200, 0, 0)';
                        ctx.fillRect(10, 10, 50, 50);
            
                        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
                        ctx.fillRect(30, 30, 50, 50);
            
                    break;
                case "2":
                       
                    //ctx.fillRect(x, y, width, height)
                    //Draws a filled rectangle.
                    ctx.fillRect(110, 10, 100, 100)


                    //ctx.strokeRect(x, y, width, height)
                    //Draws a rectangular outline.
                    ctx.strokeRect(130, 30, 50, 50)



                    //ctx.clearRect(x, y, width, height)
                    //Clears the specified rectangular area, making it fully transparent.
                    ctx.clearRect(150,50, 25, 25)
           
                    break;

                case "3":
                       
                    //triangle
                    ctx.fillStyle = 'rgb(20, 200,200)';

                    ctx.beginPath();
                    ctx.moveTo(75, 50);
                    ctx.lineTo(100, 75);
                    ctx.lineTo(100, 25);
                    ctx.fill();

                    //face
                    ctx.beginPath();
                    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
                    ctx.moveTo(110, 75);
                    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
                    ctx.moveTo(65, 65);
                    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
                    ctx.moveTo(95, 65);
                    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
                    ctx.stroke();

                    break;
                case "4":
                       
                    //heart
                    // Cubic curves example
                    ctx.beginPath();
                    var startPointX = 75
                    var startPointY = 40
                    ctx.moveTo(startPointX, startPointY);
                    ctx.bezierCurveTo(startPointX, 37, 70, 25, 50, 25);
                    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
                    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
                    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
                    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
                    ctx.bezierCurveTo(85, 25, startPointX, 37, startPointX, startPointY);
                    ctx.fill();
                    break;
                case "5":
                    this.earth()
                    break;
                case "6":
                    // Cubic curves example
                    ctx.beginPath();
                    var startPointX = 75
                    var startPointY = 40
                    ctx.moveTo(startPointX, startPointY);
                    ctx.bezierCurveTo(startPointX, 37, 70, 25, 50, 25);
                    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
                    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
                    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
                    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
                    ctx.bezierCurveTo(85, 25, startPointX, 37, startPointX, startPointY);
                    ctx.fill();
                    break;
                case "7":
                     //pac man dots
                    ctx.fillStyle = 'rgb(0, 0,0)';
                    for (var i = 0; i < 8; i++) {
                    ctx.fillRect(51 + i * 16, 35, 4, 4);
                    }


                    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
                    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
                    ctx.save();
                    ctx.translate(150, 150);

                    break;
                case "8":
                        var img = new Image();   // Create new img element
                        
                        img.src = 'https://stevecrisci.com/me.jpg'; // Set source path
                        img.addEventListener('load', function() {
                          // execute drawImage statements here
                          ctx.drawImage(img, 0, 0, 350, 150);
                        }, false);
                        
               default:
                            

            }
            
            
            // drawing code here
            
            
           

            
            

           

          } else {
            // canvas-unsupported code here
          }
    }
    
    handleChange(e, name) {
        this.setState({ [name]: e.target.value }, this.drawCanvas());
      };
    
    
    
    
    

    render(){
        return(

            <div id="canvas" name="canvas" style={{margin:"30px",border:"1px solid black",maxHeight:"700px",overflowX:"hidden", overflowY:"auto"}}>
                <Hr/>
                <h1>HTML Canvas</h1> 
                <input type="number" 
                id="canvasnumber" 
                name="canvasnumber" 
                value={this.state.canvasID} 
                onChange={ (e) => this.handleChange(e, 'canvasID') } 
                />

                <canvas id="myCanvas" style={{width:"100%", height:"550px",border:"3px solid #000000"}}></canvas>
                <Hr/>
              
            </div>
        )
    }
}
