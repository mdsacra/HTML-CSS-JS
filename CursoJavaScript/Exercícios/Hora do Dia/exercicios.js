function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora == 1) {
        msg.innerHTML = `Agora são ${hora} hora.`
    } else {
        msg.innerHTML = `Agora são ${hora} horas.`
    }
    
    if (hora < 12 && hora >= 5) {
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#842800'
    } else if (hora < 5 || hora > 18) {
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#343434'
    }
}
