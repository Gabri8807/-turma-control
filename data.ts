const fs = require("fs")

let alunos: string[] = []
let notas: string[] = []

function gerarArquivo(arquivo: string) {
  if (!fs.existsSync(arquivo)) {
    fs.writeFileSync(arquivo, "")
  }
}

function addAluno(nome: string, dataNascimento: string, telefone: string) {
  const id = alunos.length + 1
  alunos.push(`${id};${nome};${dataNascimento};${telefone}`)
  notas.push("")
  fs.appendFileSync("alunos.txt", `${id};${nome};${dataNascimento};${telefone}\n`)
}

function addNota(posicao: number, n1: string, n2: string, n3: string) {
  if (posicao < 0 || posicao >= alunos.length) {
    console.log("Aluno não encontrado!")
    return
  }
  notas[posicao] = `${n1};${n2};${n3}`
}

function listarAlunos() {
  if (alunos.length === 0) {
    console.log("Nenhum aluno cadastrado.")
    return
  }

  for (let i = 0; i < alunos.length; i++) {
    const notaAluno = (notas[i] ?? "") === "" ? "sem notas" : (notas[i] ?? "").replace(/;/g, " | ")
    console.log(`[${i + 1}] ${(alunos[i] ?? "").split(";")[1]} — Notas: ${notaAluno}`)
  }
}

export = { addAluno, addNota, listarAlunos, alunos, notas, gerarArquivo }
