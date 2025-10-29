class ContaBancaria {
    #saldo = 0;

    depositar(valor){
        if(valor < 0){
            console.log("Não é possível depositar um valor negativo.")
        } else {
            this.#saldo += valor;
            console.log(`Valor depositado: R$${valor}. Saldo atualizado: R$${this.#saldo}`)
        }
    }

    sacar(valor){
        if(valor > this.#saldo){
            console.log("Não é possivel sacar um valor maior que seu saldo.")
        } else {
            this.#saldo -= valor;
            console.log(`Valor sacado: R$${valor}. Saldo atualizado: R$${this.#saldo}`)
        }
    }

    verSaldo(){
        console.log(`Seu saldo atual é de: R$${this.#saldo}`)
    }
}

//Teste da classe ContaBancaria
const conta = new ContaBancaria();
conta.depositar(-100);
conta.depositar(100);
conta.sacar(150);
conta.sacar(50);
conta.verSaldo();

class Usuario{
    #email = '';
    #senha = '';

    setSenha(novaSenha){
        const senhaString = String(novaSenha) //Necessário converter para string caso o usuário faça um senha contendo apenas números
        if(senhaString.length < 6){
            console.log("Não é possível criar uma senha com menos de 6 caracteres.");
        } else{
            this.#senha = novaSenha;
            console.log(`Sua nova senha é ${this.#senha}`);
        }
    }

    autenticar(senhaInformada){
        if(senhaInformada === this.#senha){
            console.log("Autenticado");
        } else{
            console.log("Senha errada.")
        }
    }
}

const usuario1 = new Usuario();
usuario1.setSenha(12345)
usuario1.setSenha('senha1')
usuario1.autenticar('senha1')
usuario1.autenticar('senha')