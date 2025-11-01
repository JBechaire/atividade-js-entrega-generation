import readline from 'readline-sync';
 
let salarioBruto;
let adicinalNoturno;
let horasExtras;
let descontos;
 
let salarioLiquido;
 
 
salarioBruto = readline.questionFloat("Digite seu salario bruto: ");
adicinalNoturno = readline.questionFloat("Digite o adicional noturno: ");           
horasExtras = readline.questionFloat("Digite o valor das horas extras: ");           
descontos = readline.questionFloat("Digite o total de descontos: ");
 

salarioLiquido = salarioBruto + adicinalNoturno + (horasExtras * 5) - descontos;

console.log(`\n O salario liquido é: ${salarioLiquido.toFixed(2) }`);
