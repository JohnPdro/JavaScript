const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragon", "Legolas", "Gimli"]
console.log(arr)

// Como adicionar elementos
//push - Adicionar um elemento no final de um array, colocando em uma variavel é possivel ver o tamanho do array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)


// unshift - Adicionar um elemento no começo de um array, colocando em uma variavel é possivel ver o tamanho do array
tamanho = arr.unshift("Teste")
console.log(arr)
console.log(tamanho)


// Remover Elementos
// pop - Remover um elemento que está no final de um array, colocando em uma variavel é possivel ver o elemento removido
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift - Remover um elemento que está no inicio de um array, colocando em uma variavel é possivel ver o elemento adicionado 
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um elemento
// includes - Verifica seu um elemento existe em um array
const inclui = arr.includes("Gandalf")
console.log(arr)
console.log(inclui)

// indexOf - Verfica qual é o indice do elemento desejado em um array
const indice = arr.indexOf("Gandalf")
console.log(arr)
console.log(indice)

// Cortar e Concatenar
// slice - Corta o array, transformando em dois arrays, a partir do elemento desejado
const hobbits = arr.slice(0, 4) // Corta do elemento 0 até o 4 ou seja quatro elementos (0, 1, 2, 3), o 4 apenas referencia
const outros = arr.slice(-4) // Utilizar números negativos faz com que o corte seja de traz para frente ou seja (4, 5, 6, 7)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat - Concatena os arrays
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// Substituição dos elementos
// splice - Remove um grupo de elemtos do array e substitui por outros elementos, é possivel ver o que foi alterado
const elementoRemovidos =  sociedade.splice(indice, 1, "Gandalf o Cinzento", 2, false) // splice sintaxe = Inicio da remoção(indice), quantidade de elementos que deseja remover(1), o que deseja adicionar no lugar("Gandalf o Cinzento", 2, false)
console.log(sociedade)
console.log(elementoRemovidos)


// Iterar sobre os Elementos do array
for (let indice = 0; indice < sociedade.length; indice++){
    const elemento = sociedade[indice]
    console.log(elemento + "Se encontra na posição " + indice)
}