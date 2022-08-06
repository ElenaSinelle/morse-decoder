const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let tensArr = [];
    for (let i = 0; i < expr.length; i += 10) {
        tensArr.push(expr.slice(i, i + 10));
    }

    let codedArr = [];
    tensArr.forEach((item) => {
        let codedSymb = '';
        for (let i = 0; i < 10; i += 2) {
            if (item[i] + item[i+1] == '10') {
                codedSymb += '.';
            } else if (item[i] + item[i+1] == '11') {
                codedSymb += '-';
            } else if (item[i] + item[i+1] == '00') {
                codedSymb += ''
            }
        }
        codedArr.push(codedSymb);
    })

    let decodedArr = codedArr.map((item) => {
        return MORSE_TABLE[item] || ' ';
    })

    return decodedArr.join('');
}

module.exports = {
    decode
}