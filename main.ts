const tela = require("readline-sync")
const cadastro = require("./cadastro_aluno.ts")
const { telaCadastrarNotas } = require("./cadastrar_notas.ts")
const { gerarArquivo  } = require('./data.ts')

// função inicial para chamar as telas
function main() {

  gerarArquivo("alunos.txt") // tem com responsabilidade de verificar se existe o arquivo	
  let loop = true //inicializa o loop  

  while(loop) { // roda até quando o usuário não digitar '0'
    console.log("1 - Cadastrar aluno |  2 - Listar Aluno | 3 - Cadastrar Notas | 0 - Sair")
    const opcao:string = tela.question("Deseja continuar? ")
    switch(opcao) {
      case "0":
        loop = false //para parar o loop
      break
      case "1":
        cadastro.telaCadastro()
      break
      case "2":
        cadastro.telaListaAlunos()
      break
      case "3":
        telaCadastrarNotas()
      break
      
      default: // caso não coloque a opção valida cai aqui 
        console.log("Opção invalida!")
      break
    } 
  }
}
// inicializar o sistema
main()
