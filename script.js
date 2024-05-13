const enteredValue = document.querySelector('#entered-value')
const savedValue = document.querySelector('#saved-value')

// Valores

let number1 = 0

// Limpar valores
enteredValue.value = 0
savedValue.value = 0

// Função Armazenar valor

let calc = []

// Funções de Apagar

const calcClear = clear => {
    enteredValue.value = clear
    savedValue.value = ''
    number1 = 0
    digits = []
}

const calcClearEntry = clear => {
    enteredValue.value = clear
    number1 = 0
    digits = []
}

const calcLastDigit = clear => {
    enteredValue.value = enteredValue.value.slice(0, -1)
    digits.pop()
}

// Função de Dígitos
let digits = []
const calcDigit = value => {

    digits.push(value)
    refreshDigit()
}
const refreshDigit = () => {
    enteredValue.value = digits.join('')
}


// Funções Matemáticas

const calcPercentage = (value1, value2) => {
    savedValue.value = enteredValue.value
    enteredValue.value = 0
    const percentage = (value1 * value2) / 100
    return percentage
}

const calcReciprocal = value1 => {
    const reciprocal = (1 / value1)
    return reciprocal
}

const calcSquared = value1 => {
    const squared = ((value1) * value1)
    return squared
}

const calcSquareRoot = value1 => {
    const squaredRoot = Math.sqrt(value1)
    return squaredRoot
}

const calcDivision = (value1, value2) => {
    enteredValue.value = 0
    const division = value2 / value1
    return division
}

const calcMultiplication = (value1, value2) => {
    enteredValue.value = 0
    const multiplication = value1 * value2
    return multiplication
}

const calcAnyLess = (value1, value2) => {
    enteredValue.value = 0
    const anyLess = value2 - value1
    return anyLess
}

const calcMore = (value1, value2) => {
    enteredValue.value = 0
    const more = value1 + value2
    return more
}

function calculate(value) {
    if (value === 'percentage' || value === 'division' ||
        value === 'multiplication' || value === 'anyless' || value === 'more') {
        number1 = enteredValue.value
        calc.push(value)
        savedValue.value = number1
        enteredValue.value = 0
        digits = []
    }

    if (value === 'reciprocal') {
        number1 = enteredValue.value
        enteredValue.value = calcReciprocal(number1)
    }

    if (value === 'squared') {
        number1 = enteredValue.value
        enteredValue.value = calcSquared(number1)
    }

    if (value === 'squareroot') {
        number1 = enteredValue.value
        enteredValue.value = calcSquareRoot(number1)
    }

    if (value === 'sum') {
        calc.forEach(function (item) {
            if (item === 'percentage') {
                enteredValue.value = calcPercentage(parseFloat(enteredValue.value), parseFloat(number1))
                digits = []
                calc = []
            }

            if (item === 'division') {
                enteredValue.value = calcDivision(parseFloat(enteredValue.value), parseFloat(number1))
                digits = []
                calc = []
            }

            if (item === 'multiplication') {
                enteredValue.value = calcMultiplication(parseFloat(enteredValue.value), parseFloat(number1))
                digits = []
                calc = []
            }

            if (item === 'anyless') {
                enteredValue.value = calcAnyLess(parseFloat(enteredValue.value), parseFloat(number1))
                digits = []
                calc = []
            }

            if (item === 'more') {
                enteredValue.value = calcMore(parseFloat(enteredValue.value), parseFloat(number1))
                digits = []
                calc = []
            }
        })
    }
}