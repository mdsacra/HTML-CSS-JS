function contar() {
        var inp1 = window.document.getElementById('numero1')
        var inp2 = window.document.getElementById('numero2')
        var inpp = window.document.getElementById('passo')
        var res = window.document.querySelector('div#res')
        res.innerHTML = ''

        if (inp1.value.length == 0 || inp2.value.length == 0 || inpp.value.length == 0) {
                window.alert('Preencha todos os campos.')
        } else {
                var n1 = Number(inp1.value)
                var n2 = Number(inp2.value)
                var p = Number(inpp.value)
                
                if (p == 0) {
                        window.alert('"Passo" não pode ser 0. Considerando "Passo = 1"')
                        p = 1
                }
                if (n1 < n2) {
                        for (n1 ; n1 <= n2 ; n1 += p) {
                                res.innerHTML += `${n1} \u{1F449} `
                        }
                } else {
                        for (n1 ; n1 >= n2 ; n1 -= p) {
                                res.innerHTML += `${n1} \u{1F449} `
                        }
                }
                res.innerHTML += `\u{1F3C1}`
        }
        
}