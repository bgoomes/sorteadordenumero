const form = document.querySelector("form")
const divForm = document.getElementById("form")
const divSort = document.getElementById("divSortiado")

const btnSortear = document.getElementById("sortear")
const btnNovo = document.getElementById("sortearNovo")

const numero = document.getElementById("numero")
const de = document.getElementById("de")
const ate = document.getElementById("ate")

const span = document.getElementById("textSortiado")

var numerosSortiados = []

form.onsubmit = (event) =>{
    event.preventDefault()

    sorteiaNumero(numero.value, de.value, ate.value)

    reset(numero)
    reset(de)
    reset(ate)

}

numero.oninput = (value) => {
    value = numero.value.replace(/\D/g, "")
    numero.value = Number(value)
}

de.oninput = (value) => {
    value = de.value.replace(/\D/g, "")
    de.value = Number(value)
}

ate.oninput = (value) => {
    value = ate.value.replace(/\D/g, "")
    ate.value = Number(value)
}

function reset(value){
    value.value = ""
    
}

function sorteiaNumero(numero, de, ate){
    //regra do sorteio

    try {
        if (numero > (ate - de + 1)) {
                console.log("to por aqui")
                return numerosSortiados;
            }
        
            while (numerosSortiados.length < numero) {
                var aleatorio = Math.floor(Math.random() * (ate - de + 1) + de);
                if (!numerosSortiados.includes(aleatorio)) {
                    numerosSortiados.push(aleatorio);
                }
            }
        
            // numerosSortiados.map()
            mostraResult(numerosSortiados)
    } catch (error) {
        console.log(error)
    }
}

function mostraResult(result){

    divForm.classList.add("hidden")
    divSort.classList.remove("hidden")

    btnSortear.classList.add("hidden")
    btnNovo.classList.remove("hidden")


    span.textContent = `${result}`

}
