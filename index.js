//esta função faz com que o DOM seja carregado antes de executar o script, é usado quando a tag script está no head, também pode-se usar o atributo "defer" dentro ta tag <script>, tem o mesmo efeito
document.addEventListener('DOMContentLoaded', ()=>{

//alert("teste");
const openModal= document.querySelector('.btn-quem-sou');
const overlay= document.querySelector("#overlay");
const modal= document.querySelector(".modal");


openModal.addEventListener("click", openModalFunc);
overlay.addEventListener("click", closeModalFunc);

function openModalFunc(){	
	modal.classList.add('active');
	overlay.classList.add('active');
}

function closeModalFunc(){
	modal.classList.remove('active');
	overlay.classList.remove('active');

}

})

