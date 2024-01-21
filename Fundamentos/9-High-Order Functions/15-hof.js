const personagens = [
    {nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã"},
    {nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro"},
    {nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro"},
    {nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino"},
    {nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga"},
    {nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdote"},
    {nivel: 29, nome: "Muradin", raca: "Anão", classe: "Gurreiro"}
]


// Método Map - Como o nome já diz ele mapeia o array, possibilitando a craição de outro array com as informações necessárias de outro array

// const nomes = []

// for (let i = 0; i < presonagens.length; i++){
//     nomes.push(presonagens[i].nome)
// }

const nomes = personagens.map(function (personagem){
    return personagem.nome
})

console.log(nomes)


// Método Filter - Serve para filtrar elementos de um array, selecionar elementos especificos de um array

// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
//  if (personagens[i].raca === "Orc"){
//     orcs.push(personagens[i])
//  }    
// }

const orcs = personagens.filter(function (personagem){
    return personagem.raca === "Orc"
})

console.log(orcs)


// Método Reduce - Transforma o arrya em um objeto ou em um elemento ou em outro array

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function (valorAcumulado, personagem){
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)
    } else{
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
}, {})

console.log(racas)

// Método Sort - Ordena arrays, pegando os elementos e mudando de posição de acordo com algum critétio


const personagensOrdenados = personagens.slice().sort(function (a, b) {
    return a.nivel - b.nivel // ordem crescente
 // return b.nivel - a.nivel ordem decrescente
})

console.log(personagens)
console.log(personagensOrdenados)