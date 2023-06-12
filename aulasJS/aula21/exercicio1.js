let io = require("../io")

io.write("Voce quer responder qual questao? ")
let resposta= io.readInt()

if (resposta==1) {
    for (let i = 0; i < 3; i++){
        console.log(i)
    }
}else if (resposta==2){

}else if (resposta==3){

}else{
    io.write("Opção invalida.")
}