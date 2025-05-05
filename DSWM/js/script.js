const titulo = document.getElementById ("titulo");
const mensagem = document.querySelector(".mensagem")
const paragrafos = document.querySelectorAll("p")
const botao = document.getElementById("botao")
const inputNome = document.getElementById("nome")
const enviar = document.getElementById("enviar")
const saudacao = document.getElementById("saudacao")
botao.addEventListener("click", function(){
    titulo.innerText = "Você clicou no botao!"
    document.body.style.backgroundColor = "#ffa500"
    mensagem.classList.add("destaque")
    paragrafos.forEach(function(p){
        p.innerText += "♂♀" 
    })
})

function exibirsaudacao(){
    const nome = inputNome.value
    saudacao.innerText = `Olá, ${nome}!`
}
enviar.addEventListener("click", exibirsaudacao)

enviar.addEventListener("mouseover", function(){
    enviar.style.backgroundColor = "#4caf50"
})

inputNome.addEventListener("input", function(){
    //alert("SAI FORA")
})

inputNome.addEventListener("keydown", function(event){
    alert(`Tu apertou o  ${event.key}!`)
})