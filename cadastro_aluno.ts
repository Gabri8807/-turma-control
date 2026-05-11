const tela = require('readline-sync')
const {titulo} = require('./utils')

let alunos: string[] = []
const { addAluno, listarAlunos } = require('./data.ts')


function telaCadastro() {
	titulo("CADASTRO DE ALUNOS")
	const nomeAluno: string = tela.question('Digite o nome do aluno: ')
	const dataNascimento: string = tela.question('Digite a data de nascimento do aluno: ')
	const contato: string = tela.question('Digite o numero de contato do aluno: ')
	const email: string = tela.question('Digite o email do aluno: ')
	
	
	const aluno = `${nomeAluno}, ${dataNascimento}, ${contato}, ${email}`
	

	alunos.push(aluno)

	addAluno(nomeAluno, dataNascimento, contato, email)
}

function telaListaAlunos() {
	titulo("LISTA DE ALUNOS")

	for (let i = 0; i < alunos.length; i++) {
		console.log(`${i + 1} - ${alunos[i]}`)
	}

	listarAlunos()
}


export { telaCadastro, telaListaAlunos }
