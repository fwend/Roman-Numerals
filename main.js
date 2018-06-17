const lookup = {"IX":  9, "C":  100, "D" :500, "CM": 900, "I":   1,
                "XC": 90, "M": 1000, "L" : 50, "CD": 400, "XL": 40,
                "V" :  5, "X":   10, "IV":  4};

function decode(s) {
    return s.match(/CM|CD|XC|XL|IX|IV|[MDCLXVI]/g)
            .map(m => lookup[m])
            .reduce((a, b) => a + b);
}