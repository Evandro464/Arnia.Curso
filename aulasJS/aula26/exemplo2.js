let io = require("../io")

let alunos =[]

for (let i = 0; i < 3; i++){
    io.write("Digite um nome para o Aluno:")
    let nome = io.read()
    io.write("Digite uma nota para o Aluno:")
    let nota = io.readInt()

    let aluno={
        id: i,
        nome,
        nota,

    }
    alunos.push(aluno)
}
console.log(alunos)