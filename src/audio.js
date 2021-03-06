import React, { Component } from 'react'
import $ from 'jquery'
import dial from './audio/rotary-phone-dialing-7.wav'
import pickup from './audio/phone-pick-up-1.wav'
import ring from './audio/phone-calling.wav'
import recording from './audio/recording2.wav'
import beep from './audio/answering-machine-beep.wav'
import Phone1 from './phone1.png'
import Phone2 from './phone2.png'
import makeHangUpSound from './audio/phone-hang-up-2b.wav'
//import * as SMTP from './smtp.js'
//import WebSpeech from './webSpeech.js'

export default class AudioPlayer extends Component {
    constructor() {
        super()
        this.state = {
            appData: {},
            isLoading: true,
            medRec: "unused",
            answered: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.answeringMachine = this.answeringMachine.bind(this)
        this.hangUp = this.hangUp.bind(this)
        this.recordMessage = this.recordMessage.bind(this)
        this.sendMail = this.sendMail.bind(this)
    }


    sendMail(audioUrl) {
		
    
        if (audioUrl) {
            //send with attachment
            let reader = new FileReader();
            reader.readAsBinaryString(audioUrl);
            reader.onload = function () {
                
				
				
            };
        }
    }

    
    answeringMachine(e) {
        //one call and one call only
        if (this.state.answered !== false) {
            $("#phoneDiv").text("Message left.")
            return
        }

        this.setState({ answered: true })
        $("#phone1").hide()
        $("#phone2").show()
        var firstClip = document.getElementById("ring");
        var secondClip = document.getElementById("pickup");
        var thirdClip = document.getElementById("recording");
        var fourthClip = document.getElementById("beep");

        //play all the audio clips
        firstClip.play();
        firstClip.onended = function () {
            if ($("#phone2").css('display') === "inline")
                secondClip.play();
        };

        secondClip.onended = function () {
            if ($("#phone2").css('display') === "inline")
                thirdClip.play();
        }

        thirdClip.onended = function () {
            if ($("#phone2").css('display') === "inline")
                fourthClip.play();
        }
        fourthClip.onended = function () {
            if ($("#phone2").css('display') === "inline")
                //this is pressing to record
                $("#startRecord").click()
        }
    }


    recordMessage() {
        $("#phone1").hide()
        $("#phone2").show()
        $("#startRecord").hide();
        $("#stopRecord").show();



        // Older browsers might not implement mediaDevices at all, so we set an empty object first
        if (navigator.mediaDevices === undefined) {
            navigator.mediaDevices = {};
        }

        // Some browsers partially implement mediaDevices. We can't just assign an object
        // with getUserMedia as it would overwrite existing properties.
        // Here, we will just add the getUserMedia property if it's missing.
        if (navigator.mediaDevices.getUserMedia === undefined) {

            navigator.mediaDevices.getUserMedia = function (constraints) {

                // First get ahold of the legacy getUserMedia, if present
                var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

                // Some browsers just don't implement it - return a rejected promise with an error
                // to keep a consistent interface
                if (!getUserMedia) {
                    return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                }

                // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
                return new Promise(function (resolve, reject) {
                    getUserMedia.call(navigator, constraints, resolve, reject);
                });
            }
        }


        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(stream => {
                    const mediaRecorder = new MediaRecorder(stream);
                    this.setState({ medRec: mediaRecorder })
                    //START RECORDING
                    if (this.state.medRec.state === "inactive") {

                        this.state.medRec.start();
                    }

                    //save the recording
                    const audioChunks = [];
                    this.state.medRec.addEventListener("dataavailable", event => {
                        audioChunks.push(event.data);
                    });
                    //what to do at STOP
                    this.state.medRec.addEventListener("stop", () => {
                        ///PLAY IT
                        const audioBlob = new Blob(audioChunks, { type: 'audio/x-mpeg-3' });
                        //const audioUrl = URL.createObjectURL(audioBlob);

                        //this is a url
                        //mail it as attachment
                        this.sendMail(audioBlob);

                        //const audio = new Audio(audioUrl);
                        //var audElem = document.getElementsByTagName('audio')[0].getAttribute('id');
                        //var song = document.getElementById(audElem);
                        //audio.play()
                    });

                    //turn off  
                    setTimeout(() => {
                        console.log("Auto stopping!")
                        if (this.state.medRec.state === "recording")
                            this.hangUp();
                    }, 120000);

                    
                    
                    
                }).catch(function (err) {
                    /*DENIED PERMISSION*/
                    /* handle the error  "NotAllowedError: Permission denied" */
                    alert("No microphone access.  Please try to get in touch with me another way.")
                });

        }
    }


    hangUp() {
        $("#phone2").hide()
        $("#phone1").show()
        $("#startRecord").show();
        $("#stopRecord").hide();
        //stop recording
        console.log(this.state.medRec.state);
        if (this.state.medRec.state === "recording")
            this.state.medRec.stop();
        console.log(this.state.medRec.state);
        var makeHangUpSound = document.getElementById("makeHangUpSound");
        makeHangUpSound.play()

        ////hide phoneDiv
        $("#phoneDiv").hide();

    }





    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    componentDidMount() {


        //fetching star wars data
        /* const fetchParams = {
             method: 'GET',
             mode: 'no-cors'
         };
 
         const url = "https://swapi.co/api/people/1";
 
         fetch(url, fetchParams)
             .then(response => response.json())
             .then(data => {
                 this.setState({ appData: data })
             })  //done with starwars
             */
    }


    render() {
        return (
            <div className="row">
                <div id="phoneDiv" className="col-sm-12">
                    <p style={{ position: "relative", top: "10px", left: "15px", color: "red", fontSize: "10px", marginBottom: "0px" }}>Click to call.</p>

                    <img id="phone1" name="phone1" src={Phone1} style={{ display: "inline-block" }} alt="phone" className="margin10" onClick={this.answeringMachine} />
                    <img id="phone2" name="phone2" src={Phone2} style={{ display: "none" }} alt="phone" className="margin10" onClick={this.hangUp} />

                    <button id="startRecord" className="btn btn-light" style={{ display: "inline-block" }} onClick={this.recordMessage}>LEAVE VOICE MESSAGE</button>
                    <button id="stopRecord" className="btn btn-danger" style={{ display: "none" }} onClick={this.hangUp}>Stop Recording</button>


                    <audio id="dial">
                        <source src={dial} type="audio/wav" />
                    </audio>
                    <audio id="pickup">
                        <source src={pickup} type="audio/wav" />
                    </audio>
                    <audio id="ring">
                        <source src={ring} type="audio/wav" />
                    </audio>
                    <audio id="recording">
                        <source src={recording} type="audio/wav" />
                    </audio>
                    <audio id="beep">
                        <source src={beep} type="audio/wav" />
                    </audio>
                    <audio id="makeHangUpSound">
                        <source src={makeHangUpSound} type="audio/wav" />
                    </audio>

                    <audio id="recordedAudio">
					
					</audio>

                </div>
            </div>
        )
    }
}

