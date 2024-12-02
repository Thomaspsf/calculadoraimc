document.addEventListener("DOMContentLoaded", () => {
    const altura = document.getElementById("altura")
    altura.focus()
})
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        imc()
        const altura = document.getElementById("altura")
        altura.focus()
    }
})
document.querySelector("button").addEventListener("click", () => {
    const altura = document.getElementById("altura")
    altura.focus()
    altura.innerText = ""
})
function validador(altura, peso) {
    let spanAl = document.getElementById("errorAltura")
    let spanPe = document.getElementById("errorPeso")
    if (altura == 0 && peso == 0) {
        spanAl.removeAttribute("hidden")
        spanPe.removeAttribute("hidden")
        return false
    } else if (altura == 0) {
        spanAl.removeAttribute("hidden")
        spanPe.setAttribute("hidden", "")
        return false
    } else if (peso == 0) {
        spanPe.removeAttribute("hidden")
        spanAl.setAttribute("hidden", "")
        return false
    }
    spanAl.setAttribute("hidden", "")
    spanPe.setAttribute("hidden", "")
    return true
}
function imc() {
    let altura = 0;
    altura = document.getElementById('altura').value
    let peso = 0;
    peso = document.getElementById('peso').value
    let validador2 = false
    validador2 = validador(altura, peso)
    if (validador2) {
        let alturam = altura / 100
        let calc = peso / (alturam * alturam)
        let resultado = Number(calc.toFixed(1))
        let magreza = document.getElementById("magreza")
        let normal = document.getElementById("normal")
        let sobrepeso = document.getElementById("sobrepeso")
        let grau1 = document.getElementById("grau1")
        let grau2 = document.getElementById("grau2")
        let grau3 = document.getElementById("grau3")
        let result = document.getElementById("result")
        let imptautra = document.getElementById("altura")
        let imptpeso = document.getElementById("peso")
        magreza.style.backgroundColor = ''
        normal.style.backgroundColor = ''
        sobrepeso.style.backgroundColor = ''
        grau1.style.backgroundColor = ''
        grau2.style.backgroundColor = ''
        grau3.style.backgroundColor = ''
        if (resultado < 18.5) {
            magreza.style.backgroundColor = '#ffbf00'
            imptautra.value = ""
            imptpeso.value = ""
            result.innerText = (`Seu calculo de IMC é ${resultado} kg/m² de portando sua classificação é  Magreza`)
        } else if (resultado >= 18.5 && resultado < 24.9) {
            result.innerText = (`Seu calculo de IMC é ${resultado} kg/m² de portando sua classificação é  Normal`)
            normal.style.backgroundColor = '#bbefc0'
            imptautra.value = ""
            imptpeso.value = ""
        } else if (resultado > 25 && resultado < 29.9) {
            result.innerText = (`Seu calculo de IMC é ${resultado} kg/m² de portando sua classificação é  Sobrepeso`)
            sobrepeso.style.backgroundColor = '#ffbf00'
            imptautra.value = ""
            imptpeso.value = ""
        } else if (resultado > 30 && resultado < 34.9) {
            result.innerText = (`Seu calculo de IMC é ${resultado} kg/m² de portando sua classificação é  Obesidade grau I`)
            grau1.style.backgroundColor = '#ff8000'
            imptautra.value = ""
            imptpeso.value = ""
        } else if (resultado > 35 && resultado < 39.9) {
            result.innerText = (`Seu calculo de IMC é ${resultado} kg/m² de portando sua classificação é  Obesidade grau II`)
            grau2.style.backgroundColor = '#ff4000'
            imptautra.value = ""
            imptpeso.value = ""
        } else if (resultado >= 40) {
            result.innerText = (`Seu calculo de IMC é ${resultado} kg/m² de portando sua classificação é  Obesidade grau III`)
            grau3.style.backgroundColor = '#ff0000'
            imptautra.value = ""
            imptpeso.value = ""
        }
    }
}






