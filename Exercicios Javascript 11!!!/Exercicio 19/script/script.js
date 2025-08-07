

function verificaNumero(num){
    if (num>0){
        alert('Positivo');
    }
    else{
        if (num==0){
            alert('Zero');
        }
        else{
            alert('Negativo');
        }
    }


};

let a = parseInt(prompt('Digite um numero inteiro: '));

verificaNumero(a);