let io = require("../io") 

io.write("O palmeiras tem Mundial")
let resposta = io.read()

io.write("qual sua idade")
let resposta2= io.read()

if(resposta=="sim" && resposta2 >18){
    io.write("Voce nunca viu o palmeiras ganhar um mundial")
}else {
    io.write("Mentiram pra voce")
}



