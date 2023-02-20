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
    for (let i=0; i<expr.length; i+=10) {
        tensArr.push(expr.slice(i, i + 10));
    }
    
    let dotsArr = [];
    for (let item of tensArr) {
        let letterArr = [];
        for (let i=0; i<item.length; i+=2) {
            if (item[i] === '1' && item[i+1] === '0') {
                letterArr.push('.');
            } else if (item[i] === '1' && item[i+1] === '1') {
                letterArr.push('-');
            } else if (item[i] === '*') {
                letterArr.push(' '); 
                break;
            } 
        }
        dotsArr.push(letterArr.join(''));
    }
    
    let decodedArr = dotsArr.map(unit => MORSE_TABLE[unit] || ' ');

    return decodedArr.join('');
}

module.exports = {
    decode
}