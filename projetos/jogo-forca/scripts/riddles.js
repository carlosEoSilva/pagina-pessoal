const keyboard= document.querySelector('.keyboard');
const riddle= document.querySelector('.riddle');
const answerDiv= document.querySelector('.answer');
const doll= document.querySelector('.img-forca');
const body= document.querySelector('body');
const btnNext= document.querySelector('.next');

let riddles= [
{riddle: 'Tem 5 dedos, mas não tem unha.', answer: 'luva'},
{riddle: 'Feito para andar e não anda.', answer: 'rua'},
{riddle: 'Dá muitas voltas e não sai do lugar', answer: 'relogio'},
{riddle: 'Tem cabeça e tem dente, não é bicho e nem é gente.', answer: 'alho'},
{riddle: 'Não se come, mas é bom para se comer.', answer: 'colher'},
{riddle: ' Anda com os pés na cabeça.', answer: 'piolho'},
{riddle: 'Quanto mais se tira mais se aumenta.', answer: 'buraco'},
{riddle: 'Mesmo atravessando o rio não fica molhada.', answer: 'ponte'},
{riddle: 'Pode passar diante do sol sem fazer sombra.', answer: 'vento'},
{riddle: 'O nadador faz para bater o recorde.', answer: 'nada'},
{riddle: 'Compram para comer, mas nunca comem.', answer: 'prato'},
{riddle: 'Quanto maior é, menos se vê.', answer: 'sombra'},
{riddle: 'Não tem vida, mas pode morrer.', answer: 'bateria'},
{riddle: 'Tem barba e não é bode, tem dente e não morde', answer: 'milho'},
{riddle: 'Cai, mas não se machuca..', answer: 'chuva'},
{riddle: 'O animal que não vale mais nada.', answer: 'javali'},
{riddle: 'Quanto maior menos se vê.', answer: 'sombra'},
{riddle: 'O bicho que anda com as patas.', answer: 'pato'},
{riddle: ' Entra na água e não se molha.', answer: 'sombra'},
{riddle: 'Tem no pomar e no seu paletó.', answer: 'manga'},
{riddle: 'Num instante se quebra quando se diz o nome dele.', answer: 'silêncio'},
];