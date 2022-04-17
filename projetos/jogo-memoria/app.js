document.addEventListener('DOMContentLoaded', ()=>{

//cartas do jogo
const cardArray= [
	{
		name: 'aries',
		img: 'images/aries.png'
	},
	{
		name: 'aries',
		img: 'images/aries.png'
	},
	{
		name: 'cancer',
		img: 'images/cancer.png'
	},
	{
		name: 'cancer',
		img: 'images/cancer.png'
	},
	{
		name: 'escorpiao',
		img: 'images/escorpiao.png'
	},
	{
		name: 'escorpiao',
		img: 'images/escorpiao.png'
	},
	{
		name: 'gemeos',
		img: 'images/gemeos.png'
	},
	{
		name: 'gemeos',
		img: 'images/gemeos.png'
	},
	{
		name: 'leao',
		img: 'images/leao.png'
	},
	{
		name: 'leao',
		img: 'images/leao.png'
	},
	{
		name: 'libra',
		img: 'images/libra.png'
	},
	{
		name: 'libra',
		img: 'images/libra.png'
	},
	{
		name: 'sagitario',
		img: 'images/sagitario.png'
	},
	{
		name: 'sagitario',
		img: 'images/sagitario.png'
	},
	{
		name: 'touro',
		img: 'images/touro.png'
	},
	{
		name: 'touro',
		img: 'images/touro.png'
	},
	{
		name: 'virgem',
		img: 'images/virgem.png'
	},
	{
		name: 'virgem',
		img: 'images/virgem.png'
	},
]

cardArray.sort(() => 0.5 - Math.random());
const grid= document.querySelector('.grid');
const trophy= document.querySelector('.trophy');
var cardsChosen= [];
var cardsChosenId= [];
var cardsWon= [];

//botão para resetar o jogo
document.querySelector('.btn-recomecar').addEventListener('click',() => document.location.reload());

//criar o tabuleiro
function createBoard(){
	for(let i= 0; i < cardArray.length; i++){
		var card= document.createElement('img');
		card.setAttribute('src', 'images/carta-atras.png');
		card.setAttribute('id', i);
		card.setAttribute('class','card-symbol');
		card.addEventListener('click', flipCard);
		grid.appendChild(card);
	}
	
}

//verificar se as cartas são iguais
function checkForMatch(){
	var cards= document.querySelectorAll('.card-symbol');
	const optionOneId= cardsChosenId[0];
	const optionTwoId= cardsChosenId[1];

	if(cardsChosen[0] === cardsChosen[1]){		
		cards[optionOneId].style.visibility='hidden';
		cards[optionTwoId].style.visibility='hidden';
		cardsWon.push(cardsChosen);
	} else{
		cards[optionOneId].setAttribute('src', 'images/carta-atras.png');
		cards[optionTwoId].setAttribute('src', 'images/carta-atras.png');
	}

	cardsChosen= [];
	document.getElementById(cardsChosenId[0]).addEventListener('click', flipCard);
	document.getElementById(cardsChosenId[1]).addEventListener('click', flipCard);
	cardsChosenId= [];
	if(cardsWon.length === cardArray.length/2){
		alert('Parabéns, você venceu!!');
		trophy.style.visibility="visible";		
	}
}

//virar a carta para cima
function flipCard(){
	var cardId= this.getAttribute('id');
	cardsChosen.push(cardArray[cardId].name);
	cardsChosenId.push(cardId);
	this.setAttribute('src', cardArray[cardId].img);
	this.removeEventListener('click', flipCard);
	if(cardsChosen.length === 2){
		setTimeout(checkForMatch, 500);
	}
}
createBoard();
})