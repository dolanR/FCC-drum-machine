import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let audioArray = [
  ["Q", "a1"],
  ["W", "a2"],
  ["E", "a3"],
  ["A", "a4"],
  ["S", "a5"],
  ["D", "a6"],
  ["Z", "a7"],
  ["X", "a8"],
  ["C", "a9"],
]

document.addEventListener('keydown', (e) => {
  let tempKey = e.key.toUpperCase();
  for(let i = 0; i < audioArray.length; i++) {
    if(tempKey === audioArray[i][0]) {
      let audio = new Audio(document.getElementById(audioArray[i][1]).getAttribute('src'));
      audio.play();
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
