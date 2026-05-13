const fs = require("fs")

let alunos:string[] = []

function gerarArquivo(arquivo:string) {
  if (!fs.existsSync(arquivo)) {
    fs.writeFileSync(arquivo, "")  
  }
}

function addAluno(nome:string, dataNascimento:string, telefone:string, email:string){
  listarAlunos()
  const id = alunos.length + 1
  alunos.push(`${id};${nome};${dataNascimento};${telefone}`)		
  const aluno = `${id};${nome};${dataNascimento};${telefone}`
  fs.appendFileSync("alunos.txt", `${aluno}\n`)
  listarAlunos()
}

function listarAlunos(){
	for(let i:number = 0; i < alunos.length; i++) {
		console.log(alunos[i])
	}

}

function addNotas(posicaoAluno:number, nota1:number, nota2:number,nota3:number){
	const aluno = alunos[posicaoAluno]
	alunos[posicaoAluno] = `${aluno};${nota1};${nota2};${nota3}`
}

export = { addAluno, listarAlunos, addNotas, alunos }
export = { addAluno, listarAlunos, addNotas, alunos, gerarArquivo }
