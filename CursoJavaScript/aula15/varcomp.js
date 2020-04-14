let num = [5, 8, 4, 7, 2, 9]

num[3] = 6
num.push(7)

console.log(`Nosso vetor é o ${num}`)
/*
for (pos = 0 ; pos < num.length ; pos++ ) {
    console.log(`Na posição ${pos} temos o valor ${num[pos]}`)
}

console.log(`Vetor ordenado: ${num.sort()}`)
*/
for (let pos in num) {
    console.log(num[pos])
}

// Função "indexOf()" busca um valor dentro do array e retorna o seu índice, no caso de não existir o valor, retorna -1.

