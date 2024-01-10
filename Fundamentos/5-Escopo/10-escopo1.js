let pokemon = "Gestley" // Escopo externo é o escopo que abrange todo o código até mesmo estruturas como function, if e etc...

function evoluir(){
    pokemon = "Hunter" // Escopo interno é o escopo que se tem dentro de estruturas, variaveis dentro do escopo interno não podem ser utilizadas no escopo externo
}

console.log(pokemon)
evoluir()
console.log(pokemon)

function criarAnimal() {
    let animal = "Gato" // Variaveis criadas em um escopo interno não funcionam em um escopo externo 
}
criarAnimal()
console.log(animal)

function avaliarNota(nota){
    if (nota > 60){
        var aprovado = true // a utilização do comando var não é recomandado, um dos motivos é que se declarado dentro de um escopo interno ele funcionará no escopo externo também
        let situacao = "Aprovado"
    }else {
        var aprovado = false
        let situacao = "Reprovado"
    }
    console.log(nota)
    console.log(aprovado)
    console.log(situacao)
}

avaliarNota(83)
avaliarNota(49) 

// function ola(){
//     var texto = "Olá, mundo!"
// }

// console.log(texto)

// console.log(nome)
// console.log(sobrenome)

// var nome = "Isaac"
// let sobrenome = "Pontes"

// console.log(nome)
// console.log(sobrenome)