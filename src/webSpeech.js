import React from 'react'
import $ from 'jquery'

export default class WebSpeech extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){

        //speech   recog
        try {
            var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            var recognition = new SpeechRecognition();
          }
          catch(e) {
            console.error(e);
            $('.no-browser-support').show();
            $('.app').hide();
          }

          recognition.onstart = function() { 
            $("instructions").text('Voice recognition activated. Try speaking into the microphone.');
          }
          
          recognition.onspeechend = function() {
            $("instructions").text('You were quiet for a while so voice recognition turned itself off.');
          }
          
          recognition.onerror = function(event) {
            if(event.error == 'no-speech') {
              $("instructions").text('No speech was detected. Try again.');  
            };
          }

        // text to speech
        let synth = window.speechSynthesis;
        let inputForm = document.querySelector('form');
        let inputTxt = document.querySelector('.txt');
        let voiceSelect = document.querySelector('select');
        let pitch = document.querySelector('#pitch');
        let pitchValue = document.querySelector('.pitch-value');
        let rate = document.querySelector('#rate');
        let rateValue = document.querySelector('.rate-value');

        let voices = [];

        function populateVoiceList() {
            if (!document.getElementById("voiceSelect"))
                return

        var voices = synth.getVoices().sort(function (a, b) {
            const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
            if ( aname < bname ) return -1;
            else if ( aname == bname ) return 0;
            else return +1;
        });
        const voiceSelect = document.getElementById("voiceSelect");
        let selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
        voiceSelect.innerHTML = '';
        for(let i = 0; i < voices.length ; i++) {
            let option = document.createElement('option');
            option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
            
            if(voices[i].default) {
            option.textContent += ' -- DEFAULT';
            }

            option.setAttribute('data-lang', voices[i].lang);
            option.setAttribute('data-name', voices[i].name);
            voiceSelect.appendChild(option);
        }
        voiceSelect.selectedIndex = selectedIndex;
        }

        populateVoiceList();
        if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
        }

        function speak(){
            if (synth.speaking) {
                console.error('speechSynthesis.speaking');
                return;
            }
            if (inputTxt.value !== '') {
            let utterThis = new SpeechSynthesisUtterance(inputTxt.value);
            utterThis.onend = function (event) {
                console.log('SpeechSynthesisUtterance.onend');
            }
            utterThis.onerror = function (event) {
                console.error('SpeechSynthesisUtterance.onerror');
            }
            if (voiceSelect){
                let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
                for(let i = 0; i < voices.length ; i++) {
                if(voices[i].name === selectedOption) {
                    utterThis.voice = voices[i];
                    break;
                }
                }
            }
            utterThis.pitch = pitch.value;
            utterThis.rate = rate.value;
            synth.speak(utterThis);
        }
        }

        const formSubmit = function(event) {
        event.preventDefault();

        speak();

        inputTxt.blur();
        }

        pitch.onchange = function() {
        pitchValue.textContent = pitch.value;
        }

        rate.onchange = function() {
			rateValue.textContent = rate.value;
        }

        voiceSelect.onchange = function(){
			speak();
        }




    }
    
    render(){
        return(

            <div>
                <h1>Speech synthesiser</h1>
            
                <p>Enter some text in the input below and press return to hear it. change voices using the dropdown menu.</p>
                <p>Enter some text in the input below and press return  or the "play" button to hear it. change voices using the dropdown menu.</p>
            
                <form id="inputForm" name="inputForm" onSubmit="formSubmit">
                    
					<input id="instructions" name="instructions" type="text" class="txt"/>
                    
					<div>
                        <label for="rate">Rate</label>
                        <input type="range" name="range" min="0.5" max="2" value="1" step="0.1" id="rate"/>
                        <div class="rate-value">1</div>
                        <div class="clearfix"></div>
                    </div>
                    <div>
                        <label for="pitch">Pitch</label>
                        <input name="pitch" type="range" min="0" max="2" value="1" step="0.1" id="pitch"/>
                        <div class="pitch-value">1</div>
                        <div class="clearfix"></div>
                    </div>
                    <select id="voiceSelect" name="voiceSelect">
                    </select>
                    <div class="controls">
                        <button id="play" type="submit">Play</button>
                    </div>
                </form>
            </div>
            )
    }

}

