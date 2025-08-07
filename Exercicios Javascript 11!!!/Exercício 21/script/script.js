
function somaIntervaloNumero(n){
    let i = 1;
    let soma = n
    while (i<n){
        soma += i
        i += 1
    }
    return soma
}

let num = parseInt(prompt('Digite um numero inteiro positvo'))

alert(somaIntervaloNumero(num))

