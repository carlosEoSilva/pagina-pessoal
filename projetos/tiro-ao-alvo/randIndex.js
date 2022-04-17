const numAleatorio= () => Math.floor(Math.random() * 21);

const randPositionsIndex= (qtd)  => {
  let randNum;
  let positions= [];
  positions.push(numAleatorio());
  
	for(let i= 1; i < qtd; i++){

    randNum=  numAleatorio();
   
		while((positions.find((pos) => pos === randNum)) !== undefined){
			randNum=  numAleatorio();
		}   
    
		positions.push(randNum);
		
	}
	//console.log('positions: '+ positions.sort());
	return positions;
}
//