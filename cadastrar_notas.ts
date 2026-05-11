const tela = require('readline-sync')
const {titulo} = require('./utils.ts')
const { alunos } = require('./data.ts')

let notas: string[] = []

function telaCadastrarNotas() {

	titulo('CADASTRO DE NOTAS')

	const idAluno:number = tela.question('Digite o id do aluno: ')
	const posicao:number = Number(idAluno) - 1

	if (posicao === undefined) {
		console.log('Aluno não encontrado')
	} else {
	const n1 = tela.question('Digite a primeira nota: ')
	const n2 = tela.question('Digite a segunda nota: ')
	const n3 = tela.question('Digite a terceira nota: ')
   }
}

export { telaCadastrarNotas }
