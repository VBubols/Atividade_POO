class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar(){
        console.log(`Olá me chamo ${this.nome} e tenho ${this.idade} anos`);
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    cumprimentar(){
        console.log(`Olá me chamo ${this.nome} e tenho ${this.idade} anos e estudo ${this.curso}`);
    }
}
//Teste das classes Pessoa e Aluno
const pessoa1 = new Pessoa('Vitor', 23);
pessoa1.cumprimentar();

const aluno1 = new Aluno('Ester', 24, 'Desenvolvimento de Sistemas');
aluno1.cumprimentar();

class Animal {
    emitirSom(){
        console.log('Som animalesco.');
    }
}

class Cachorro extends Animal {
    emitirSom(){
        console.log("Au au")
    }
}

class Gato extends Animal {
    emitirSom(){
        console.log("Miau")
    }
}

const animais = [new Cachorro(), new Gato(), new Animal()];
animais.forEach(a => a.emitirSom());
