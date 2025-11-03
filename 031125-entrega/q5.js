
import readline from 'readline-sync';

// Atividade 05

let somaPositivos = 0;
let numero;

do {
 numero = readline.questionInt('Digite um número positivo: ');
		
	if (numero > 0) {
		somaPositivos += numero;
	}

} while (numero !== 0);

console.log(`\n A soma dos números positivos é: ${somaPositivos}`);





