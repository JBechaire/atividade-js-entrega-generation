
import readline from 'readline-sync';
//atividade 03

let contadorMenor21 = 0;
let contadorMaior50 = 0;

console.log('--- Contagem de idades ---');

while (true) {

	let entrada = readline.question('Digite uma idade: ');
	let idade = parseInt(entrada, 10);

	
	if (isNaN(idade)) {
		console.log('Entrada inválida. Por favor, digite um número inteiro.');
		continue; // pede novamente
	}

	if (idade < 0) {
		break; // sai do loop
	}

	
	if (idade < 21) {
		contadorMenor21++;
	}

	if (idade > 50) {
		contadorMaior50++;
	}
}

console.log(`\nTotal de pessoas menores de 21 anos: ${contadorMenor21}`);
console.log(`Total de pessoas maiores de 50 anos: ${contadorMaior50}`);



