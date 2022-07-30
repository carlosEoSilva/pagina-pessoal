// alert();
class PaginaHerois {
  constructor (seletorContainer, url) {
    let _self = this;
    //-container = todo o body da página.
	this.container = document.querySelector(seletorContainer);
    this.btnFilter = this.container.querySelector("#filter"); 
    this.btnAdd= this.container.querySelector("#add");
    this.btnMask= this.container.querySelector(".mask");
    this.heroesList= this.container.querySelector(".grid-container");
    this.heroNameField= this.container.querySelector("#fname");
    this.inputAttrNumber= this.container.querySelector("#fvalue");
    _self.modal= this.container.querySelector('#modal');
    _self.overlay= this.container.querySelector('#overlay');
    //-armazenar o retorno da API.
	  this.heroArray= [];

    //-evento de clique no botão FILTRAR
    this.btnFilter.onclick = function (event) {
      event.preventDefault(); 
      _self.clearPage();
      _self.applyFilterHeroes();
    } 

    //evento de clique no botão ADICIONAR
    this.btnAdd.onclick= function(event){
      event.preventDefault();
      _self.clearPage();
      _self.heroCall(url);
    }

    

    _self.overlay.onclick= function(){
      _self.modal= this.container.querySelector('#modal');
      if(!_self.modal){
        console.log("no modal");
      }else{
        _self.modal.remove();
	      overlay.classList.remove('active');
      }
    }

    _self.heroesList.onclick= function(event){
      _self.showModal(event.target.id);
    }

    //preencher a pagina inicial
    _self.heroCall(url);
  }

//chamada da API
heroCall(_url){
  fetch(_url)
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      this.heroArray= data;
      this.setHeroes(this.heroArray);
    })
}

//
destroyModal(){
  console.log("destroy modal");
  this.modal.remove();
}

//
showModal(heroId){

  this.overlay.classList.add('active');

  let hero= this.heroArray.filter((_hero)=>{
    return _hero.id == heroId;
  });

  console.log(hero[0].name);

  let html= `
  <div class="modal active" id="modal">
				<div class="modal-header">
					<div class="title">${hero[0].name}</div>
				</div>
				<div class=" modal-body">
					<p class="alt-p w3-left-align p-modal">${hero[0].biography.fullName}</p>
				</div>
	</div>`

  this.heroesList.insertAdjacentHTML('beforeend', html);



  // modal.classList.add('active');
  // overlay.classList.add('active');
};

//aplicar filtros de busca
applyFilterHeroes() {  
    let filteredHeroes= []; 
    let attrValue= Number(this.inputAttrNumber.value);
    let heroName= this.heroNameField.value.toLowerCase();
    let attribute= this.container.querySelector("#attribute").value;
    let comparison= this.container.querySelector("#compare").value;

    if(heroName && attrValue){
      switch(comparison){
        case '===':
          filteredHeroes= heroes.filter((_hero)=>{
            return _hero.name.toLowerCase() === heroName && _hero.powerstats[attribute] === attrValue;
          });
        break;
        
        case '>':
          filteredHeroes= heroes.filter((_hero)=>{
            _hero.name= _hero.name.toLowerCase();
            return _hero.name.toLowerCase() === heroName && _hero.powerstats[attribute] > attrValue;
          });
        break;
        
        case '<':
          filteredHeroes= heroes.filter((_hero)=>{
            return  _hero.name.toLowerCase() === heroName && _hero.powerstats[attribute] < attrValue;
          });
        break;
      }

      //this.setHeroes(filteredHeroes);
      
    }
    else if(heroName){
        filteredHeroes= this.heroArray.filter((_hero)=>{
        return _hero.name.toLowerCase() === heroName;
      });

    }
    else if(attrValue){
      switch(comparison){
        case '===':
          filteredHeroes= this.heroArray.filter((_hero)=>{
            return _hero.powerstats[attribute] === attrValue;
          });
        break;
        
        case '>':
          filteredHeroes= this.heroArray.filter((_hero)=>{
            return _hero.powerstats[attribute] > attrValue;
          });
        break;
        
        case '<':
          filteredHeroes= this.heroArray.filter((_hero)=>{
            return  _hero.powerstats[attribute] < attrValue;
          });
        break;
      }
    }
    else{
      this.setHeroes(this.heroArray);
    }

    this.heroNameField.value= "";
    this.clearPage();
    this.setHeroes(filteredHeroes);
}    

//limpar a pagina
clearPage(){
  let cards= this.container.querySelectorAll(".grid-item");
  cards.forEach((card)=>{
    card.remove();
  })
}

//preencher a home    
setHeroes(_heroes) {
  _heroes.forEach((hero)=>{
      let html= this.heroTemplate(hero);
      this.heroesList.insertAdjacentHTML('beforeend', html);
  })     
}

fsetHeroes(_heroes) {
  _heroes.forEach((hero)=>{
    if(hero.appearance.gender === "Female"){
      let html= this.heroTemplate(hero);
      this.heroesList.insertAdjacentHTML('beforeend', html);
    }
  })     
}

//criar os cards
heroTemplate (hero) {
    return `
    <div id=${hero.id} class="card grid-item">
    <img class="card-image" src="${hero.images.sm}"/>
    <table class="card-table">
        <th colspan="2">${hero.name}</th>
        <tr>
            <td>Inteligência</td>
            <td>${hero.powerstats.intelligence}</td>
          </tr>

          <tr>
            <td>Força</td>
            <td>${hero.powerstats.strength}</td>
          </tr>

          <tr>
            <td>Velocidade</td>
            <td>${hero.powerstats.speed}</td>
          </tr>

          <tr>
            <td>Resistência</td>
            <td>${hero.powerstats.durability}</td>
          </tr>

          <tr>
            <td>Genero</td>
            <td>${hero.appearance.gender}</td>
          </tr>

          <tr>
            <td>Altura</td>
            <td>${hero.appearance.height[1]}</td>
          </tr>

          <tr>
            <td>Peso</td>
            <td>${hero.appearance.weight[1]}</td>
          </tr>
    </table>
</div>
`;
}

}

const url= "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
var myPage = new PaginaHerois("body", url);
    