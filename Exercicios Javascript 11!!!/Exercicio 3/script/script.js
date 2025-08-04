

let a,b,c;
a = prompt("Digite um numero inteiro");
b = prompt("Digite um numero inteiro");
c = prompt("Digite um numero inteiro");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

console.log(a)
console.log(b)
console.log(c)


let delta = ((b**2)-4*a*c);


let raiz1 = ((-b+(delta**0.5))/2*a);
let raiz2 = ((-b-(delta**0.5))/2*a);

console.log(raiz1);
console.log(raiz2);