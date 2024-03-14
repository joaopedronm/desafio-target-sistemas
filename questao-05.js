function inverterString(string) {
    let novaString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        novaString += string[i];
    }
    return novaString;
}

const minhaString = 'Target Sistemas';
const stringInvertida = inverterString(minhaString);

console.log(stringInvertida);

// Aqui também optei por informar a string diretamente no código, no argumento da função.