
import readline from 'readline-sync';

// Atividade 07

const numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
const numero =readline.questionInt('Digite um número inteiro para buscar no vetor: ');

for (let i = 0; i < numeros.length; i++) {
	if (numeros[i] === numero) {	
		console.log(`\nO número ${numero} está localizado na posição: ${i}`);

	 break;
	} 
}
 console.log(`O número ${numero} não foi encontrado!`);




