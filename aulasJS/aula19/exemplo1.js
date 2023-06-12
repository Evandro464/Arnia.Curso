let io = require("../io")

io.write("digite um ano")
let ano = io.read()

if(((ano % 4 == 0) && (ano % 100 != 0 )) || (ano % 400 == 0)){
    io.write("É um ano bisexto")
}else{
    io.write("Não é um ano bisexto")
}