let io = require("../io")

io.write("Qual sua idade")
let idade=io.read()

if(idade>=18){
    io.write("Bem vindo!")
}else{
    io.write("Voce nao tem permição para entrar nesse site")
}

if(dia == "terça-feira"){
    io.write("terça-feira é dia de larvar o carro e levar as crianças no parque")
    if(dia == "quarta-feira"){
        io.write("quarta-feira é dia de ajudar as crianças com os exercicios da escola e buscar esposa no trabalho")
        if(dia== "quinta-feira"){
            io.write("quinta-feira e dia de folga")
            if(dia == "sexta-feira"){
                io.write("sexta-feira é dia de estudar junto com as crianças")
            }
        }
    }
}