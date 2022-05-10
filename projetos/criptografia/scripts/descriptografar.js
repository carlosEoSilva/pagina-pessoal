const descriptografar= () =>{
	let input= textCripto.value
	let strCripto= input.toLowerCase();
	let strDecripto= [];
	
	for(var ind= 0; ind < strCripto.length; ind++){
		let letra= strCripto[ind];

		switch(strCripto[ind]){
			case 'a':
				strDecripto.push(letra);
				ind++;
				break;

			case 'e':
				strDecripto.push(letra);
				ind+=4;
				break;
			
			case 'i':
				strDecripto.push(letra);
				ind+=3;
				break;

			case 'o':
				strDecripto.push(letra);
				ind+=3;
				break;

			case 'u':
				strDecripto.push(letra);
				ind+=3;
				break;

			default:
				strDecripto.push(letra);
				break;
		}
				
	}
	textDecripto.value= strDecripto.join('');
}
