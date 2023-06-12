let io = require("../io") 

io.write("Digite um numero")
let numero=io.readInt()

if(numero%2==0){
    io.write("O numero é par")
}else{
    io.write("o numero é imparS")
}