import readline from 'readline-sync'

//exercicio 06 Laço Condicional Switch

let nomeColaborador;
let codigoCargo;
let salario;


	nomeColaborador = readline.question("Digite o nome do colaborador: ");
	codigoCargo = parseInt(readline.question("Digite o codigo do cargo (1 a 6): "), 10);
	salario = parseFloat(readline.question("Digite o salario atual: "));


let cargo;
let percentual;

switch (codigoCargo) {
	case 1:
		cargo = 'Gerente';
		percentual = 0.10;

		break;
	case 2:
		cargo = 'Vendedor';
		percentual = 0.07;
		break;
	case 3:
		cargo = 'Supervisor';
		percentual = 0.09;
		break;
	case 4:
		cargo = 'Motorista';
		percentual = 0.06;
		break;
	case 5:
		cargo = 'Estoquista';
		percentual = 0.05;
		break;
	case 6:
		cargo = 'Técnico de TI';
		percentual = 0.08;
		break;
	default:
		console.log('Codigo de cargo invalido! Use um numero entre 1 e 6.');
		process.exit(1);
}

const novoSalario = salario + (percentual * salario);

console.log('\nNome do Colaborador: ' + nomeColaborador);
console.log('Cargo: ' + cargo);
console.log('Novo Salario: R$ ' + novoSalario.toFixed(2));

