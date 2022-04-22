/*******  Atividade: Conta Bancária  ******
 * 
 * 1. Crie a classe ContaBancaria , que possui os parâmetros agencia, numero, tipo e saldo;
 * 
 * 2. Dentro de ContaBancaria , construa o getter e setter de saldo;
 * 
 * 3. Dentro de ContaBancaria , crie os métodos sacar e depositar;
 * 
 * 4. Crie uma classe filha chamada ContaCorrente que herda todos esses parâmetros e que possua
 *      o parâmetro cartaoCredito;
 * 
 * 5. Ainda em ContaCorrente , construa o getter e setter de cartaoCredito;
 * 
 * 6. Ainda em ContaCorrente , faça com que o tipo seja "conta corrente" por padrão;
 * 
 * 7. Crie uma classe filha chamada ContaPoupanca que herda todos parâmetros de ContaBancaria;
 * 
 * 8. Crie uma classe filha chamada ContaUniversitaria que herda todos parâmetros de ContaBancaria;
 * 
 * 9. Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores 
 *      que 500 reais;
 * 
 * 
*/

class ContaBancaria {

    constructor(agencia, numero, tipo , saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação Negada , saldo insulficiente"
        }

        return this._saldo -= valor;
    }

    depositar(valor){
        return this._saldo += valor;
    }
}


class ContaCorrente extends ContaBancaria {

    constructor(agencia, numero ,cartaoCredito){
        super(agencia, numero, "conta corrente" , 0);
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {

    constructor(agencia, numero ){
        super(agencia, numero, "conta poupança" , 0);
    }

}

class ContaUniversitaria extends ContaBancaria {

    constructor(agencia, numero ){
        super(agencia, numero, "conta universitária" , 0);
    }

    sacar(valor){
        if(valor > 500){
            return "Operação Negada , quantia não permitida"
        }

        return this._saldo -= valor;
    }

}


const minhaConta = new ContaCorrente(1,234,true);

console.log(minhaConta.saldo);

console.log(minhaConta.depositar(1000));

console.log(minhaConta.sacar(500));

console.log(minhaConta.sacar(600));

const minhaPoup = new ContaPoupanca(1,22);



const minhaUni = new ContaUniversitaria(1,25);

console.log(minhaUni.depositar(1000));

console.log(minhaUni.sacar(550));

console.log(minhaUni.sacar(120));



