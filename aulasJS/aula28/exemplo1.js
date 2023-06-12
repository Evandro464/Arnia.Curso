let io = require("../io")

class Pessoa{
    id
    cpf
    nome 
    anoNascimento
    adiantamento

        salario(){
            return 2000 - this.adiantamento
        }
        idade() {
            return 2023 - this.anoNascimento
        }
    
}

    const Pascott = new Pessoa()

    Pascott.id = 1
    Pascott.nome = "Pascott"
    Pascott.cpf = "406.876.998-27"
    Pascott.anoNascimento = 1991
    Pascott.adiantamento = 600

    console.log(Pascott)
    console.log(Pascott.idade())
    console.log(Pascott.salario())

