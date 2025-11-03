import readline from 'readline-sync';

//atividade 4

let n1;
let n2;
let n3;
let n4;
let calculo;

n1 = readline.questionFloat("Digite numero 1: ");
n2 = readline.questionFloat("Digite numero 2: ");
n3 = readline.questionFloat("Digite numero 3: ");
n4= readline.questionFloat("Digite numero 4: ");

calculo = (n1*n2)-(n3*n4);

console.log(`A diferença é: ${calculo.toFixed(1)}`);
