const listaprodutos = [2, 4, 6, 7, 8] // lista de produtos com os valores do produtos 

let produtomaiscaro = 0; // Variavel para identificar o produto mais caro

for(let i = 0; i < listaprodutos.length; i++) { // Laço de repetição para percorrer a lista de produtos 

    if(listaprodutos[i] > produtomaiscaro) { // verifica se o item naquele indice e maior que o produto mais caro 
        produtomaiscaro = listaprodutos[i]; // se for, o produto mais caro agore é aql item que esta no indice 
    }
}

console.log(produtomaiscaro);//imprimi a variavel com o produto mais caro 
