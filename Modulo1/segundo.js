// A partir do seguinte vetor e utilizando os métodos de array 
// (map, reduce, filter e find):

// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

// Multiplique a idade de todos usuários por dois e depois realize um filtro 
// nos usuários que possuem no máximo 50 anos:


const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];


const idadeUsers = usuarios.map(user => user.idade);
console.log(idadeUsers);

const resultEmpresaIdade = usuarios.filter(users => users.empresa === "Rocketseat" && users.idade > 18);
console.log(resultEmpresaIdade);

const trabGoogle = usuarios.find(users => users.empresa === "Google");
console.log(trabGoogle);

const multId2 = usuarios.map(users => ({ ...users, idade: users.idade * 2 })).filter(users => users.idade <= 50);
console.log(multId2);

