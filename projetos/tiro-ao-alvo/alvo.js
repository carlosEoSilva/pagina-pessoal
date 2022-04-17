const targetSquares = document.querySelectorAll('.square');
const pontosLabel= document.querySelector('#points');
const btnRecomecar= document.querySelector('.btn-recomecar');
var roundTargetNumber= 3;
var targetNumber= 2;
var hitPosition= [];
var pontos= 0;

btnRecomecar.addEventListener('click', () =>{
	document.location.reload();
})

const fimDaRodada= () =>{
	if(roundTargetNumber <= 6 ){
		roundTargetNumber++;			
	}
	targetNumber= roundTargetNumber;
	console.log('targetNumber3: '+targetNumber);
	nextRound();	
}

const nextRound=() => {	
	const targetPositions= randPositionsIndex(roundTargetNumber);	
	targetPositions.forEach(pos =>{
		targetSquares[pos].classList.add('target');
	});
}

const start= () => {

	nextRound();

	targetSquares.forEach(square =>{
		square.addEventListener('mouseup', () =>{
			console.log('mouse clicado');
			shot();
			if(square.classList.contains('target')){
				square.classList.remove('target');
				pontos++;
				pontosLabel.textContent= pontos;				
				if(targetNumber === 0){
					fimDaRodada();
				}
				targetNumber--;					
			}					
		});
	});
}

start();

