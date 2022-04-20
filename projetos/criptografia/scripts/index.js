alert("Bem-vindo ao meu site de criptografia, para o correto funcionamento não use acentos ou caracters especiais, eles não serão convertidos.")

btnCripto.addEventListener('click', () => criptografar());

btnDescripto.addEventListener('click', () => descriptografar());

btnCopiar.addEventListener('click', () =>{
	navigator.clipboard.writeText(textCripto.value);	    
	alert("Criptografia enviada para área de transferência");
});

btnCopiar.addEventListener('mouseover', () =>{
	textCripto.classList.add("borda-laranja");
});

btnCopiar.addEventListener('mouseout', () =>{
	textCripto.classList.remove("borda-laranja");
});

btnLimpar.addEventListener('click', () =>{
	textCripto.value= '';
	textDecripto.value= '';
});

btnLimpar.addEventListener('mouseover', () =>{
	textCripto.classList.add("borda-laranja");
	textDecripto.classList.add("borda-laranja");
});

btnLimpar.addEventListener('mouseout', () =>{
	textCripto.classList.remove("borda-laranja");
	textDecripto.classList.remove("borda-laranja");
});

