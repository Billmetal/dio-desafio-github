/***************** utilizando Map *********************/

const myMap = new Map();

myMap.set("apple","fruit");

console.log(myMap);

var txt = myMap.get("apple");

console.log(txt);

myMap.delete("apple");

console.log(myMap);

txt = myMap.get("apple");

console.log(txt);

console.log("=======================================================");

/***************** utilizando Set *********************/

const mySet = new Set();

mySet.add(1);
mySet.add(5);

console.log(mySet);

var txt = mySet.has(1);

console.log(txt);

txt = mySet.has(3);

console.log(txt);

mySet.delete(5);

console.log(mySet);

/***************** atividade prática *********************/

console.log("========================= Atividade Prática 1 ==============================");

/********  Atividade 1: Maps
 * Crie uma função que retorna o nome dos membros de um Map que tem o papel "ADMIN" no sistema.
 *  1. Crie uma função getAdmins que recebe um Map;
 *  2. Crie um Map e popule-o com nomes de usuários e seus papéis no sistema (Ex: "Luiz" => "Admin");
 *  3. Dentro de getAdmins , utilize o loop for..of para retornar uma lista com os nomes dos usuários que são admins.
 */

function getAdmins(map){
    let admins = [];
    for([key,value] of map){
        if(value === "Admin"){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();
usuarios.set("Luiz","Admin");
usuarios.set("Stephany","Admin");
usuarios.set("Jorge","User");
usuarios.set("Willian","Admin");
usuarios.set("Natália","User");

console.log(getAdmins(usuarios));

 console.log("========================= Atividade Prática 2 ==============================");

/********  Atividade 2: Sets
 * Dado o array [30,30,40,5,223,2049,3034,5] , retorne outro array apenas com valores únicos.
 */

const myArray = [30,30,40,5,223,2049,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);
    return [...mySet];
}

console.log(valoresUnicos(myArray));


