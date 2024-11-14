const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
};

const bigs = {
    3: 'thousand',
    6: 'million',
    9: 'billion',
    12: 'trillion',
    15: 'quadrillion',
    18: 'quintillion',
    21: 'sextillion',
    24: 'septillion',
    27: 'octillion',
    30: 'nonillion',
    33: 'decillion',
    36: 'undecillion',
    39: 'duodecillion'
};

function convertChunk(value) {
    let result = '';

    if (value >= 100) {
        const hundreds = Math.floor(value / 100);
        result += numbers[hundreds] + ' hundred';
        value %= 100;
        if (value > 0) {
            result += ' ';
        }
    }

    if (value >= 20) {
        const tens = Math.floor(value / 10) * 10;
        result += numbers[tens];
        value %= 10;
        if (value > 0) {
            result += ' ';
        }
    }

    if (value > 0) {
        result += numbers[value];
    }

    return result.trim();
}

function parseMath(expression) {
    expression = expression.replace(/sin\(([^)]+)\)/g, (_, angle) => Math.sin(degreesToRadians(eval(angle))));
    expression = expression.replace(/cos\(([^)]+)\)/g, (_, angle) => Math.cos(degreesToRadians(eval(angle))));
    expression = expression.replace(/tan\(([^)]+)\)/g, (_, angle) => Math.tan(degreesToRadians(eval(angle))));
    expression = expression.replace(/log\(([^)]+)\)/g, (_, value) => Math.log(eval(value)));
    expression = expression.replace(/exp\(([^)]+)\)/g, (_, value) => Math.exp(eval(value)));
    expression = expression.replace(/sqrt\(([^)]+)\)/g, (_, value) => Math.sqrt(eval(value)));

    const result = eval(expression);
    
    if (typeof result !== 'number' || !isFinite(result)) {
        throw new Error('Invalid mathematical expression');
    }
    
    return result;
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function numberToWordsWithDecimal(value) {
    const roundedValue = Math.round(value * 100) / 100;
    const [integerPart, decimalPart] = roundedValue.toString().split('.');
    let words = numbertoletter(Number(integerPart));

    if (decimalPart) {
        words += ' point ' + Array.from(decimalPart).map(digit => numbers[digit]).join(' ');
    }

    return words.trim();
}

function numbertoletter(value) {
    if (typeof value === 'string') {
        try {
            value = parseMath(value); 
        } catch (error) {
            return 'Invalid mathematical expression';
        }
    }

    if (typeof value !== 'number' || !isFinite(value) || value < 0 || value > 1.0e+39) {
        return 'Number out of range';
    }

    if (value === 0) {
        return numbers[0];
    }

    if (value % 1 !== 0) {
        return numberToWordsWithDecimal(value);
    }

    let result = '';
    let scale = 0;

    while (value > 0) {
        let chunk = value % 1000;
        if (chunk > 0) {
            result = convertChunk(chunk) + (scale > 0 ? ' ' + bigs[scale] : '') + (result ? ' ' + result : '');
        }
        value = Math.floor(value / 1000);
        scale += 3;
    }

    return result.trim();
}

module.exports = numbertoletter;