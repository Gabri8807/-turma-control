const tela = require('readline-sync')
const { titulo } = require('./utils')
const { alunos, addNota } = require('./data')

function telaCadastrarNotas() {
  titulo('CADASTRO DE NOTAS')

  if (alunos.length === 0) {
    console.log("Nenhum aluno cadastrado ainda.")
    return
  }

  for (let i = 0; i < alunos.length; i++) {
    const partes = alunos[i].split(";")
    console.log(`${i + 1} - ${partes[1]}`)
  }

  const idDigitado: string = tela.question('\nDigite o número do aluno: ')
  const posicao: number = Number(idDigitado) - 1 

  if (isNaN(posicao) || posicao < 0 || posicao >= alunos.length) {
    console.log("Número inválido!")
    return
  }

  const n1: string = tela.question('Nota 1 (0-10): ')
  const n2: string = tela.question('Nota 2 (0-10): ')
  const n3: string = tela.question('Nota 3 (0-10): ')

  addNota(posicao, n1, n2, n3)

  const nomeAluno = alunos[posicao].split(";")[1]
  console.log(`\nNotas de ${nomeAluno} salvas com sucesso!`)
}

export { telaCadastrarNotas }
