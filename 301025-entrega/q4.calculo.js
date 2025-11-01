import readline from 'readline-sync';
 
let n1;
let n2;
let n3;
let n4;
 let calculo;

n1 =readline.questionInt("Digite o primeiro numero: ");
n2 =readline.questionInt("Digite o segundo numero: ");
n3 =readline.questionInt("Digite o terceiro numero: ");
n4 =readline.questionInt("Digite o quarto numero: ");

calculo = (n1 * n2) - (n3 * n4);

console.log("O resultado do cauculo é: " + calculo);
