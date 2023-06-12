let io = require("../io")

const pessoa={
    cpf:"40687699827",
    nome:"evandro",
    anoNascimento:"91",

}

pessoa.idade = 32
pessoa.naturalidade = "São Paulo"
pessoa.cor_dos_olhos = "castanhos"
for (const propriedade in pessoa){
    console.log(pessoa)

}