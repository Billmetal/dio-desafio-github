/******  Atividades  *******
 * 
 *      Map
 * 
 * - Pratique a sintaxe de multiplicação de números , uma vez utilizando o parâmetro this de
 *      um objeto criado por você , e depois sem ele .
 * 
 */

const maca = {
    v: 2,
};

const laranja = {
    v: 3,
};

function mapComThis(arr,obj){
    return arr.map((item) => {return item * obj.v;},obj);
}

function mapSemThis(arr){
    return arr.map((item) => {return item * 2;});
}

const nums = [2,4,6,8,10];

console.log(mapComThis(nums,maca));

console.log(mapComThis(nums,laranja));


console.log(mapSemThis(nums));

console.log("======================================");


 /* 
 *      Filter
 * 
 * - Filtre e retorne todos os números pares  de um array .
 *
 */

function filtraPares(arr){
    return arr.filter((item) => {return item % 2 === 0});
}

const meuArray = [1,23,55,67,30,2,4,19,48];

console.log(filtraPares(meuArray));

console.log("======================================");

 /*      
 *      Reduce
 * 
 * 1. Some todos os números de um array ;
 * 
 * 2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível .
 *      Calcule qual será o saldo final após subtrair todos os preços da lista enviada .
 * 
*/

console.log("resolução 1");

function somaNumeros(arr){
    return arr.reduce((prev,current) => {
        console.log({ prev });
        console.log({ current });
        return prev + current;});
}

const arr = [1,2,4];

console.log(somaNumeros(arr));

console.log("resolução 2");

const lista = [{nome: "sabão em pó",preco: 25},
                {nome: "queijo peça",preco: 123},
                {nome: "café",preco: 18},
                {nome: "cerveja",preco: 95}];

const saldoDisponivel = 350;

function calculaSaldo(saldoDisponivel,lista){
    return lista.reduce((prev,curr,index) => {
        console.log("Rodada " + (index + 1));
        console.log({ prev });
        console.log({ curr });
        return prev - curr.preco;
    },saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel,lista));
