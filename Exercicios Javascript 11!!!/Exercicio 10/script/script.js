let nome, ano_nascimento, ano_atual;

nome = prompt('Qual o seu nome?');
ano_nascimento = parseInt(prompt('Qual ano você nasceu? '));
ano_atual = parseInt(prompt('Qual ano atual? '));

let idade = ano_atual-ano_nascimento
console.log(idade+ '\n' + nome)