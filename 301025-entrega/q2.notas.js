import readline from 'readline-sync';
 
let nota1;
let nota2;
let nota3;
let nota4;
 
let media;
 
 
nota1 = readline.questionFloat("Digite a nota 1: ");
nota2 = readline.questionFloat("Digite a nota 2: ");
nota3 = readline.questionFloat("Digite a nota 3: ");
nota4= readline.questionFloat("Digite a nota 4: ");
 
media = (nota1 +nota2+nota3+nota4)/4
 
console.log(`A media final do participante é: ${media.toFixed('1')}`);

