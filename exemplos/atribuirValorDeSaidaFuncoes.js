"use strict";
//atribuir tipo a uma função para que a mesma não retorne algo diferente do que vc deseja por um erro
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2.toString; /*Aqui um erro transforma numero2 em string, resultado
                                        é compilado sem o valor correto resultado = 13*/
}
console.log(somarValoresNumericos(1, 3));
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2.toString; /*atribuindo a saida apos os " (somarValoresNumericos): number " a função
                                         não é executado pois contem um numero e uma string*/
}
console.log(somarValoresNumericos(1, 3));
