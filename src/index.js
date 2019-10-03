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
    // write your solution here
    let mas=[];
    let j=0;
        for (let i=0; i<=(expr.length-1)/10; i++) {
            let litera =expr.substring(j, (j+10));
            j=j+10;
            while (litera[0] === '0') {
                litera = litera.substr(1);
            }
            let literamorze=litera.replace(/10/gi, ".");
            literamorze=literamorze.replace(/11/gi, "-");
            if (literamorze === '**********') { 
                literamorze=" ";
            } else for (let morze in MORSE_TABLE)
                if (morze===literamorze ) {
                    literamorze=(MORSE_TABLE[morze]);
                } 
                mas.push(literamorze);
        } 
        return mas.join("")
}

module.exports = {
    decode
}