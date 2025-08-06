
//estrutura de decisão

// if condicao {vai ser feito de for verdade}
let data_hora, hora;

data_hora = new Date();
hora = data_hora.getHours();

// console.log(data_hora)
// console.log(hora)

// if (hora<12){
//     alert('Boop Dia!')
// }



// if else 


// if (hora>12){
//     alert('Boop Noite!')
// }
// else {
//     alert('Boop Diaaaa!')
// }


// estrutura encadeada
//let previsao = "chuvoso";
let previsao = "nublado";
//let previsao = "sol";
let tempMin = 16;
let tempMax = 22;

// if (previsao == "chuvoso"){
//     alert('Pegue um guarda-chuva');
//     if (tempMin<10){
//         alert('Leve mais de um casaco')
//     }
// }
// else {
//     if(previsao == 'nublado'){
//         if (tempMin>15){
//             alert('Passe protetor solar')
//         }
//     }
//     else{
//         alert('Aproveite os Sol!')
//     }
    
// }




//operador ternario

//(tempMin<tempMax)?alert('Temperaturas OK'):alert('Revise Temperaturas')


let dia = data_hora.getDay();


// switch(dia){
//     case 0:
//         alert('Domingo WOOOOOO');
//         break;
//     case 1:
//         alert('Tristeza...');
//         break;
//     case 2:
//         alert('Um pouco melhor...');
//         break;
//     case 3:
//         alert('Na metade já');
//         break;
//     case 4:
//         alert('Quase lá');
//         break;
//     case 5:
//         alert('Sextaaaaaaa!!!');
//         break;
//     case 6:
//         alert('O melhor dia');
//         break;

// }

// let cont
// for (cont= 0; cont < 10; cont++){
//     console.log('Numero: ' + cont)
// }


//while condicional
/*
Posso trabalhar com elea com se fosse contado, mas a atualização
da variavel de controle manulamente nao esquecer de inicializar a 
variavel de controle fora do laço
verifcar se a condição é alcançavel
*/

// let cont = 0
// while(cont<11){
//     console.log(cont + ' * 3 = ' + (cont*3))
//     cont += 1
// }



// let letra = 'z'
// while(letra != 'b'){
//     letra = prompt("Tente adivinhar uma letra \n" +
//         "Digite uma letra entre a e z")
// }
// alert('Parabéns!')



//do while
// executa pelo menos uma vez
// checagem da condição é no final


// let fruta = 'abacaxi'
// do{
//     alert('A fruta é ' + fruta)
//      fruta = prompt('Digite outra fruta: ')

// }while(fruta != 'abacaxi')


// while(fruta != 'abacaxi'){
//     alert('A fruta é ' + fruta)
//      fruta = prompt('Digite outra fruta: ')

// }



//while true

// let y = 0;
// while(true){
//     console.log(y+'^2 = ' + (y**2));
//     y += 1;
//     if(y==11){break};
// }




//Array

let feira = []
feira.push('laranja');
feira.push('pera');
feira.push('ameixa');
feira.push('abacata');
feira.push('banana');

// console.log(feira[0]);
// console.log(feira[1]);
// console.log(feira[2]);
// console.log(feira[3]);
// console.log(feira[4]);
// console.log('Quantidade de elementos: ' + feira.length)



//for normal 
let i = 0;

for (const n of feira){
    console.log(n)
}