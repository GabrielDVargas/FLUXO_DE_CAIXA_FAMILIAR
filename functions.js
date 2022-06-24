///  FUNCTIONS:  ///

/*function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('paciência e presistência')
    console.log('Revisão é mãe do aprendizado')
}

createPhrases()
createPhrases()
createPhrases()
createPhrases()

console.log('fim do progama')*/


///  ARGUMENTOS E PARÂMETROS:  ///

//function expression
//function snonymous

//parâmetros (parameters)
/*const sum = function(number1, number2){
    console.log(number1 + number2)
}

sum(2, 3)*/ //arguments - argumentos


///  RETORNANDO VALORES DENTRO DA FUNÇÃO  ///

//function expression
//function snonymous
/*let total = 0

//parâmetros (parameters)
const sum = function(number1, number2){
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

//console.log(`o número 1 é ${number1}`)
//console.log(`o número 1 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)*/


///  FUNCTION HOISTING  ///

//function hoisting

/*sayMyName()

function sayMyName() {
    console.log('mayk')
}*/


///   ARROW FUNCITON  ////

//arrow function

/*const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Gabriel')*/


//  CALLBACK FUNCTION  //

/*function sayMyName(name) {
    console.log('antes de executar a funcao callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)*/


/// FUNÇÕES CONSTRUTORAS  ///

/*
    Function() constructor

    *expressão new
    *criar um novo objeto
    *this keyword
*/

/*function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const mayk = new Person("Mayk")
const joao = new Person("João")
console.log(mayk.walk())
console.log(joao)*/

/*let date = new Date("2020-12-01")

console.log(date)*/






