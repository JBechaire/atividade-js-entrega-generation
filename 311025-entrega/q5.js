import readline from 'readline-sync'
 
let codigo, quantidade, produto, total;
 
//exercicio 05 laco condicional
 
console.log("\n--Digite o codigo do produto: ");
codigo = readline.questionInt();
console.log("--Digite a quantidade do produto: ");
quantidade = readline.questionInt();
 
switch(codigo){
  case 1: //cachorro quente
    total = quantidade * 10.00;
    produto = "Cachorro quente";
    console.log(`Produto: ${produto}  \nValor total: ${total.toFixed(2)} `);
  break;
 
  case 2: //x-salada
    total = quantidade * 15.00;
    produto = "X-salada";
  console.log(`Produto: ${produto}  \nValor total: ${total.toFixed(2)} `);
  break;
 
  case 3: // x bacon
    total = quantidade * 18.00;
    produto = "X-Bacon";
    console.log(`Produto: ${produto}  \nValor total: ${total.toFixed(2)} `);
    break;
 
    case 4:// bauru
    total = quantidade * 12.00;
    produto = "Bauru";
    console.log(`Produto: ${produto}  \nValor total: ${total.toFixed(2)} `);
    break;
 
    case 5:// refrigerante
    total = quantidade * 8.00;
    produto = "Refrigerante";
    console.log(`Produto: ${produto}  \nValor total: ${total.toFixed(2)} `);
    break;
 
    case 6: //suco de laranja
    total = quantidade * 13.00;
    produto = " Suco de laranja";
    console.log(`Produto: ${produto}  \nValor total: ${total.toFixed(2)} `);
    break;
 
   default:
    console.log("opcao invalida");
 
 
}