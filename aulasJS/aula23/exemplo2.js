let io = require("../io")

let resposta = 0 
let numeros = []

for (let i = 0; i < 10; i++){
    io.write("Digite um numero")
    resposta = io.readInt()
    // Salvo as respostas ao vetor
    numeros.push(resposta)
}

io.write(numeros)
// Percorra o vetor
for (let j = 0; j < numeros.length; j++){
    //Imprima na tela e incrementa
    io.write(numeros[j] + 1)
}