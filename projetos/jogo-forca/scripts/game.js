let alphabet= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Z'];
let answer, win, lose= 0;

// criar o teclado
const creatKeyBoard= (()=>{
	alphabet.reverse();
	alphabet.forEach((letter, index)=>{
		let html= `<button id='${letter.toLowerCase()}' class="w3-button w3-round-xxlarge w3-lime keyboard-key">${letter}</button>`;
		keyboard.insertAdjacentHTML('afterbegin', html);
	})	
})

// adicionar o clique no teclado
const keyClick= ()=>{
	creatKeyBoard();
	keyboard.addEventListener('click',(event)=>{
		let key= event.target;		
		key.classList.add('hide') ;
		guess(key.id);
	});
}

// calcular quantidade de acertos para a vitória
const calcWin= (_answer)=>{
	_answer= _answer.split('').filter(function(item, pos, self) { return self.indexOf(item) == pos;}).join('');
	return _answer.length

}

// terminar o jogo
const endGame= ()=>{
	keyboard.classList.add('hide');
	riddle.classList.add('hide');
	answerDiv.classList.add('hide');
}

// iniciar partida
const start= ()=>{
	body.style.backgroundColor= '#2a416c';
	doll.setAttribute('src', 'images/forca/forca-0.png');
	
	let roundRiddle= riddles[Math.floor(Math.random() * (riddles.length - 1))];
	roundRiddle= riddles[Math.floor(Math.random() * (riddles.length - 1))];
	roundRiddle= riddles[Math.floor(Math.random() * (riddles.length - 1))];
	
	riddles.splice(riddles.indexOf(roundRiddle), 1);
	
	answer= roundRiddle.answer;
	
	riddle.textContent= roundRiddle.riddle;
	
	win= calcWin(answer);
	lose= 0;
	
	keyClick();
	hideAnswer();	
} 

btnNext.addEventListener('click', ()=>{
	document.location.reload();
});

// esconder a resposta
const hideAnswer= ()=>{
	let html=`<img class="question-icon" src="images/question-icon-final.png">`;
	for(let index= 0; index < answer.length; index++){
		answerDiv.insertAdjacentHTML('afterbegin', html);
	}
}

// selecionar a letra correta
const guessRight= (rLetter)=>{
	const hiddenLetters= document.querySelectorAll(".question-icon");
	win--;
	if(win >= 0  && lose >= 0){
		for(let index= 0; index <= answer.length - 1; index++){		
			if(answer[index] === rLetter){
				hiddenLetters[index].setAttribute('src', `images/alphabet/${rLetter.toLowerCase()}.png`);
			}
		}
		if( win === 0){
			setTimeout(()=>endGame(), 500);
			body.style.backgroundColor= '#e64241'
			doll.setAttribute('src', 'images/win.jpg');

		}
	}
}

// selecionar a letra errada
const guessWrong= ()=>{
	lose++;
	doll.setAttribute('src', `images/forca/forca-${lose}.png`);
	if(lose === 5){
		body.style.backgroundColor= '#bbdbf4';
		endGame();
	}	
}

// tentativa
const guess= (letter)=>{	
	
	if(answer.includes(letter)){
		guessRight(letter);
		
	}else{
		guessWrong();
	}
}

start();


