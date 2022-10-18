/*
Truthy:
1. true.
2. any number (+ve, -ve) will be truthy other than 0.
3. any string other empty string.
4. '0', 'false'
5.{}
6.[]


Falsy:
1. false.
2. 0
3. '' Empty string is falsy
4. undefined
5. null
*/


let x = [];
console.log(x);
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// optional
// check falsy
const y = '';
if (!!y){ /* ! eitar mane hosse false r y ta hosse falsy. eijonn minus minus e true. tahole !y mane value ta false eita shotto hoile ans falsy */
    console.log('value is falsy');
}
else{
    console.log('valo')
}

// check truthy
const z = ' ';
if(!!x){ /* ! eitar mane hosse false r x ta hosse true. tahole iiy mane (--)+ mane value ta true eita shotto hoile ans truthy */
    console.log('value is truthy');
}
else{
    console.log('gelo')
}