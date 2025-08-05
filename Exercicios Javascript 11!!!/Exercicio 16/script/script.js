let n, resultado;

n = -1
while(n<2){
    n = parseInt(prompt('Insira um número inteiro maior que 1: '))
}

let contador = n-1
resultado = n
while (contador>0){
    resultado *= contador
    contador -= 1;
}

alert(resultado)