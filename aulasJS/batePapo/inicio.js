        let io = require("../io")

        console.log("Ola sou um assistente virual para teste, vamos iniciar suas tarefas do dia ?")
        io.write("sim ou nao")
        let resposta=io.read()

        if(resposta == "sim"){
            io.write("Muito bem vamos la!...")

        }else{
            io.write("que pena")
        }
        
        io.write("Que dia da semana é hoje")
        io.write("segunda-feira, terça-feira, quarta-feira, quinta-feira, sexta-feira")  
        let dia = io.read()
        //io.write("ola " + dia )
        if(dia == "segunda-feira"){
            io.write("seunda-feira é dia de lavar roupa, fazer exercicios e levar as crianças para curso de ingles")
            
        }else if(dia == "terca-feira"){
            io.write("Dia de lavar o carro")

        }else if(dia == "quarta-feira"){
            io.write("dia de estudar")

        }else if(dia == "quinta-feira"){
                    io.write("dia de dar banho na sofia")

        }else if(dia == "sexta-feira"){
                    io.write("dia de estudar")
                }
            
        
        io.write("Voce ja concluiu as tarefeas de hoje?")
        let resposta2 = io.read()

  if(resposta2 == "sim"){
    io.write("aproveite esse tempo livre para estudar")
  }else{
    io.write("")
  }
    

