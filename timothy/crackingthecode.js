

const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
};
function decode(encodedWord){
    if(!(encodedWord[0] in cipher)) {
        return " ";
    }
    else { 
        const characterIndex = cipher[encodedWord[0]] - 1;
        return encodedWord[characterIndex];
    }
}
console.log(decode('cycle'));
console.log(decode('earth'));

function decodeWords(string){
    return string.split(' ').map(word => decode(word)).join('');
}
const exampleString = 'craft block argon meter bells brown croon droop';
console.log(decodeWords(exampleString));