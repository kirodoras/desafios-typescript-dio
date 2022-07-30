"use strict";
let valorAny;
valorAny = 3;
valorAny = 'ola';
valorAny = true; /*any recebe qualqer tipo, não é recomendado usar pois o Typescript
                  para verificar os tipos e deixar o codigo mais seguro!!! */
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'testao';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2); //Por assumir valor any ele retorna "2" pq o true é valor "1" 1+1 = 2
somarString('ola', ', como vai?'); //O correto seria este resultado somando strings!
