const tela = require("readline-sync")

function main() {

	let loop = true

	while (loop) {
		
	console.log("1 - cadastrar Alunos\n 2 - cadastrar Notas\n 3 - Listar\n 0 - Sair")

		   const opcao: string = tela.question("Deseja continuar?: ")
switch (opcao) {
	case "0":
		loop = false
		break
		case "1":
			break
		case "2":
			break
		case "3":
			break
		default:
			console.log("Opção inválida")
			break
}
		   if (opcao === "0") loop = false

		}
		 
}	

main()
