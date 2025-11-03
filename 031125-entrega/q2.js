

import readline from 'readline-sync';
//atividade 02

let totalPares = 0;
let totalImpares = 0;


for (let i = 1; i <= 10; i++) {
    
    let numero = parseInt(readline.question(`Digite o ${i} número: `));
    
    
    if (numero % 2 === 0) {
        totalPares++; 
    } else {
        totalImpares++; 
    }
}

console.log(`\nTotal de números pares: ${totalPares}`);
console.log(`Total de números ímpares: ${totalImpares}`);
