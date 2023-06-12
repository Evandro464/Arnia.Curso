let io = require("../io")

let numeros = []
let resposta
let somatorio = 0
let media = 0
for (let i = 0; i < 10; i++){
    io.write("Digite um numero:")
    resposta = io.readInt()
    numeros.push(resposta)
    somatorio = somatorio + resposta
}

media = somatorio / numeros.length
io.write("A media é " + media)
io.write(numeros)

for (let contador = 0; contador < numeros.length; contador ++){
    if(numeros[contador] < media){
        io.write("O valor: " + numeros[contador] + " é menor que " + media)
    }
}
