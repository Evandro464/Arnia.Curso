let io = require("../io")

contador = 0

io.write("O valor do contador é:" + contador)

while (contador <10){
    io.write("Executei o comando pela" + contador + "vez")
    contador ++
    io.write("O valor do contador é:" + contador)
}