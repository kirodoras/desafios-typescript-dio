/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";

Resolução*/

let employee = {code: 10, name:'John'}  //Resolução 1

employee.code = 10;
employee.name = 'John';

let employee2 : {code: number, name: string} = { //Resolução 2
    code: 10,
    name: 'John'
}

interface employee { //Resolução 3
    code: number,
    name: string
}

let employee3: employee = { //Resolução 3
    code: 200,
    name: 'John'
}