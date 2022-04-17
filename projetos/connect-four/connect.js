document.addEventListener('DOMContentLoaded', () => {
	const squares= document.querySelector('.grid');
	const result= document.querySelector('.grid div');
	const displayCurrentPlayer= document.querySelector('#current-player');

	for(var i= 0, len = squares.length; i < len; i++){
		//add an onClick to each square in your grid
		squares[i].onClick= function(){
			//if the square below your current square is taken, you can go ontop of it
			if(squares[index + 7].classList.contains('taken')){
				if(currentPlayer === 1){
					squares[index].classList.add('taken');
					squares[index].classList.add('player-one');
					//change the player
					currentPlayer= 2;
					displayCurrentPlayer.innerHTML= currentPlayer;
				}else if(currentPlayer === 2){
					squares[index].classList.add('taken');
					squares[index].classList.add('player-two');
					//change the player
					currentPlayer= 1;
					displayCurrentPlayer.innerHTML= currentPlayer;
				}

			} else alert('cant go here');
		}
	}
})