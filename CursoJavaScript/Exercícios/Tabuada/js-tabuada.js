function calcular() {
    let ntxt = document.getElementById('numero')
    let res = document.getElementById('resposta')
    
    if (ntxt.value.length == 0) {
        window.alert('Digite um número para a tabuada.')
    } else {
        let n = Number(ntxt.value)
        let m = 1
        res.innerHTML = ''
        while (m <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${m} = ${n * m}`
            m ++
            res.appendChild(item)
        }
        
    }
}