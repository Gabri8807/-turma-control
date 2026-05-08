const tela = require('readline-sync')
const {titulo} = require('./utils')


let notas: string[] = []

function telaCadastrarNotas() {

	titulo('Cadastro de notas')

	console.log()
	const n1 = tela.question('Digite a primeira nota: ')
	const n2 = tela.question('Digite a segunda nota: ')
	const n3 = tela.question('Digite a terceira nota: ')

	notas.push(`${n1}, ${n2}, ${n3}`)
}

export { telaCadastrarNotas }
