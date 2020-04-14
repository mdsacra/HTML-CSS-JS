let num = document.querySelector('input#numero')
let res = document.querySelector('div#res')
let slct = document.querySelector('select#slct')
let lista = []


function adicionar() {

    res.innerHTML = ''

    if (lista.indexOf(num.value) != -1) {
        window.alert('Este número já está na lista, tente outro.')
    } else {
        if (Number(num.value) >= 1 && Number(num.value) <= 100) {
            let n = Number(num.value)
            lista.push(n)
            let valor = document.createElement('option')
            valor.text = n
            slct.appendChild(valor)
        } else {
            window.alert('Seu número não passou no teste inicial.')
        }
    }
}

function analisar() {

    maior = lista[0]
    menor = lista[0]

    cont = 0
    let soma = 0
    do {
    
        if (maior < lista[cont]) {
            maior = lista[cont]
        }
        if (menor > lista[cont]) {
            menor = lista[cont]
        }
        soma += lista[cont]
        cont ++
    } while (cont < lista.length)

    res.innerHTML += `Sua lista possui ${lista.length} números.</br>`
    res.innerHTML += `O maior valor digitado foi ${maior} e está na posição ${lista.indexOf(maior)+1}  da lista.</br>`
    res.innerHTML += `O menor valor digitado foi ${menor} e está na posição ${lista.indexOf(menor)+1}  da lista.</br>`
    res.innerHTML += `A soma de todos os valores é ${soma}.</br>`
    res.innerHTML += `A média dos valores é ${soma/lista.length}.</br>`

}

