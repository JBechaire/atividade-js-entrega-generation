
import readline from 'readline-sync'
 
 
//atividade 01 de if else
 
let numero1, numero2, numero3, soma;
 
numero1 = readline.questionInt("Digite a primeiro numero: ");
numero2 = readline.questionInt("Digite a segundo numero: ");
numero3 = readline.questionInt("Digite a terceiro numero: ");
 
soma = numero1 + numero2
 
if(soma > numero3){
  console.log(`A soma de ${numero1} + ${numero2} é MAIOR do que ${numero3}`);
}
else if(soma < numero3){
    console.log(`A soma de ${numero1} + ${numero2} é MENOR do que ${numero3}`);
}
else{
    console.log(`A soma de ${numero1} + ${numero2} é IGUAL do que ${numero3}`);
}

 