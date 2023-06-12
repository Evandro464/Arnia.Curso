let io = require("../io") 

let contador = 0
while(contador < 100){
    io.write(contador + ": Brasil")
    contador = contador + 1
}
