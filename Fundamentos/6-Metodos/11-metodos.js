let pessoa = {
    nome: "João",
    idade: 26,
    dizerOla(){
        console.log("Olá, mundo! Meu nome é " + this.nome) // o comado this é utilizado dentro de um metodo para referenciar uma variavel dentro de um objeto
    }
}

console.log(pessoa)

pessoa.dizerOla()