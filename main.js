const lookup = {
    "IX": 9, "C": 100, "D": 500, "CM": 900, "I": 1,
    "XC": 90, "M": 1000, "L": 50, "CD": 400, "XL": 40,
    "V": 5, "X": 10, "IV": 4
};

const weights = [1000, 900, 500, 400, 100, 90,
    50, 40, 10, 9, 5, 4, 1];

const symbols = ["M", "CM", "D", "CD", "C", "XC", "L",
    "XL", "X", "IX", "V", "IV", "I"];
    

function decode(s) {
    return s.match(/CM|CD|XC|XL|IX|IV|[MDCLXVI]/g)
        .map(m => lookup[m])
        .reduce((a, b) => a + b);
}

function encode(n) {
    let result = '';
    weights.forEach(w => {
        while (n >= w) {
            result += symbols[i];
            n -= w;
        }
        if (n == 0)
            break;
    });
    return result;
}