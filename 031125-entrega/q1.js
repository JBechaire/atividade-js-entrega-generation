


import readline from 'readline-sync'
 
 
//atividade 01
 
let primeiroNumero, ultimoNumero, calculo;

  primeiroNumero= readline.questionInt("Digite a primeiro numero: ");
   ultimoNumero = readline.questionInt("Digite a segundo que seja maior o numero anterior: ");

if (primeiroNumero >= ultimoNumero) {
    console.log("\nIntervalo inválido!");

} else {

    console.log(`\nNo Intervalo entre ${primeiroNumero} e ${ultimoNumero}:\n`);

       for (let numero = primeiroNumero; numero <= ultimoNumero; numero++) {
       
        if (numero % 3 === 0 && numero % 5 === 0) {
            console.log(`${numero} é múltiplo de 3 e 5`);
        }
    }
}
