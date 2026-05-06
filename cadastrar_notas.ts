const tela = require('readline-sync')

let notas: string[] = []

function telaCadastrarNotas() {

	console.log()
	const n1 = tela.question('Digite a primeira nota: ')
	const n2 = tela.question('Digite a segunda nota: ')
	const n3 = tela.question('Digite a terceira nota: ')

	notas.push(`${n1}, ${n2}, ${n3}`)
}

export { telaCadastrarNotas }
