const criptografar= () =>{
	let input= textDecripto.value;
	let inputMin= input.toLowerCase();
	let cripto= [...inputMin];
	
	cripto.forEach((letra, ind) =>{
		switch(letra){
			case 'a':
				cripto[ind]= 'ai';
				break;
			case 'e':
				cripto[ind]= 'enter';
				break;
			case 'i':
				cripto[ind]= 'imes';
				break;
			case 'o':
				cripto[ind]= 'ober';
				break;
			case 'u':
				cripto[ind]= 'ufat';	
				break;	
		}	
	});	
	textCripto.value=  cripto.join('');
}


