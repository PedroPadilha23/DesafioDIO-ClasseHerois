class ClasseDoJogo{
    constructor (nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }
}

let guerreiro = new ClasseDoJogo("Ragnar", "46", "Guerreiro", "espada")
let mago = new ClasseDoJogo ("Dumbledore", "68", "Mago", "magia")
let monge = new ClasseDoJogo ("Aang", "16", "Monge", "artes maciais")
let ninja = new ClasseDoJogo ("Naruto", "20", "Ninja", "Shuriken")

let classe = ninja 
if (classe === guerreiro){
    console.log (`O herói ${guerreiro.nome} de idade ${guerreiro.idade} do tipo ${guerreiro.tipo} atacou usando ${guerreiro.ataque}`)

}else if (classe === mago){
    console.log (`O herói ${mago.nome} de idade ${mago.idade} do tipo ${mago.tipo} atacou usando ${mago.ataque}`)

}else if (classe === monge){
    console.log (`O herói ${monge.nome} de idade ${monge.idade} do tipo ${monge.tipo} atacou usando ${monge.ataque}`)

}else if (classe === ninja){
    console.log (`O herói ${ninja.nome} de idade ${ninja.idade} do tipo ${ninja.tipo} atacou usando ${ninja.ataque}`)

}else {
    console.log ("Classe não encontrada")
}

