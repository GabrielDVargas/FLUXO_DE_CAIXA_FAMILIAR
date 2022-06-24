
        // FLUXO DE CAIXA FAMILIAR //

let family = { 
    incomes: [2500, 3200, 250.43, 360.45],//saldo ( dinheiro) incomes = receitas
    expenses: [320.34, 128.45, 176.87, 1450.00, 4500]// extrato (dinheiro) expenses = despesas
}

function sum(array) {
    let total = 0;

    for (let value of array) { // pega todos os valores do array (incomes) e soma, faz o mesmo com o (expenses)
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes) // pega a soma dos valores de (incomes) e guarda o valor na variavel (calculateIncomes)
    const calculateExpenses = sum(family.expenses) // pega a soma dos valores de (expenses) e guarda o valor na variavel (calculateExpenses)

    const total = calculateIncomes - calculateExpenses // pega o valor total de (calculateIncomes) e subtrai (-) com valor total de (calculateExpenses)

    const positiveBalance = total >= 0

    let balanceText = "negativo"

    if (positiveBalance) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)} R$`)
}

calculateBalance()