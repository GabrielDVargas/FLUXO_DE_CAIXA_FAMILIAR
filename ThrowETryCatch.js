////////////////////////////
/*    try = tentar,
      throw = disparar, lançar
      catch = capturar, pegar

vamos tentar executar um bloco de codigo e se der algum erro vai ser disparado esse erro e entao eu posso capturar esse erro na minha aplicação */
 
////////////////////////////////
/*function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório' 
    }

    console.log('depois do erro')
}

sayMyName()

console.log('após a função de erro')*/
//o throw acabou com a aplicação ou seja parou (vale lembrar que neste codigo)

/////////////////////////////////
/*function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório' 
    }

    console.log('depois do erro')
}

// try...catch

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após a função de erro')*/
//essa forma é uma maneira de ficar capturando erros sem o programa parar

////////////////////////////////////
//  throw...

/*function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório' //OBS: (da para usar o throw sozinho sem try/catch)
        //ou
        //throw new Error("Nome é obrigatorio")
    }

    console.log(name)
}

// try...catch

try {
    sayMyName('Gabriel')
} catch(e) {
    console.log(e)
}

console.log('após ao  try/catch')*/