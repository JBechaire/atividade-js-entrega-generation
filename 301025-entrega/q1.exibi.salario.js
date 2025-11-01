

import readline from 'readline-sync';
 
let salario;
let abono;
let novosalario;
 
 
salario = readline.questionFloat("Digite seu salario: ");
abono = readline.questionFloat("Digite seu abono: ");           
 
novosalario = salario + abono;
 
console.log(`\n O novo salario é: ${novosalario.toFixed(2) }`);
 


