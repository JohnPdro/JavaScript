function calcular(a ,b , opercao){
    console.log("Resalizando uma operação.")
    const resultado = opercao(a, b)
    return resultado
}

function somar(x, y){
    console.log("Realizando um soma.")
    return x + y
}

calcular(3, 5, somar)

console.log(calcular(8, 4, function (x, y ){
    console.log("Realizando uma subtração.")
    return x - y
}))

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maça", "Banana", "Laranja", "Limão"]

for (let i = 0; i < lista.length; i++){
    exibirElemento(lista(i), i, lista)
}

lista.forEach(exibirElemento) // forEach funiona como uma estrutura de repetição for pronta 

lista.forEach(function(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
})

