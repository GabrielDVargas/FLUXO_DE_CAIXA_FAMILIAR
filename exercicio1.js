
        // SISTEMA DE NOTAS ESCOLARES //

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >=70 && score <= 79
    let scoreD = score >=60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;


    if (scoreA) {
        scoreFinal = "A"
    }else if (scoreB) {
        scoreFinal = "B"
    }else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }

    return scoreFinal
}

console.log(getScore(96))
console.log(getScore(79))
console.log(getScore(80))
console.log(getScore(67))
console.log(getScore(5))
console.log(getScore(60))
console.log(getScore(-1))
console.log(getScore(123))
console.log(getScore(0))