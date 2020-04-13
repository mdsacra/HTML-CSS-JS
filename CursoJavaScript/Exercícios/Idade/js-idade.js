function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var fano = window.document.getElementById('txtano')
        var res = window.document.querySelector('div#res')

        if (fano.value.length == 0 || fano.value > ano) {
                window.alert('Verifique os dados e tente novamente!')
        } else {
                var fsex = window.document.getElementsByName('radsex')
                var idade = ano - fano.value
                
                /* DEU CERTO DESTE JEITO
                var img = window.document.querySelector('img#retrato')
                img.style = 'display:default' */

                var img = window.document.createElement ('img')
                img.setAttribute('id', 'retrato')
                img.style = 'width:200px'

                if (fsex[0].checked) {
                        res.innerHTML = `<p>Você é um <strong>homem</strong> de <strong>${idade}</strong> anos.</p>`
                        if (idade < 3 ) {
                                img.setAttribute('src', 'hbb.png') 
                        } else if (idade > 3 && idade < 12) {
                                img.setAttribute('src', 'hcria.png')
                        } else if (idade >= 12 && idade < 18) {
                                img.setAttribute('src', 'hado.png')
                        } else if (idade >= 18 && idade < 60) {
                                img.setAttribute('src', 'hadu.png')
                                                }
                        else {
                                img.setAttribute('src', 'hido.png')
                        }
                } else {
                        res.innerHTML = `<p>Você é uma <strong>mulher</strong> de <strong>${idade}</strong> anos.`
                        if (idade < 3 ) {
                                img.setAttribute('src', 'mbb.png') 
                        } else if (idade > 3 && idade < 12) {
                                img.setAttribute('src', 'mcria.png')
                        } else if (idade >= 12 && idade < 18) {
                                img.setAttribute('src', 'mado.png')
                        } else if (idade >= 18 && idade < 60) {
                                img.setAttribute('src', 'madu.png')
                                                }
                        else {
                          img.setAttribute('src', 'mido.png')
                        }
                }        
        res.appendChild(img)}
}