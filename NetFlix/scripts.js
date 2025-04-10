let botaoSom = document.querySelector(".botao-som"); 
let video = document.querySelector(".video");
let botao = document.querySelector(".link-info");
let modal = document.querySelector(".modal");

// Função ligar e desligar SOM do video:
botaoSom.addEventListener("click", alternarSom);

function alternarSom() {
    video.muted = !video.muted; // Alterna entre mutado e desmutado
    if (video.muted) {
        botaoSom.classList.add("muted"); // Adiciona a classe "muted" quando o vídeo está sem som
        botaoSom.classList.remove("unmuted"); // Remove a classe "unmuted"
    } else {
        botaoSom.classList.add("unmuted"); // Adiciona a classe "unmuted" quando o som está ativado
        botaoSom.classList.remove("muted"); // Remove a classe "muted"
    }
}

// Função aparecer tela de informações de modal:
botao.addEventListener("click",mostrarmodal);

function mostrarmodal(){
    

}

    


