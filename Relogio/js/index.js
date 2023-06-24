//Variaveis com elementos
const main = document.querySelector("#container-relogio")
const relogio = main.querySelector("p")
const btnPause = main.querySelector("#pause")
const btnVolta = main.querySelector("#volta")
const select = document.querySelector("select")


function iniciar(fuso,c){
const horario = setInterval(()=>{
    //Instaciar objeto com a hora atual
    const hours = new Date()
    //Pegar a hora Atual
    let hora = hours.getHours()
    let minutos = hours.getMinutes()
    let segundos = hours.getSeconds()

   
    
    // Adicionar zero à esquerda se a hora for menor que 10
    if (hora < 10) {
        hora = "0" + hora;
    }
    // Adicionar zero à esquerda se os minutos forem menores que 10
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    // Adicionar zero à esquerda se os segundos forem menores que 10
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    

    if(fuso!=null){//Adicionar o fusorio dependendo da região
        hora+=fuso;
        relogio.textContent = hora + ":"+minutos+":"+segundos
    }else{
        relogio.textContent = hora + ":"+minutos+":"+segundos
    }
    
    //imprimir a hora atual
    
    btnPause.onclick = ()=>{
        btnVolta.classList.remove("hoverbtn")
        btnPause.classList.add("hoverbtn")
        relogio.classList.add("pauseON")
        //Pausar o Intervalo
        clearInterval(horario)
    }
},1000)}

function reiniciar(){//Reiniciar o Horario
    btnVolta.classList.add("hoverbtn")
        btnPause.classList.remove("hoverbtn")
    relogio.classList.remove("pauseON")
   //Pega a opção do selecet
   const opcaoSelecionada = select.value
   //Inicialiar o relogio
   if(opcaoSelecionada == "brasil"){
       iniciar(0)
       btnDisplay()
      }else if(opcaoSelecionada == "estados-unidos"){
       iniciar(1)
       btnDisplay()
      }else if(opcaoSelecionada =="franca"){
       iniciar(5)
       btnDisplay()
      }else if(opcaoSelecionada =="argentina"){
       iniciar(2)
       btnDisplay()
      }
}
//Botão voltar o horario
btnVolta.onclick = reiniciar



const btnSelec = document.querySelector("#selecionar")
const paiSelct = document.querySelector("#paiSelect")
btnSelec.onclick = () =>{
    
    //Sumir com todas as informações
    paiSelct.style.display="none"
    //Pega a opção do selecet
    const opcaoSelecionada = select.value
    //Inicialiar o relogio
    if(opcaoSelecionada == "brasil"){
        iniciar(0)
        btnDisplay()
       }else if(opcaoSelecionada == "estados-unidos"){
        iniciar(1)
        btnDisplay()
       }else if(opcaoSelecionada =="franca"){
        iniciar(5)
        btnDisplay()
       }else if(opcaoSelecionada =="argentina"){
        iniciar(2)
        btnDisplay()
       }
}

function btnDisplay(){//Ativar os botões
   
    btnVolta.style.display="block"
    btnPause.style.display="block"
}

select.onchange = (e)=>{
     //opção selecionada
     const opcaoSelecionada = e.target.value;

        if(opcaoSelecionada == "brasil"){
            br()
        }else if(opcaoSelecionada == "estados-unidos"){
            eu()
        }else if(opcaoSelecionada == "franca"){
            fr()
        }else if(opcaoSelecionada == "argentina"){
            ar()
        }
}

function br(){ //Cores do brasil
    document.documentElement.style.setProperty('--cor-background', '#00994d');
    document.documentElement.style.setProperty('--cor-btn-volta', '#ffd700');
    document.documentElement.style.setProperty('--cor-btn-pause', '#003366');
    document.documentElement.style.setProperty('--text', '#fff');
}
function eu(){ // Cores Estados Unidos
    document.documentElement.style.setProperty('--cor-background', '#bf0a30');
    document.documentElement.style.setProperty('--cor-btn-volta', '#3c3b6e');
    document.documentElement.style.setProperty('--cor-btn-pause', '#fff');
    document.documentElement.style.setProperty('--text', '#000');
}
function fr(){//Cores Franças
    document.documentElement.style.setProperty('--cor-background', '#002395');
    document.documentElement.style.setProperty('--cor-btn-volta', '#ed2939');
    document.documentElement.style.setProperty('--cor-btn-pause', '#002395');
    document.documentElement.style.setProperty('--text', '#fff');
}
function ar(){//Cores Argentina
    document.documentElement.style.setProperty('--cor-background', '#74acdf');
    document.documentElement.style.setProperty('--cor-btn-volta', '#74acdf');
    document.documentElement.style.setProperty('--cor-btn-pause', '#74acdf');
    document.documentElement.style.setProperty('--text', '#fff');
}


