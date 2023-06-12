let io = require("../io")
let contador = 0
let nome
io.write("Digite um nome")
nome = io.read()

while (contador < 10 ){
    io.write(nome)
    io.write("nr " + (++ contador ))
}