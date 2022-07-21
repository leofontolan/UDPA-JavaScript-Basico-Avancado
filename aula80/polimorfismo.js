//Super classe
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

//Métodos dentro do protótipo
Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente para saque: R$\ ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.extrato();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.extrato();
};

Conta.prototype.extrato = function () {
  console.log(
    `Agência: ${this.agencia} Conta: ${this.conta} Saldo: R$\ ${this.saldo}`
  );
};

//Conta Padrão teste
// const conta1 = new Conta(1234, 5678, 1000);
// console.log(conta1);
// conta1.extrato();
// conta1.depositar(500);
// conta1.sacar(500);
// conta1.sacar(1001);
// conta1.sacar(1000);




//Herança e especializando a Conta -> ContaCorrente
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente para saque: R$\ ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.extrato();
};


//Conta Corrente
// const contaCorrente = new ContaCorrente(1234, 5678, 1000, 500);
// contaCorrente.depositar(1000);
// contaCorrente.sacar(500);
// contaCorrente.sacar(1500);
// contaCorrente.sacar(500);
// contaCorrente.sacar(100);
// contaCorrente.extrato();


//Herança e especializando a Conta -> Herança
function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca(1234, 5678, 1000);
contaPoupanca.depositar(1000);
contaPoupanca.sacar(500);
contaPoupanca.sacar(1500);
contaPoupanca.sacar(500);
contaPoupanca.extrato();

