import './App.css';
import React, { useState, useEffect } from 'react';

const buttonArray = [
	{ letter: 'Q', id: 'a1', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', name: 'Heater 1' },
	{ letter: 'W', id: 'a2', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', name: 'Heater 2' },
	{ letter: 'E', id: 'a3', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', name: 'Heater 3' },
	{ letter: 'A', id: 'a4', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', name: 'Heater 4' },
	{ letter: 'S', id: 'a5', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', name: 'Clap' },
	{ letter: 'D', id: 'a6', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', name: 'Open HH' },
	{ letter: 'Z', id: 'a7', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', name: 'Kick n Hat' },
	{ letter: 'X', id: 'a8', audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', name: 'Kick' },
	{ letter: 'C', id: 'a9', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', name: 'Closed HH' },
];

function App() {
	const [isPowerOn, setIsPowerOn] = useState(false);
	const [playedSound, setPlayedSound] = useState('');

	useEffect(() => {
		function handleKeyPress(e) {
			if (!isPowerOn) {
				return;
			}
			let tempKey = e.key.toUpperCase();
			for (let i = 0; i < buttonArray.length; i++) {
				if (tempKey === buttonArray[i].letter) {
					setPlayedSound(buttonArray[i].name);
					playAudio(buttonArray[i].audio);
					break;
				}
			}
		}

		document.addEventListener('keydown', handleKeyPress);

		return function cleanup() {
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, [isPowerOn, playedSound]);

	const playAudio = (url) => {
		const audio = new Audio(url);
		audio.play();
	};

	return (
		<div id='drum-machine' className='flex'>
			<div id='drum-buttons' className='grid'>
				{buttonArray.map((button, index) => {
					return (
						<div
							className='drum-pad flex'
							key={index}
							id={button.id}
							onClick={() => isPowerOn && playAudio(button.audio) & setPlayedSound(button.name)}
						>
							{button.letter}
							<audio className='clip' id={button.letter}>
								<source src={button.audio} id={button.id}></source>
							</audio>
						</div>
					);
				})}
			</div>
			<div id='display' className='flex'>
				<div id='power-button' className='flex'>
					<p1>Power</p1>
					<label className='switch'>
						<input
							type='checkbox'
							onChange={() => {
								setIsPowerOn((prev) => !prev);
							}}
						/>
						<span className='slider'></span>
					</label>
				</div>
				<div id='played-sound' className='flex'>
					{playedSound}
				</div>
			</div>
		</div>
	);
}

export default App;
