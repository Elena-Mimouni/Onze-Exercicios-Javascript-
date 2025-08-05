let soma_preços, produtos, contador,ind;

contador = 0;
produtos = [];

while(contador < 5){
    produtos.push(parseInt(prompt('Digite o preço do produto')));
    contador += 1;
}

console.log(produtos);

soma_preços = 0
ind = 0;
while(ind< 5){
    soma_preços += produtos[ind];
    ind += 1;
}
console.log(soma_preços);
