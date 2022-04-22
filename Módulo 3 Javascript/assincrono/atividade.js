/******  Atividade: API "catAPI" ********
 * 
 * Nesta atividade, crie uma página que carrega fotos aleatórias de gatos sempre que clicar em um botão.
 * 
 * 1. Utilize a API "https://thatcopy.pw/catapi/rest" para fazer as chamadas com o método fetch();
 * 
 * 2. Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão;
 * 
 * 
*/

const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catBtn = document.getElementById("change-cat");
const catImg = document.getElementById("cat");

const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    } catch(e) {
        console.log(e.message);
    }
};

const loadImg = async () => catImg.src = await getCats();

catBtn.addEventListener("click",loadImg);

loadImg();