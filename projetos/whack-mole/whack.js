//alert("teste");
//por ter vários elementos '.square' esta constante se torna um array.
const square= document.querySelectorAll('.square');
const mole= document.querySelector('.mole');
const timeLeft= document.querySelector('#time-left');
let score= document.querySelector('#score');
const playSound= () => {
	let sound = new Audio("whack-mole-images/tom-1.mp3");
	sound.play();
}

let result= 0;
let currentTime= timeLeft.textContent;

function randomSquare(){
	//limpar os quadrados
	square.forEach(className => {
		className.classList.remove('mole');
	});

	//fazer a toupeira aparecer em qudrados aleatórios
	let randomPosition= square[Math.trunc(Math.random() * 9)];
	randomPosition.classList.add('mole');

	hitPosition= randomPosition.id;
}

square.forEach(id => {
	id.addEventListener('mouseup', () => {
		if(id.id === hitPosition){
			playSound();
			result = result +1;
			score.textContent = result;
		}
	})
});

function moveMole(){
	let timerId= null;
	timerId= setInterval(randomSquare, 800);
}

function countDown(){
	currentTime--;
	timeLeft.textContent= currentTime;

	if(currentTime === 0){
		clearInterval(timerId);
		alert('FIM DE JOGO!');
	}
}

let timerId= setInterval(countDown, 1000);
moveMole();
