let io = require("../io")

//classe 
class Carro{
    //atributos
   nome 
   preco
   anoLancamento

   //metodo construtor (Primeiro metodo a ser executado na classe)
   constructor(nome, preco, anoLancamento){
        // passagem de parametros via metodo construtor (atributos globais recebem valores passados por parametros)
        this.nome = nome 
        this.preco = preco
        this.anoLancamento = anoLancamento
   }

   aumentarValorCarro(){
        this.preco = 5000 + this.preco
   }

}

let vetNomesCarro = ["fit", "Gol","Vectra","uno","palio","Fluence","Civic","Fiesta","sienna","Livina"]

//primeiro i recebe 0;
//segundo verifica se i é menor que 10
        // se verdadeiro continua, se falso sai do laço
//terceiro incrementa um valor ao i
for (let i=0; i < 10; i++){
    //executa qualqquer coisa;
    const car = new Carro(vetNomesCarro[i], 7000.500 * Math.floor(Math.random() * 10) + 1, 2008 + i)
    console.log("Preço antes")
    console.log(car)
    car.aumentarValorCarro()
    console.log("Preço depois")
    console.log(car)

}
