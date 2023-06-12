let io = require("../io")

let contador = 0
let soma = 0
while (contador <=100){
    io.write(soma +" + "+ contador)
    soma = soma + contador
    contador ++
}

io.write("O valor total é" + soma)