const timeLeft= document.querySelector('#time-left');
let currentTime= 60;

function countDown(){
	currentTime--;
	console.log(currentTime);
	timeLeft.textContent= currentTime;

	if(currentTime === 0){
		clearInterval(timerId);
		alert('FIM DE JOGO!');
		document.location.reload();
	}
}

let timerId= setInterval(countDown, 1000);
