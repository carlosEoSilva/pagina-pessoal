const bullets= document.querySelectorAll('.bullet');
const grid= document.querySelector('.grid');
var barrel= bullets.length -1;
var capsule= 0;
//console.log(barrel);
// 7 balas que vão de 0 a 6

const reload= () => {
	bullets.forEach(bullet => {
		bullet.classList.remove('transparente');
		grid.classList.remove('no-click');
	});
	barrel= 6;
}
	
const shot= () => {
	if(barrel >= 1){
		bullets[barrel].classList.add('transparente');
		console.log('shot barrel: '+barrel);
		barrel--;
	}else{
		bullets[barrel].classList.add('transparente');
		grid.classList.add('no-click');
		setTimeout(reload, 1500);
	}	
	
}