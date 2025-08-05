let n, tentativas;

var num = Math.round(Math.random()*20);

tentativas = 0;
n = -1;
alert(num)
while (n!= num){
    n = parseInt(prompt('Tente acertar o número: '));
    tentativas += 1
    if (n>num){
        alert('Seu número é maior');
    }
    else{
        if (n<num){
            alert('Seu número é menor ');
        }
        else{
            break;
        }
    }
}

alert('tentativas: ' + tentativas)

