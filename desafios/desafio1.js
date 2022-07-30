"use strict";
/* Como podemos rodar isso em um arquivo .ts sem causar erros?

let employee = {};
employee.code = 10;
employee.name = "John";

Resolução*/
let employee = { code: 10, name: 'John' }; //Resolução 1
employee.code = 10;
employee.name = 'John';
let employee2 = {
    code: 10,
    name: 'John'
};
let employee3 = {
    code: 200,
    name: 'John'
};
