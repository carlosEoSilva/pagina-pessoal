'use strict';
///////////////////////////////////////
// Modal window

const openModal = function (event) {
//   event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach( btn =>{
	btn.addEventListener('click', openModal);
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////
// Page navigation 

btnScroolTo.addEventListener('click', () =>{
	section1.scrollIntoView({behavior: 'smooth'});
});

// Adicionar o scrooll nos botões usando 'event delegation'
document.querySelector('.nav__links').addEventListener('click', function(event){
	event.preventDefault();

	// verificando o elemento
	if(event.target.classList.contains('nav__link')){
		const id= event.target.getAttribute('href'); 
		console.log(document.querySelector(id));
		document.querySelector(id).scrollIntoView({behavior: 'smooth'});
	}
});

tabsContainer.addEventListener('click', (event)=>{
	event.preventDefault();
	// busar o elemento pai mais próximo com a classe '.operations__tab'.
	const clicked= event.target.closest('.operations__tab'); 

	// se o usuário clicar fora do botão o 'clicked' vai ficar null e incerrar a função.
	if(!clicked) return;

	clicked.classList.add('operations__tab--active');

	// primeiro remove a classe de todas as tabs e depois adiciona na tab que foi clicada.
	tabs.forEach( _tab => _tab.classList.remove('operations__tab--active'));
	tabsContent.forEach( _tabc => _tabc.classList.remove('operations__content--active'));
	
	clicked.classList.add('operations__tab--active');
	document
		.querySelector(`.operations__content--${clicked.dataset.tab}`)
		.classList.add('operations__content--active');	
});
//////////////////////////////////////////
// efeito fade nos botões do navbar
const handleHover= (event, opacity) =>{
	if(event.target.classList.contains('nav__link')){
		const link= event.target;
		const siblings= link.closest('.nav').querySelectorAll('.nav__link');
		const logo= link.closest('.nav').querySelector('img');

		siblings.forEach((element) =>{
			if(element !== link) element.style.opacity= opacity;
		});
		logo.style.opacity= opacity;
	}
}

nav.addEventListener('mouseover', (event) =>{
	handleHover(event, 0.5);
});

nav.addEventListener('mouseout', (event) =>{
	handleHover(event, 1);
});
/////////////////////////////
// sticky navigation 
const stickyNav= function(entries){
	const [entry]= entries;
	// console.log(entry);
	// console.log(entries);

	if(entry.isIntersecting === false){
		nav.classList.add('sticky');
	}else{
		nav.classList.remove('sticky');
	}
}

const headerObserver= new IntersectionObserver(stickyNav, { root: null, threshold: 0 });

headerObserver.observe(header);
/////////////////////////////////
// reveal sections
const revealSection= (entries, observer) =>{
	const [entry]= entries;
	// console.log(entry);

	if(!entry.isIntersecting) return;

	entry.target.classList.remove('section--hidden');
	observer.unobserve(entry.target);
}

const sectionObserver= new IntersectionObserver(revealSection,{root: null, threshold: 0.15});

allSections.forEach((section) =>{
	// console.log(section);
	sectionObserver.observe(section);
	section.classList.add('section--hidden');
});

/////////////////////
// lazy images 
const loadImg= (entries, observer)=>{
	const [entry]= entries;

	console.log(entry);
	
	if(!entry.isIntersecting) return;

	// replace src with data-src
	entry.target.src= entry.target.dataset.src;
	entry.target.classList.remove('lazy-img');

	entry.target.addEventListener('load', ()=>{
		
		entry.target.classList.remove('lazy-img');
	});

	observer.unobserve(entry.target);
}

const imgOberver= new IntersectionObserver(loadImg, {root: null, threshold: 0, margin: '-200px'});

imgTargets.forEach((img)=>{
	imgOberver.observe(img);
})

////////////////////////////
// criando os slides 
// reduzir o tamanho das imagens em 50% para testes.
slider.style.transform= 'scale(0.7)';
slider.style.overflow= 'visible';

let curSlide= 0;
let maxSlides= slides.length -1;

slides.forEach((slide, index)=>{
	//  faz com que as imagens fique lado a lado no html, começando na posição 0% 100% e assim por diante.
	slide.style.transform= `translateX(${100 * index}%)`;
});

const createDots= ()=>{
	slides.forEach((_, index)=>{
		// inserir o elemento button bem no final do container.
		dotContainer.insertAdjacentHTML( 'beforeend', `<button class="dots__dot" data-slide="${index}"></button>`)
	});
}

createDots();

const activateDot= (slide)=>{
	document
		.querySelectorAll('.dots__dot')
		.forEach(dot => dot.classList.remove('dots__dot--active'));

	document
		.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");// o colchete serve para adicionar o seletor por dataset.
}

const goToSlide= function(_slide){
	slides.forEach((slide, index)=>{
		(slide.style.transform= `translateX(${100 * (index - _slide)}%)`);
	});
}

goToSlide(0);

// next slide
const nextSlide= ()=>{
	if(curSlide === maxSlides){
		curSlide= 0;
	}else{
		curSlide++;
	}
	goToSlide(curSlide);
	activateDot(curSlide);
}

// previous slide
const prevSlide= ()=>{
	if(curSlide ===  0){
		curSlide= maxSlides;
	}else{
		curSlide--;
	}
	goToSlide(curSlide);
	activateDot(curSlide);
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', (event)=>{
	if(event === 'ArrowLeft') prevSlide();
	if(event === 'ArrowRight') nextSlide();
});

dotContainer.addEventListener('click', (event)=>{
	if(event.target.classList.contains('dots__dot')){
		const slide= event.target.dataset.slide;
		goToSlide(slide);
		activateDot(slide);
	}
})


