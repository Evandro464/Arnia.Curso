let io = require("../io") 

let numeroOriginal=9

io.write("Digite um numero")
let numero=io.read()

if(numero==numeroOriginal){
    io.write("Valores iguais")
}else{
    io.write("Valores ou tipos diferentes")

}