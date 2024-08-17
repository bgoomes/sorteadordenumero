const form = document.querySelector("form")
const divForm = document.getElementById("form")

const numero = document.getElementById("numero")
const de = document.getElementById("de")
const ate = document.getElementById("ate")


form.onsubmit = (event) =>{
    event.preventDefault()

    sorteiaNumero(numero.value, de.value, ate.value)

    reset(numero)
    reset(de)
    reset(ate)

    // divForm.classList.add("hidden")
    // const div = document.createElement("div")
    // const span = document.createElement("span") 
    // div.classList.add("divSortiado")
    // span.classList.add("textSortiado")

    // div.append(span)
    // form.append(div)
}

numero.oninput = (value) => {
    value = numero.value.replace(/\D/g, "")
    numero.value = value
}

de.oninput = (value) => {
    value = de.value.replace(/\D/g, "")
    de.value = value
}

ate.oninput = (value) => {
    value = ate.value.replace(/\D/g, "")
    ate.value = value
}

function reset(value){
    value.value = ""
    
}

function sorteiaNumero(numero, de, ate){
    //regra do sorteio



}