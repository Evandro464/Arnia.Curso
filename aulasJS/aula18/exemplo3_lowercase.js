let io = require("../io") 

let perguntaAoUsuario;
do {
    perguntarParaUsuario();
    io.write("Continuar o Programa?");
    perguntaAoUsuario = converterSimNaoParaBoolean(io.read());
} while(perguntaAoUsuario);

function perguntarParaUsuario(){
    io.write("O palmeiras tem Mundial")
    let resposta = io.read() //""

    let ehSim =  converterSimNaoParaBoolean(resposta); 

    //console.log("**** Com function toLowerCase " + resposta.toLowerCase());
    //console.log("**** Com function toUpperCase " + resposta.toUpperCase());   

    if(ehSim != null){
        
        if(ehSim == true){
            io.write("qual sua idade")
            let idade = io.read()
            //convertendo iade somente para numeros usando expressão regular (regex)
            //console.log (idade)
            idade = idade.replace(/\D/g, "");
           // console.log (idade)
            
            if(idade == ""){
                io.write("Zé ruela, vc não respondeu corretamente");
            }else{

                if(idade > 18){
                    io.write("Voce nunca viu o palmeiras ganhar um mundial...");
                } else {
                    io.write("Mentiram pra voce!");
                }
                
            }
        } else {
            
            if(ehSim == false){
                io.write("Muito bem!")
            } 
            
        }

    } else{
        io.write("Zé ruela, vc não respondeu corretamente"); 
    }
}

function converterSimNaoParaBoolean(resposta){
    let respConvert = resposta.toLowerCase();
    if(respConvert == "sim" || respConvert == "s"){
        return true;
    } else {
        if(respConvert == "nao" || respConvert == "não" ||  respConvert == "n" ){
            return false;
        }
    }
    return null;
}



