let alunos: string[] = []
let notas: string[][] = []

function addAluno(nome: string, dataNascimento: string, telefone: string, email: string) {
    const id = alunos.length + 1
    alunos.push(`${id};${nome};${dataNascimento};${telefone};${email}`)
}

function listarAlunos() {
    for (let i: number = 0; i < alunos.length; i++) {
        console.log(alunos[i])
    }
}

function addNotas(posicaoAluno:number, nota1:number, nota2:number, nota3:number) {
    const aluno = alunos[posicaoAluno] 
    
}

export = { addAluno, listarAlunos, addNotas }
