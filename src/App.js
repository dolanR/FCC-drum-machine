import './App.css';
import React from 'react';

function App() {
  const getAudio = (string) => {
    let temp = document.getElementById(string);
    let url = temp.getAttribute('src');
    let audio = new Audio(url);
    return audio;
  };
  
  return (
    <div id="drum-machine" class="flex">
      <div id="drum-buttons" class='grid'>
        <div class='drum-pad flex' id='heater-1' onClick={() => getAudio('a1').play()}>Q
        <audio class="clip" id="Q">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="a1"></source>
        </audio>
        </div>
        <div class='drum-pad flex' id='heater-2' onClick={() => getAudio('a2').play()}>W
        <audio class="clip" id="W">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="a2"></source>
        </audio>
        </div>
        <div class='drum-pad flex' id='heater-3' onClick={() => getAudio('a3').play()}>E
        <audio class="clip" id="E">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="a3"></source>
        </audio>
        </div>
        <div class='drum-pad flex' id='heater-4' onClick={() => getAudio('a4').play()}>A
        <audio class="clip" id="A">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="a4"></source>
        </audio>
        </div>
        <div class='drum-pad flex' id='clap' onClick={() => getAudio('a5').play()}>S
        <audio class="clip" id="S">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="a5"></source>
        </audio>
        </div>
        <div class='drum-pad flex' id='open-hh' onClick={() => getAudio('a6').play()}>D
        <audio class="clip" id="D">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="a6"></source>
        </audio>
        </div>
        <div class='drum-pad flex' id='kick-n-hat' onClick={() => getAudio('a7').play()}>Z
        <audio class="clip" id="Z">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="a7"></source>
        </audio>
        </div>
        <div class='drum-pad flex' id='kick' onClick={() => getAudio('a8').play()}>X
        <audio class="clip" id="X">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="a8"></source>
        </audio>
        </div>
        <div class='drum-pad flex' id='closed-hh' onClick={() => getAudio('a9').play()}>C
        <audio class="clip" id="C">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="a9"></source>
        </audio>
        </div>
      </div>
      <div id="display" class="flex">
        <div id="power-button" class="flex"> 
          <p1>Power</p1>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
