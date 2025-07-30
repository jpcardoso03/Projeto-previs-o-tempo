let chave = "59b99d411091f76bd9d5436c74e014cb"

function ColocarNaTela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + (dados.main.humidity) + "%"
    //document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
            cidade +
            "&appid=" +
            chave +
            "&lang=pt_br" +
            "&units=metric"
    ).then((resposta) => resposta.json())

    ColocarNaTela(dados)
}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}

// Evento para disparar a busca ao apertar Enter no input
document.addEventListener("DOMContentLoaded", () => {
    const inputCidade = document.querySelector(".input-cidade")
    inputCidade.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            cliqueiNoBotao()
        }
    })
})
