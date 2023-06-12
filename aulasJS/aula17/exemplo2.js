let io = require("../io")

io.write("Digite um numero:")
let numero_1 = io.readInt()
io.write("Digite outro Numero:")
let numero_2 = io.readInt()
let soma = numero_1 + numero_2
io.write("O resultado da soma é:" + soma)