/*function parimp(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = parimp(892)
console.log(res) */

function soma(n1=0, n2=0) { // "=0" é um "parâmetro opcional" do JS.
    return n1 + n2
}

console.log(soma(2, 5))