//Converta as funções nos seguintes trechos // 3.2
//de código em Arrow Functions:             // Dica: Utilize uma constante pra function
// 3.1                                      // const usuario = { nome: 'Diego', idade: 23 };
//const arr = [1, 2, 3, 4, 5];              // function mostraIdade(usuario) {
//arr.map(function(item) {                  // return usuario.idade;
// return item + 10;                        // }
//});                                       // mostraIdade(usuario);

// 3.1

const arr = [1, 2, 3, 4, 5];

const resultado = arr.map(item => item + 10);
console.log(resultado);

// 3.2

const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = user => user.idade;
console.log(mostraIdade(usuario));

// 3.3                                                  // 3.4
// Dica: Utilize uma constante pra function             // const promise = function() {
//const nome = "Diego";                                 // return new Promise(function(resolve, 
//}                                                     // reject) {
//const idade = 23;                                     // return resolve();
//function mostraUsuario(nome='Diego',idade = 18) {     // })
// return { nome, idade };                              // }
//mostraUsuario(nome, idade);                           //
//mostraUsuario(nome);                                  //

// 3.3
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
const promise1 = () => new Promise(resolve, reject => resolve());

console.log(promise1);


