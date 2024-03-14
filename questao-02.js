function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let c;

    if (numero === 0 || numero === 1) {
        console.log('O número informado pertence à sequência de Fibonacci.');
        return;
    }

    // o trecho abaixo calcula a sequência de Fibonacci até ultrapassar o número informado na função
    while (true) {
        c = a + b;
        if (c === numero) {
            console.log('O número informado pertence à sequência de Fibonacci.');
            return;
        } else if (c > numero) {
            console.log('O número informado não pertence à sequência de Fibonacci.');
            return;
        } else {
            console.log('O valor informado não é um número válido. Verifique e tente novamente.')
            return
        }
        a = b;
        b = c;
    }
}

verificaFibonacci(21);

// Aqui optei por informar o número diretamente no código, no argumento da função.